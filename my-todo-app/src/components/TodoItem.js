import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete} from 'react-icons/md';

const CheckCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border-radius: 16px;
    border: 2px solid #ced4da;
    cursor: pointer;
    ${props => 
        props.done && 
        css `
        border: 2px solid #38d9a9;
        color: #38d9a9;
        `}
    `;


    const Text = styled.div`
        flex: 1;
        font-size: 21px;
        color: #212529;
        font-weight: bold;
        ${props => 
            props.done && 
            css `
            color: #ced4da;
            font-weight: bold;
            `}
    `;
        
        
const Remove = styled.div`
        display: flex;
        opacity: 0;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #495057;
        &:hover {
            color: #c92a2a;
            cursor: pointer;
                }
    `;


const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

//todoitem 에서 props id, done, text 가져옴
// done && <MdDone /> => done 값이 있다면 MdDone components을 rendering 
// done 값을 checkCircle의 props로 설정 

function TodoItem({ id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done ={done}>{done && <MdDone />}</CheckCircle>
            <Text done ={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem
