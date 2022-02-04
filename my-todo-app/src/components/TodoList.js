import React from 'react';
import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: #0c8599;
`;

function TodoList() {
    const state = useTodoState();
    console.log(state);
    return (
    <TodoListBlock>
        <TodoItem text ="create project" done={true} />
        <TodoItem text ="watch netflix" done={true} />
        <TodoItem text ="create diary" done={false} />
        <TodoItem text ="check notion" done={false} />
    </TodoListBlock>
    );
}

export default TodoList;
