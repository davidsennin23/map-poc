import React from 'react';
import AutocompletePanel from './AutocompletePanel';
import Header from '../../atoms/autocomplete/Header';
import Input from '../../atoms/autocomplete/Input';

export default class AutocompleteInput extends React.Component {

    handleRef = (node) => {
        if (!node) return;
        this.autocompleteInput = node;
        
    }
    
    render() {
        return (
            <>
                <AutocompletePanel
                    header={<Header>Quero ir para:</Header>}
                    input={<Input ref={this.handleRef}/>}
                />
            </>
        );
    }

}