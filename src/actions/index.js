export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const DONETODO = 'doneTodo'

export const addTodo = (task) => ({
    type:ADDTODO,
    todo:{name:task,complete:false}
})

export const removeTodo = (index) => ({
    type:REMOVETODO,
    index:index
})

export const doneTodo = (index) => ({
    type:DONETODO,
    index:index
})