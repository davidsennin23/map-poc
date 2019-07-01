import styled from 'styled-components';
import React from 'react';

const SidebarDiv = styled.div`
    position: absolute;
    z-index: 1;
    width: 300px;
    background-color: rgb(210, 210, 210, 0.1);
    height: 80vh;
    top: 10vh;
    left: 5vw;
`;

const Sidebar = ({children}) => <SidebarDiv>{children}</SidebarDiv>
export default Sidebar;