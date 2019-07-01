import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    position; absolute;
    width: 100vw;
    height: 100vh;
`;

export default class extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <Content>
                {children}
            </Content>
        )
    }

}