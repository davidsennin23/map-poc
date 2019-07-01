import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    width: 100%;
    background-color: #bbb;
    min-height: 20px;
    border-radius: 5px;
`;

export default ({children}) => <Panel>{children}</Panel> 