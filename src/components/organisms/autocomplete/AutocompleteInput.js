import React from 'react';
import AutocompletePanel from './AutocompletePanel';
import Header from '../../atoms/autocomplete/Header';
import Input from '../../atoms/autocomplete/Input';
import { buildAutocomplete, boundAutocompleteToMap } from '../../maps/MapEngine';
import { MAIN_MAP_KEY } from '../../maps/MapConstants';

export default class AutocompleteInput extends React.Component {

    state = {
        autocomplete: undefined
    }

    handleRef = (node) => {
        if (!node) return;
        this.autocompleteInput = node;
        buildAutocomplete(this.autocompleteInput)
            .then(autocomplete => {
                this.setState({ autocomplete });
                boundAutocompleteToMap(autocomplete, MAIN_MAP_KEY);
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <>
                <AutocompletePanel
                    header={<Header>Quero ir para:</Header>}
                    input={<Input ref={this.handleRef} />}
                />
            </>
        );
    }

}