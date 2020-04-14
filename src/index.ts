const WORDS = [
  'americano',
  'cappuccino',
  'coffee',
  'cold brew',
  'cortado',
  'drip',
  'espresso',
  'iced coffee',
  'latte'
]

export const isCoffee = (input: string): boolean => {
  return !!input && WORDS.indexOf(input.toLowerCase()) >= 0
}
