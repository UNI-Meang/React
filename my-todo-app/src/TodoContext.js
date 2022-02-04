import React, {useReducer, createContext} from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 만들기',
        done: true,
    },
    {
        id: 2,
        text: '다이어리 만들기',
        done: true,
    },
    {
        id: 3,
        text: '컴포넌트 스타일링하기',
        done: false,
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false,
    }
];

// CREATE, TOGGLE, REMOVE 에 대해 상태 업뎃

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done} : done
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();


export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

