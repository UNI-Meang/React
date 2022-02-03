import React from 'react'
// rfce
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 512px;
    height: 768px;

    position: relative;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
`;

function TodoTemplate({ children }) {
    return (

        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    )
}

export default TodoTemplate
