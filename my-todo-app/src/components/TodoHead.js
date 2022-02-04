import React from 'react'
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

//내부에 className으로 바로 styling
const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #bdbdbd;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #212529;
    }

    .day {
        margin-top: 4px;
        font-size: 21px;
        color: #868e96;
    }

    .task-left {
        font-size: 18px;
        color: #9c36b5;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dataString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    });

    return (
        <TodoHeadBlock>
            <h1> {dataString}</h1>
            <div className="day">{dayName}</div>
            <div className="task-left">할 일 {undoneTasks.length}개 남았음!</div>
        </TodoHeadBlock>
    );
}

export default TodoHead
