import {setActivePinia, createPinia} from "pinia"
import { describe, it, expect, beforeAll, afterEach, beforeEach } from "vitest";
import { useTodoStore } from "../todo";

beforeAll(() => {
  setActivePinia(createPinia())
})

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>

  beforeEach(() => {
    store = useTodoStore()
  })

  afterEach(() => {
    store.$reset()
  })

  it("should creates a store", () => {
    expect(store).toBeDefined()
  })

  it("should initializes with empty items", () => {
    expect(store.items).toStrictEqual([])
  })
})