import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import type { Todo, TodoAdd, TodoState, TodoUpdate } from "../types/todo"

const state = (): TodoState => ({
  items: []
})

const getters = {
  getById: (state: TodoState) => (id: string) => {
    return state.items.find((item: Todo) => item.id === id)
  },
  getOrderedTodos: (state: TodoState) =>
    [...state.items].sort(
      (a: Todo, b: Todo) => a.createdAt.getTime() - b.createdAt.getTime()     
    )
}

const actions = {
  add(this:TodoState, partialTodo: TodoAdd) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    this.items.push(todo)
  },
  remove(this:TodoState, id: string) {
    this.items = this.items.filter(item => item.id !== id)
  },
  update(this:TodoState, id: string, update: TodoUpdate) {
    const index = this.items.findIndex(item => item.id === id)
    this.items[index] = {
      ...this.items[index],
      ...update,
      updatedAt: new Date()
    }
  }
}

export const useTodoStore = defineStore('todoStore',{
  state,
  getters,
  actions
})
