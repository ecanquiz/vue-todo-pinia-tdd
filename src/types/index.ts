export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}
  
export interface TodoAdd{
  title: string;
}

export interface TodoState {    
  items: Todo[];
}

export interface TodoUpdate{
  title?: string;
  done?: boolean;
}
