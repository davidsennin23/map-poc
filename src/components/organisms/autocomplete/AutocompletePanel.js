import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    height: 50px;
    width: 100%;
    position: relative;
    background-color: #bbb;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
`;

// const PanelHead = styled.div`
//     position: relative;
//     margin: auto;
//     padding: 5px;
//     background-color: #fff;
// `;

const PanelInput = styled.div`
    background-color: #999;
    flex-grow: 8;
`;
const PanelButton = styled.div`
    background-coler: #fff;
    flex-grow: 2;
`;

const AutocompletePanel = ({header, input}) => 
    <Panel>
        {/* <PanelHead>{header}</PanelHead> */}
        <PanelInput>{input}</PanelInput>
        <PanelButton><button></button></PanelButton>
    </Panel>

export default AutocompletePanel;