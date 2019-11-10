{-# LANGUAGE DeriveGeneric #-}

module AddToCartRate where

import           Data.Semigroup
import           Generics.Deriving.Base         ( Generic )
import           Generics.Deriving.Monoid
import           Text.Printf
import           Data.List

data Interval = Interval
  { start :: Min Int
  , end   :: Max Int
  } deriving (Generic, Show)

instance Semigroup Interval where
  (<>) = mappenddefault

data AddToCartRate = AddToCartRate
  { numSessions              :: Sum Int
  , numA2cEvents             :: Sum Int
  , numSessionsWithA2cEvents :: Sum Int
  --, interval :: Maybe Interval
  } deriving (Generic)

instance Semigroup AddToCartRate where
  (<>) = mappenddefault

instance Monoid AddToCartRate where
  mempty = memptydefault

instance Show AddToCartRate where
  show a2cr =
    let s    = (getSum . numSessions) a2cr
        e    = (getSum . numSessionsWithA2cEvents) a2cr
        rate = ((fromIntegral e / fromIntegral s) * 100.0) :: Double
    in  intercalate
          "\n"
          [ printf "total number of sessions ...... = %d"    s
          , printf "sessions with add-to-cart event = %d"    e
          , printf "Add-to-cart rate .............. = %.2f" rate
          ]
