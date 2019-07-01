import React from 'react';
import styled from 'styled-components';

const MapLayout = styled.div`
    width: 100vw;
    height: 100vh
`

export const MapPanel = ({ children }) => <MapLayout>{ children }</MapLayout>