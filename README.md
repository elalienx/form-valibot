# Form validation with Valibot

Spike to test [Valibot](https://valibot.dev) as a Schema parse to validate formularies. Open the console to see the
submission results.

## How to run?

1. Clone the repository
1. Run `npm install`
1. Run `npm run dev`

## Notes

Notice how on in the validation schema for the _age field_ we start from `string` because `<input type="number"/>` actually captures `strings` from the keyboard.
Therefore we must transform it to `number`, before running any numeric validations.
