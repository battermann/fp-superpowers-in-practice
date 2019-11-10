{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE FlexibleInstances     #-}
module Main where

import           Data.Validation
import           Data.Char
import           Data.Functor
import           Text.Regex.TDFA
import           Data.List.NonEmpty             ( NonEmpty
                                                , fromList
                                                )

main :: IO ()
main = do
  let form = UnvalidatedForm "foo" "Image" "" "" "http://foo.bar"
  putStrLn $ show $ formValidation form

newtype ImageUrl = ImageUrl String
 deriving Show

newtype VideoUrl = VideoUrl String
  deriving Show

newtype VideoText = VideoText String
  deriving Show

newtype Image = Image ImageUrl
 deriving Show

data Video = Video
  { url  :: VideoUrl
  , text :: VideoText
  } deriving Show

newtype Username = Username String
  deriving Show

data MediaType = TypeImage | TypeVideo
  deriving Show

data Media = Img Image | Vid Video
 deriving Show

data MediaUpload = MediaUpload
  { name :: Username
  , media    :: Media
  } deriving Show

data UnvalidatedForm = UnvalidatedForm
  { username :: String
  , mediaType :: String
  , videoUrl :: String
  , videoText :: String
  , imageUrl :: String
  } deriving Show

data Error = VideoTextEmpty | UsernameHasInvalidChars | UsernameTooShort | InvalidImageUrl | InvalidVideoUrl | InvalidMediaType
  deriving Show

type FormValidation = Validation (NonEmpty Error)

invalid :: Error -> FormValidation a
invalid e = Failure (fromList [e])

alphaNum :: String -> FormValidation String
alphaNum str =
  if all isAlphaNum str then Success str else invalid UsernameHasInvalidChars

minLength :: Int -> String -> FormValidation String
minLength l str =
  if length str >= l then Success str else invalid UsernameTooShort

isUrl :: Error -> String -> FormValidation String
isUrl e str =
  let pattern = "^(https?)://[^\\s/$.?#].[^\\s]*$"
  in  if str =~ pattern then Success str else invalid e

validateUsername :: String -> FormValidation Username
validateUsername name = Username <$> (minLength 3 name *> alphaNum name)

validateImage :: String -> FormValidation Media
validateImage url = (Img . Image . ImageUrl) <$> isUrl InvalidImageUrl url

validateVideoText :: String -> FormValidation VideoText
validateVideoText str =
  if (not . null) str then Success (VideoText str) else invalid VideoTextEmpty

validateVideoUrl :: String -> FormValidation VideoUrl
validateVideoUrl str = VideoUrl <$> isUrl InvalidVideoUrl str

validateVideo :: String -> String -> FormValidation Media
validateVideo url text =
  let v = Video <$> validateVideoUrl url <*> validateVideoText text
  in  Vid <$> v

validateMediaType :: String -> FormValidation MediaType
validateMediaType "Image" = Success TypeImage
validateMediaType "Video" = Success TypeVideo
validateMediaType _       = invalid InvalidMediaType

formValidation :: UnvalidatedForm -> FormValidation MediaUpload
formValidation form =
  let media = case validateMediaType (mediaType form) of
        Success TypeImage -> validateImage (imageUrl form)
        Success TypeVideo -> validateVideo (videoUrl form) (videoText form)
        Failure e         -> Failure e
  in  MediaUpload <$> validateUsername (username form) <*> media
