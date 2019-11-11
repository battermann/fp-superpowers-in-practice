<!-- .slide: data-background="./images/superman.jpg" data-background-opacity="0.5"-->
# FP Superpowers In Practice

<small>Lambda Cologne, November 11th, 2019</small>

Leif Battermann - [@leifbattermann](https://twitter.com/leifbattermann)

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@yogipurnama?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Yogi Purnama"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Yogi Purnama</span></a>

---

# About me

- Hivemind Technologies AG (Cologne)|fr
- Big data and streaming application on cloud infrastructures|fr
- Worked with C#, F#, Scala, Elm|fr
- Haskell in my free time|fr
- Co-organizer of Scala User Group Düsseldorf|fr
- 2 kids|fr

---

# Agenda

<span style="color:lightblue">3 Superpowers</span>

|     |     |
| --- | --- |
| Functors | <span style="color:lightblue">#Music</span> |
| Monoids | <span style="color:lightblue">#DataAnalysis</span> <span style="color:lightblue">#ECommerce</span> |
| Applicatives | <span style="color:lightblue">#FormsValidation</span> |

notes:

- In the last example we see 3 superpowers combined

---

<!-- .slide: data-background="./images/music.jpg" data-background-opacity="0.5"-->
# Functors

</br>
</br>
</br>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@marius?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Marius Masalar"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Marius Masalar</span></a>

---

<!-- .slide: data-background="./images/hsom.jpg" data-background-size="contain"-->

---

## Functors

The core types

```haskell
type Dur = Rational

data Primitive a
  = Note Dur a
  | Rest Dur
```
|fr

```haskell
data Music a
  = Prim (Primitive a)
  | Music a :+: Music a -- sequential composition
  | Music a :=: Music a -- parallel composition
```
|fr

---

## Functors

Some Euterpea basics

```haskell
note :: Dur -> a -> Music a
line :: [Music a] -> Music a -- sequence of notes
```
|fr

```haskell
hn :: Dur -- half note
qn :: Dur -- quarter note
en :: Dur -- eighth note
sn :: Dur -- sixteenth note

dqn :: Dur -- dotted quarter note
```
|fr

```haskell
type Octave = Int

c :: Octave -> Dur -> Music Pitch -- ctor for a C
fs :: Octave -> Dur -> Music Pitch -- ctor for an F♯
bf :: Octave -> Dur -> Music Pitch -- ctor for a B♭
```
|fr

---

## Functors

A simple melody

```haskell
music = c 4 qn :+: d 4 qn :+: e 4 hn
```

<img src="/images/notes.png" width=75% style="border:0;"> |fr

---

## Functors

Can we transpose the melody?

```haskell
music2 = transpose 7 music
```

<img src="/images/notes_transposed.png" width=70% style="border:0;"> |fr


```haskell
transpose :: Int -> Music Pitch -> Music Pitch
transpose = ???
```
|fr

---

## Functors

<span style="color:lightblue">Functor</span> instances

```haskell
pMap :: (a -> b) -> Primitive a -> Primitive b
pMap f (Note d x) = Note d (f x)
pMap f (Rest d)   = Rest d
```
|fr

```haskell
mMap :: (a -> b) -> Music a -> Music b
mMap f (Prim p)    = Prim (pMap f p)
mMap f (m1 :+: m2) = mMap f m1 :+: mMap f m2
mMap f (m1 :=: m2) = mMap f m1 :=: mMap f m2
```
|fr

```haskell
instance Functor Primitive where
  fmap = pMap
```
|fr

```haskell
instance Functor Music where
  fmap = mMap
```
|fr

---

## Functors

Given a function `trans`

```haskell
trans :: Int -> Pitch -> Pitch
```

We can now implement `transpose`

```haskell
transpose :: Int -> Music Pitch -> Music Pitch
transpose semitones = fmap (trans semitones)
```

---

## Functors

```haskell
x1 = c 4 en :+: g 4 en :+: c 5 en :+: g 5 en
```

<button type="button" class="myButton" onclick="play('1')"><i class="fas fa-play"></i></button>
<button type="button" class="myButton" onclick="stop()"><i class="fas fa-stop"></i></button>


```haskell
x2 = x1 :+: transpose 3 x1
```
|fr1

<button type="button" class="myButton" onclick="play('2')"><i class="fas fa-play"></i></button>
<button type="button" class="myButton" onclick="stop()"><i class="fas fa-stop"></i></button>
|fr1

```haskell
x3 = x2 :+: x2 :+: invert x2 :+: retro x2
```
|fr2

<button type="button" class="myButton" onclick="play('3')"><i class="fas fa-play"></i></button>
<button type="button" class="myButton" onclick="stop()"><i class="fas fa-stop"></i></button>
|fr2

```haskell
x4 = forever x3 :=: forever (tempo (2/3) x3)
```
|fr3

<button type="button" class="myButton" onclick="play('4')"><i class="fas fa-play"></i></button>
<button type="button" class="myButton" onclick="stop()"><i class="fas fa-stop"></i></button>
|fr3

<small>Blue Lambda from <a href="https://github.com/Euterpea/Euterpea2-Examples/blob/master/NoteLevel/BlueLambda.lhs">Euterpea</a></small>

---

## Functors

<span style="color:lightblue">Summary</span>

- Manipulate values inside a container|fr
   (not only `List`)
- Fundamental building block|fr

---

<!-- .slide: data-background="./images/mountains.jpg" data-background-opacity="0.5"-->
# Monoids

</br>
</br>
</br>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@markk92?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mark Koch"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Mark Koch</span></a>

---

## Monoids

<span style="color:lightblue">Add-to-cart rate</span>

> Key performance indicator
>
> The percentage of sessions where the user adds at least one item to their shopping cart

---

## Monoids

Google Analytics sessions - user interactions on a website

```json
{
  "visitStartTime": "1560876457",
  "device": { "deviceCategory": "desktop" },
  "hits": [
    {
      "hitNumber": "135",
      "time": "4886016",
      "hour": "11",
      "minute": "51",
      "product": [
        {
          "productQuantity": "1",
          "productPrice": "1099000000"
        }
      ],
      "eCommerceAction": {
        "action_type": "3",
        "step": "1"
      },
      "type": "EVENT"
    }
  ]
}
```

---

## Monoids

A session type

```haskell
data Session = Session
  { visitId :: Text
  , visitStartTime :: Int
  , device :: Device
  , hits :: [Hit]
  }

data Hit = Hit
  ...  
```

---

## Monoids

An Add-to-cart rate type

```haskell
data AddToCartRate = AddToCartRate
  { numSessions :: Int
  , numA2cEvents :: Int
  , numSessionsWithA2cEvents :: Int
  }
```
|fr

---

## Monoids

<span style="color:lightblue">Monoid</span> instances for Int

```bash
λ> Sum 5 <> Sum 5
Sum {getSum = 10}

λ> Product 4 <> Product 4
Product {getProduct = 16}

λ> Max 1 <> Max 10
Max {getMax = 10}
```
|fr

```bash
λ> foldl (<>) mempty  [Sum 5, Sum 5]
Sum {getSum = 10}

λ> foldl (<>) mempty  (Product <$> [1, 2, 3])
Product {getProduct = 6}
```
|fr

---

## Monoids

Deriving a <span style="color:lightblue">monoid</span> instance

```haskell
data AddToCartRate = AddToCartRate
  { numSessions :: Sum Int
  , numA2cEvents :: Sum Int
  , numSessionsWithA2cEvents :: Sum Int
  } deriving (Generic, Show)
````
|fr

```haskell
instance Semigroup AddToCartRate where
  (<>) = mappenddefault

instance Monoid AddToCartRate where
  mempty = memptydefault
```
|fr

---

## Monoids

How to turn a single `Session` into an `AddToCartRate`?

```haskell
fromSession :: Session -> AddToCartRate
fromSession session =
  let f acc hit = if (action_type . eCommerceAction) hit == "3"
        then acc { numA2cEvents = numA2cEvents acc + 1
                 , numSessionsWithA2cEvents = 1
                 }
        else acc
  in  foldl f (AddToCartRate 1 0 0) (hits session)
```
|fr

---

## Monoids

Process with `map` and `foldl`

```haskell
main :: IO ()
main = do
  sessions <- getSessions
  let addToCartRates = fromSession <$> sessions
  let result         = foldl (<>) mempty addToCartRates
  pPrint result
```
|fr1

Or using `foldMap`
|fr2

```haskell
main :: IO ()
main = do
  sessions <- getSessions
  let result = foldMap fromSession sessions
  pPrint result
```
|fr2

---

## Monoids

Output

```bash
total number of sessions ...... = 23
sessions with add-to-cart event = 8
Add-to-cart rate .............. = 34.78
```

---

## Monoids

Just a few steps away from parallelization

```haskell
let sessionChunks = chunksOf 1000 sessions
let results       = fmap (foldMap fromSession) sessionChunks
let result        = mconcat results
```

---

## Monoids

<span style="color:lightblue">New requirement</span>

> Determine add-to-cart rate per device category
|fr

---

## Monoids

Using the `AppendMap` <span style="color:lightblue">monoid</span> instance

```haskell
groupByDevice
  :: (Session -> AddToCartRate)
  -> (Session -> AppendMap Device AddToCartRate)
groupByDevice fromSession =
  \session -> AppendMap
    (Map.singleton (device session) $ fromSession session)
```  
|fr

---

## Monoids

Putting it together

```haskell
main :: IO ()
main = do
  sessions <- getSessions
  let result = foldMap (groupByDevice fromSession) sessions
  pPrint result
```

---

## Monoids

Output

```bash
device category ............... = desktop
total number of sessions ...... = 7
sessions with add-to-cart event = 7
Add-to-cart rate .............. = 100.00

device category ............... = mobile
total number of sessions ...... = 16
sessions with add-to-cart event = 1
Add-to-cart rate .............. = 6.25
```

---

## Monoids

<span style="color:lightblue">Summary</span>

- Great for combining values|fr
- Highly composable|fr
- Easy to parallelize|fr

---

<!-- .slide: data-background="./images/one_way.jpg" data-background-opacity="0.2"-->
# Applicatives

</br>
</br>
</br>

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@bdchu614?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Brendan Church"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Brendan Church</span></a>

---

## Applicatives

Problems with (forms) validation

- Abort on first error|fr
- Dependant (form) fields|fr
- Internal / external model mismatch|fr
- Not composable|fr

notes:

- At least if you are doing it wrong

---

## Applicatives

Demo

<iframe src="https://fp-superpowers-forms-elm.surge.sh/" width=1000 height=450 frameborder="0"></iframe>

---

## Applicatives

Internal model of the user input

```haskell
newtype Username = Username String
```
|fr

```haskell
newtype ImageUrl = ImageUrl String
newtype Image    = Image ImageUrl
```
|fr

```haskell
newtype VideoUrl  = VideoUrl String
newtype VideoText = VideoText String

data Video = Video { url :: VideoUrl, text :: VideoText }
```
|fr

```haskell
data Media = Img Image | Vid Video
```
|fr

```haskell
data MediaUpload = MediaUpload
  { name :: Username
  , media :: Media
  }
```
|fr

---

## Applicatives

A type for an un-validated form

Represents user input

```haskell
data UnvalidatedForm = UnvalidatedForm
  { username :: String
  , mediaType :: String
  , videoUrl :: String
  , videoText :: String
  , imageUrl :: String
  }
```
|fr

---

<!-- .slide: data-background="./images/meme.png" data-background-opacity="1" data-background-size="contain"-->

---

## Applicatives

<span style="color:lightblue">Validation library</span>

A type for validation|fr1

```haskell
data Validation err a
  = Success a
  | Failure err
```
|fr1

<span style="color:lightblue">Applicative</span> instance
|fr2

```haskell
instance Semigroup err => Applicative (Validation err) where
  pure = Success
  Failure e1 <*> Failure e2 = Failure e1 <> e2
  Failure e1 <*> Success _  = Failure e1
  Success _  <*> Failure e2 = Failure e2
  Success f  <*> Success a  = Success (f a)
```
|fr2

notes:

- Plus some convenient function
- Other type class instances (e.g. functor)

---

## Applicatives

<span style="color:lightblue">Validation logic</span>

What can go wrong?|fr1

```haskell
data Error
  = UsernameHasInvalidChars
  | UsernameTooShort
  | InvalidImageUrl
  | InvalidVideoUrl
  | VideoTextEmpty  
  | InvalidMediaType
```
|fr1

Type alias for our forms validation
|fr2

```haskell
type FormValidation = Validation (NonEmpty Error)
```
|fr2

note:

- Non-empty list

---

## Applicatives

Some helpers

```haskell
alphaNum :: String -> FormValidation String
alphaNum str =
  if all isAlphaNum str
    then Success str
    else invalid UsernameHasInvalidChars
```
|fr

```haskell
minLength :: Int -> String -> FormValidation String
minLength ml str =
  if length str >= ml
    then Success str
    else invalid UsernameTooShort
```
|fr

```haskell
isUrl :: Error -> String -> FormValidation String
isUrl e str =
  let pattern = "^(https?)://[^\\s/$.?#].[^\\s]*$"
  in  if str =~ pattern then Success str else invalid e
```
|fr

---

## Applicatives

Username validation

```haskell
validateUsername :: String -> FormValidation Username
validateUsername name =
  Username <$> (minLength 3 name *> alphaNum name)
```
|fr

---

## Applicatives

Video validation

```haskell
validateVideoText :: String -> FormValidation VideoText
validateVideoText str =
  if (not . null) str
    then Success (VideoText str)
    else invalid VideoTextEmpty
```
|fr

```haskell
validateVideoUrl :: String -> FormValidation VideoUrl
validateVideoUrl str = VideoUrl <$> isUrl InvalidVideoUrl str
```
|fr

```haskell
validateVideo :: String -> String -> FormValidation Media
validateVideo u txt =
  let v = Video <$> validateVideoUrl u <*> validateVideoText txt
  in  Vid <$> v
```
|fr

---

## Applicatives

Image validation

```haskell
validateImage :: String -> FormValidation Media
validateImage url =
  (Img . Image . ImageUrl) <$> isUrl InvalidImageUrl url
```
|fr

Media type validation
|fr

```haskell
validateMediaType :: String -> FormValidation MediaType
validateMediaType "Image" = Success TypeImage
validateMediaType "Video" = Success TypeVideo
validateMediaType _       = invalid InvalidMediaType
```
|fr

---

## Applicatives

Putting it all together

```haskell
formValidation :: UnvalidatedForm -> FormValidation MediaUpload
formValidation form =
 let media = case validateMediaType (mediaType form) of
      Success TypeImage -> validateImage (imageUrl form)
      Success TypeVideo -> validateVideo (videoUrl form) (videoText form)
      Failure e -> Failure e
 in  MediaUpload <$> validateUsername (username form) <*> media
```  
|fr

---

## Applicatives

Demo

<iframe src="https://fp-superpowers-forms-elm.surge.sh/" width=1000 height=450 frameborder="0"></iframe>

---

## Applicatives

<span style="color:lightblue">Summary</span>

- Evaluate all fields|fr
- Evaluate field dependencies|fr
- Easily map user input to internal model|fr
- Accumulate error messages|fr
- Highly composable|fr

---

# Takeaways

- Use existing and battle tested abstractions|fr
  - <span style="color:lightblue">functors, monoids, applicatives</span>, etc.
- Reduce the amount of code|fr
  - You have to write
  - You have to test
- Benefit from a variety of additional functionalities that type classes provide|fr

---

# Thank you!

<span style="color:lightblue">Questions?</span>

---

# Resources

- [Making Algorithmic Music](https://youtu.be/9Fg54XAr044)
- [Euterpea](http://euterpea.com/)
- [GitHub repository](https://github.com/battermann/fp-superpowers-in-practice)