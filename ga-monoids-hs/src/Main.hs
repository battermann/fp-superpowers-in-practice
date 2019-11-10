{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings     #-}
{-# LANGUAGE FlexibleInstances     #-}
module Main where

import           AddToCartRate
import           Data.Foldable
import qualified Data.Map                      as Map
import           Data.Map.Append
import           GoogleAnalytics
import           Text.Pretty.Simple             ( pPrint )
import           Control.Applicative
import           Data.List.Split
import           Data.List
import           Text.Printf

fromSession :: Session -> AddToCartRate
fromSession session =
  let f acc hit = if (action_type . eCommerceAction) hit == "3"
        then acc { numA2cEvents             = numA2cEvents acc + 1
                 , numSessionsWithA2cEvents = 1
                 }
        else acc
  in  foldl f (AddToCartRate 1 0 0) (hits session)

groupByDevice
  :: (Session -> AddToCartRate) -> (Session -> AppendMap Device AddToCartRate)
groupByDevice fromSession =
  \session -> AppendMap (Map.singleton (device session) $ fromSession session)

main :: IO ()
main = do
  sessions <- getSessions
  let result = foldMap (groupByDevice fromSession) sessions
  putStrLn (toString (unAppendMap result))

main1 :: IO ()
main1 = do
  sessions <- getSessions
  let addToCartRates = fromSession <$> sessions
  let result         = foldl (<>) mempty addToCartRates
  pPrint result


main2 :: IO ()
main2 = do
  sessions <- getSessions
  let groupedSessions = chunksOf 10 sessions
  let results         = fmap (foldMap fromSession) groupedSessions
  let result          = mconcat results
  pPrint result

toString :: Map.Map Device AddToCartRate -> String
toString m =
  intercalate "\n\n"
    $   (\(k, v) ->
          printf "device category ............... = %s" (deviceCategory k)
            ++ "\n"
            ++ show v
        )
    <$> Map.toList m
