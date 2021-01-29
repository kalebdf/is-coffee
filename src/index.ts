const WORDS = [
  'aeropress',
  'affogato',
  'americano',
  'batch brew',
  'black eye',
  'breve',
  'bulletproof coffee',
  'caffe',
  'cafe au lait',
  'caffe mocha',
  'cappuccino',
  'chemex',
  'clever',
  'coffee',
  'cold brew',
  'con panna',
  'corretto',
  'cortado',
  'decaf',
  'doppio',
  'double espresso',
  'drip',
  'espresso',
  'flat white',
  'frappe',
  'frappuccino',
  'freddo',
  'french press',
  'gibraltar',
  'iced coffee',
  'instant coffee',
  'irish coffee',
  'java',
  'kalita wave',
  'kava',
  'latte',
  'lungo',
  'macchiato',
  'mocha',
  'moka pot',
  'nitro cold brew',
  'pour over',
  'red eye',
  'ristretto',
  'siphon',
  'turkish',
  'v60',
  'vietnamese iced coffee'
]

export const isCoffee = (input: string): boolean => {
  return !!input && WORDS.indexOf(input.toLowerCase()) >= 0
}

// everyone and every place has coffee :P
export const hasCoffee = (_input: string): boolean => {
  return true
}
