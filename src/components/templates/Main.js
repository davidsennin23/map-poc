import React from 'react';
import Content from './Content';
import Sidebar from '../organisms/content/Sidebar'

export default class MainTemplate extends React.Component {

    render() {
        const {content, sidebar} = this.props;
        return (
            <>
                <Sidebar>{sidebar}</Sidebar>
                <Content>{content}</Content>
            </>
        );
    }

}