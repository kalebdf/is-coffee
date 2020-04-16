import { hasCoffee, isCoffee } from './index'

describe("isCoffee", () => {
  it("should return true for coffee", () => {
    expect(isCoffee('coffee')).toBe(true)
    expect(isCoffee('americano')).toBe(true)
  })

  it("should return false for truck", () => {
    expect(isCoffee('truck')).toBe(false)
  })
})

describe("hasCoffee", () => {
  it("should return true for a coffeeshop having coffee", () => {
    expect(hasCoffee('coffeeshop')).toBe(true)
  })

  it("should return true for any place having coffee", () => {
    expect(hasCoffee('tire repair shop')).toBe(true)
    expect(hasCoffee('hospital')).toBe(true)
    expect(hasCoffee('nail salon')).toBe(true)
    expect(hasCoffee('airport')).toBe(true)
  })
})
