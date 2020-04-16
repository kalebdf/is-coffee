const WORDS = [
  'affogato',
  'americano',
  'cappuccino',
  'chemex',
  'coffee',
  'cold brew',
  'cortado',
  'drip',
  'espresso',
  'flat white',
  'french press',
  'java',
  'kalita wave',
  'kava',
  'latte',
  'macchiato',
  'mocha',
  'ristretto',
  'v60'
]

export const isCoffee = (input: string): boolean => {
  return !!input && WORDS.indexOf(input.toLowerCase()) >= 0
}

// everyone and every place has coffee :P
export const hasCoffee = (_input: string): boolean => {
  return true
}
