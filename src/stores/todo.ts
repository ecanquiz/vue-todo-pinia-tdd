import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { onUpdated } from "vue";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createAt: Date;
  updateAt: Date;
}

export interface TodoAdd{
  title: string;
}

export interface TodoUpdate{
    title?: string;
    done?: boolean;
}

export interface TodoState {
  items: Todo[] | undefined[]  
}

const state = (): TodoState => ({
  items: []
})

const getters = {
  getById: (state: TodoState) => (id: string) => {
    return state.items.find((item: Todo) => item.id === id)
  },
  getOrderedTodos: (state: TodoState) =>
    state.items.sort(
      (a: Todo, b: Todo) =>
        a.createAt.getMilliseconds() - b.createAt.getMilliseconds()
    ),
}

const actions = {
  add(this:TodoState, partialTodo: TodoAdd) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      done: false,
      createAt: new Date(),
      updateAt: new Date()
    }
    this.items.push(todo)
  },
  remove(this:any, id: string) {
    this.items = this.items.filter(item => item.id !== id)
  },
  update(this:any, id: string, update: TodoUpdate) {
    this.items = this.items.map(item => 
      item.id === id
        ? { ...item, ...update, updateAt: new Date() }
          : item
    )
  }
}

export const useTodoStore = defineStore('todoStore',{
  state,
  getters,
  actions
})