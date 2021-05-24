import {ADDTODO,REMOVETODO,DONETODO} from '../actions'

const initialState = {list:[
                            { name: '概要作成' ,complete:false},
                            { name: '画面設計作成' ,complete:false},
                            { name: '詳細設計作成' ,complete:false},
                            { name: 'コーディング' ,complete:false},
                            { name: 'テスト', complete: false }
                            ]
                        }

export default(state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return {list:[...state.list,action.todo]}
        case REMOVETODO:
            const removeTodos = [...state.list]
            removeTodos.splice(action.index, 1)
            return {list:removeTodos}
        case DONETODO:
            const doneTodos = [...state.list]
            doneTodos[action.index].complete = !doneTodos[action.index].complete
            return {list:doneTodos}
        default:
            return state
    }
}