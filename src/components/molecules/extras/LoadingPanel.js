import styled from 'styled-components';
import React from 'react'

const Panel = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingPanel = ({children}) => <Panel>{children}</Panel>
export default LoadingPanel;