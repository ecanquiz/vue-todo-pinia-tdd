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
  
  export type Todos = Todo[] //| undefined[];
  
  export interface TodoState {
    items: Todos //| undefined[]  
  }
