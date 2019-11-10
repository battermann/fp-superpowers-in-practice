{-# LANGUAGE DeriveGeneric     #-}
{-# LANGUAGE OverloadedStrings #-}

module GoogleAnalytics where

import           Data.Aeson
import qualified Data.ByteString.Lazy       as BS
import qualified Data.ByteString.Lazy.Char8 as C
import           Data.Foldable
import           Data.Maybe
import           Data.Text                  (Text)
import           GHC.Generics
import           System.IO

data Session = Session
  { visitId        :: Text
  , visitStartTime :: Int
  , device         :: Device
  , hits           :: [Hit]
  } deriving (Generic, Show)

data Product = Product
  { productQuantity :: Int
  , productPrice    :: Int
  } deriving (Generic, Show)

data ECommerceAction = ECommerceAction
  { action_type :: Text
  } deriving (Generic, Show)

data Hit = Hit
  { time            :: Int
  , product         :: [Product]
  , eCommerceAction :: ECommerceAction
  } deriving (Generic, Show)

data Device = Device
  { deviceCategory :: Text
  } deriving (Generic, Show, Eq, Ord)

instance FromJSON Product

instance FromJSON Device

instance FromJSON ECommerceAction

instance FromJSON Hit

instance FromJSON Session

getSessions :: IO [Session]
getSessions = do
  content <- BS.readFile "ga_sessions.json"
  let lines = C.lines content
  return (catMaybes $ decode <$> lines)
