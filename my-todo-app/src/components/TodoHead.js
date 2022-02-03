import React from 'react'
import styled from 'styled-components';

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
    return (
        <TodoHeadBlock>
            <h1> 2022년 2월 3일</h1>
            <div className="day">목요일</div>
            <div className="task-left">할 일 2개 남았음!</div>
        </TodoHeadBlock>
    );
}

export default TodoHead
