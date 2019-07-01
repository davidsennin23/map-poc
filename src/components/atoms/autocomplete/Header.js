import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 1.2em;
    margin: 0;
    padding: 0;
`;

export default ({children}) => <Header>{children}</Header>