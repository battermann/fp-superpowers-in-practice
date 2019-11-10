module Forms exposing (main)

import Bootstrap.Alert as Alert
import Bootstrap.Button as Button
import Bootstrap.ButtonGroup as ButtonGroup
import Bootstrap.CDN as CDN
import Bootstrap.Form as Form
import Bootstrap.Form.Input as Input
import Bootstrap.Grid as Grid
import Bootstrap.Utilities.Spacing as Spacing
import Browser
import Html exposing (Attribute, Html, div, text)
import Html.Attributes
import Html.Events
import Maybe.Extra
import Regex exposing (Regex)
import Validated as Validated exposing (Validated, andMap, andThen, fold, invalid, map, valid)



---- MODEL ----


type alias Error =
    String


type alias Field a =
    { name : String
    , value : Maybe String
    , validated : Validated Error a
    }


type Username
    = Username String


type MediaType
    = Vid
    | Img


type ImageUrl
    = ImageUrl String


type VideoUrl
    = VideoUrl String


type VideoText
    = VideoText String


type alias Form =
    { username : Field Username
    , mediaType : Field MediaType
    , videoUrl : Field VideoUrl
    , videoText : Field VideoText
    , imageUrl : Field ImageUrl
    }


type Media
    = Video VideoUrl VideoText
    | Image ImageUrl


type alias MediaUpload =
    { username : Username
    , media : Media
    }


type alias Model =
    { form : Form
    , msg : Maybe (Validated Error String)
    }


init : ( Model, Cmd Msg )
init =
    ( { form =
            { username = { name = "Username", value = Nothing, validated = invalid "Username must not be empty" }
            , mediaType = { name = "Media Type", value = Just "Image", validated = valid Img }
            , imageUrl = { name = "Image Url", value = Nothing, validated = invalid "Image Url must not be empty" }
            , videoUrl = { name = "Video Url", value = Nothing, validated = invalid "Video Url must not be empty" }
            , videoText = { name = "Video Text", value = Nothing, validated = invalid "Video Text must not be empty" }
            }
      , msg = Nothing
      }
    , Cmd.none
    )



---- UPDATE ----


setValue : Validated Error a -> String -> Field a -> Field a
setValue validated value field =
    { field | value = Just value, validated = validated }


setUsername : String -> Form -> Form
setUsername name form =
    let
        atLeast3Chars =
            if String.length name >= 3 then
                valid name

            else
                invalid "The Username must be at least 3 characters long"

        allLetters =
            if String.toList name |> List.all Char.isAlphaNum then
                valid name

            else
                invalid "The Username must contain only letters"

        validatedUsername =
            Validated.valid (\_ _ -> Username name)
                |> Validated.andMap atLeast3Chars
                |> Validated.andMap allLetters
    in
    { form | username = setValue validatedUsername name form.username }


urlPattern : Regex
urlPattern =
    Maybe.withDefault Regex.never <|
        Regex.fromString "^(https?)://[^\\s/$.?#].[^\\s]*$"


setImageUrl : String -> Form -> Form
setImageUrl url form =
    let
        validatedUrl =
            if (Regex.find urlPattern url |> List.map .match) == [ url ] then
                valid (ImageUrl url)

            else
                invalid "Invalid image url"
    in
    { form | imageUrl = setValue validatedUrl url form.imageUrl }


setVideoUrl : String -> Form -> Form
setVideoUrl url form =
    let
        validatedUrl =
            if (Regex.find urlPattern url |> List.map .match) == [ url ] then
                valid (VideoUrl url)

            else
                invalid "Invalid image url"
    in
    { form | videoUrl = setValue validatedUrl url form.videoUrl }


setVideoText : String -> Form -> Form
setVideoText str form =
    let
        validatedVideoText =
            if String.isEmpty str then
                invalid "Video text must not be empty"

            else
                valid (VideoText str)
    in
    { form | videoText = setValue validatedVideoText str form.videoText }


setMediaType : String -> Form -> Form
setMediaType str form =
    let
        validatedMediaType =
            case str of
                "Image" ->
                    valid Img

                "Video" ->
                    valid Vid

                _ ->
                    invalid "Invalid media type"
    in
    { form | mediaType = setValue validatedMediaType str form.mediaType }


type Msg
    = Submit
    | UsernameInput String
    | SetMediaType String
    | ImageUrlInput String
    | VideoUrlInput String
    | VideoTextInput String


evaluateForm : Form -> Validated Error String
evaluateForm form =
    let
        media =
            form.mediaType.validated
                |> andThen
                    (\str ->
                        case str of
                            Img ->
                                form.imageUrl.validated |> Validated.map Image

                            Vid ->
                                valid Video
                                    |> andMap form.videoUrl.validated
                                    |> andMap form.videoText.validated
                    )
    in
    valid MediaUpload
        |> andMap form.username.validated
        |> andMap media
        |> Validated.map (always "Ok!")


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UsernameInput str ->
            let
                form =
                    model.form |> setUsername str
            in
            ( { model | form = form, msg = model.msg |> Maybe.map (always <| evaluateForm form) }, Cmd.none )

        ImageUrlInput str ->
            let
                form =
                    model.form |> setImageUrl str
            in
            ( { model | form = form, msg = model.msg |> Maybe.map (always <| evaluateForm form) }, Cmd.none )

        VideoUrlInput str ->
            let
                form =
                    model.form |> setVideoUrl str
            in
            ( { model | form = form, msg = model.msg |> Maybe.map (always <| evaluateForm form) }, Cmd.none )

        VideoTextInput str ->
            let
                form =
                    model.form |> setVideoText str
            in
            ( { model | form = form, msg = model.msg |> Maybe.map (always <| evaluateForm form) }, Cmd.none )

        SetMediaType str ->
            let
                form =
                    model.form |> setMediaType str
            in
            ( { model | form = form, msg = model.msg |> Maybe.map (always <| evaluateForm form) }, Cmd.none )

        Submit ->
            ( { model | msg = Just (evaluateForm model.form) }, Cmd.none )



---- VIEW ----


feedback : Field a -> Html msg
feedback field =
    if field.value |> Maybe.Extra.isNothing then
        Form.validFeedback [] [ text "Ok!" ]

    else
        field.validated |> Validated.fold (\errs -> Form.invalidFeedback [] [ errs |> List.map (text >> List.singleton >> Html.li []) |> Html.ul [] ]) (always <| Form.validFeedback [] [ text "Ok!" ])


setInvalidClass : Field a -> List (Attribute msg)
setInvalidClass field =
    if field.value |> Maybe.Extra.isNothing then
        []

    else
        field.validated |> Validated.fold (always [ Html.Attributes.class "is-invalid" ]) (always [ Html.Attributes.class "is-valid" ])


viewMediaType : Field MediaType -> Html Msg
viewMediaType field =
    [ "Image", "Video" ]
        |> List.map
            (\value ->
                ButtonGroup.radioButton
                    (field.value == Just value)
                    [ Button.light
                    , Button.onClick (SetMediaType value)
                    ]
                    [ Html.text value ]
            )
        |> ButtonGroup.radioButtonGroup [ ButtonGroup.attrs [ Spacing.mb3 ] ]


viewForm : Model -> Html Msg
viewForm model =
    Form.form [ Html.Events.onSubmit Submit ]
        [ Form.group []
            [ Form.label [ Html.Attributes.for "username" ] [ Html.text model.form.username.name ]
            , Input.text
                [ Input.id "username"
                , Input.onInput UsernameInput
                , Input.value (model.form.username.value |> Maybe.withDefault "")
                , Input.attrs (setInvalidClass model.form.username)
                ]
            , feedback model.form.username
            ]
        , viewMediaType model.form.mediaType
        , if model.form.mediaType.value == Just "Image" then
            Form.group []
                [ Form.label [ Html.Attributes.for "imageurl" ] [ Html.text model.form.imageUrl.name ]
                , Input.text
                    [ Input.id "imageurl"
                    , Input.onInput ImageUrlInput
                    , Input.value (model.form.imageUrl.value |> Maybe.withDefault "")
                    , Input.attrs (setInvalidClass model.form.imageUrl)
                    ]
                , feedback model.form.imageUrl
                ]

          else
            Html.div []
                [ Form.group []
                    [ Form.label [ Html.Attributes.for "videourl" ] [ Html.text model.form.videoUrl.name ]
                    , Input.text
                        [ Input.id "videourl"
                        , Input.onInput VideoUrlInput
                        , Input.value (model.form.videoUrl.value |> Maybe.withDefault "")
                        , Input.attrs (setInvalidClass model.form.videoUrl)
                        ]
                    , feedback model.form.videoUrl
                    ]
                , Form.group []
                    [ Form.label [ Html.Attributes.for "videotext" ] [ Html.text model.form.videoText.name ]
                    , Input.text
                        [ Input.id "videotext"
                        , Input.onInput VideoTextInput
                        , Input.value (model.form.videoText.value |> Maybe.withDefault "")
                        , Input.attrs (setInvalidClass model.form.videoText)
                        ]
                    , feedback model.form.videoText
                    ]
                ]
        , Button.button [ Button.primary ] [ Html.text "Send" ]
        ]


view : Model -> Html Msg
view model =
    Grid.container [ Spacing.mt2 ]
        [ CDN.stylesheet -- creates an inline style node with the Bootstrap CSS
        , Grid.row []
            [ Grid.col []
                [ viewForm model
                , model.msg
                    |> Maybe.Extra.unpack
                        (always (text ""))
                        (Validated.fold
                            (\errs -> Alert.simpleDanger [ Spacing.mt2 ] [ errs |> List.map (text >> List.singleton >> Html.li []) |> Html.ul [] ])
                            (\success -> Alert.simpleSuccess [ Spacing.mt2 ] [ text success ])
                        )
                ]
            ]
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
