module Validated exposing (Validated, andMap, andThen, combine, fold, invalid, map, valid)


type Validated e a
    = Valid a
    | Invalid (List e)


valid : a -> Validated e a
valid a =
    Valid a


invalid : e -> Validated e a
invalid e =
    Invalid [ e ]


andMap : Validated e a -> Validated e (a -> b) -> Validated e b
andMap fa ff =
    case ( fa, ff ) of
        ( Valid a, Valid f ) ->
            Valid (f a)

        ( Valid _, Invalid errs ) ->
            Invalid errs

        ( Invalid errs, Valid _ ) ->
            Invalid errs

        ( Invalid errs1, Invalid errs2 ) ->
            Invalid (errs2 ++ errs1)


fold : (List e -> b) -> (a -> b) -> Validated e a -> b
fold fe fa validated =
    case validated of
        Valid a ->
            fa a

        Invalid e ->
            fe e


map : (a -> b) -> Validated e a -> Validated e b
map f fa =
    andMap fa (valid f)


combine : List (Validated e a) -> Validated e (List a)
combine =
    List.foldr (\validated acc -> valid (::) |> andMap validated |> andMap acc) (valid [])


andThen : (a -> Validated e b) -> Validated e a -> Validated e b
andThen f fa =
    case fa of
        Valid a ->
            f a

        Invalid errs ->
            Invalid errs
