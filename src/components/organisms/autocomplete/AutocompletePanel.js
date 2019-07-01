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
    border-radius: 5px;
    margin-bottom: 10px;
`;


const PanelInput = styled.div`
    background-color: #999;
    width: 100%;
`;

const AutocompletePanel = ({input}) => 
    <Panel>
        <PanelInput>{input}</PanelInput>
    </Panel>

export default AutocompletePanel;