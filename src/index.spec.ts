import { isCoffee } from './index'

describe("isCoffee", () => {
  it("should return true for coffee", () => {
    expect(isCoffee('coffee')).toBe(true)
  })

  it("should return true for truck", () => {
    expect(isCoffee('truck')).toBe(false)
  })
})