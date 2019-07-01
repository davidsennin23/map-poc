import React from 'react';
import MainTemplate from '../templates/Main';
import Map from '../organisms/maps/Map';
import AutocompleteInput from '../organisms/autocomplete/AutocompleteInput';
import LoadingPanel from '../molecules/extras/LoadingPanel';
import LoadingIcon from '../atoms/extras/LoadingIcon';
import rotating from '../../behaviors/animations/rotating';
import loading from '../../content/loading.png'

import { notifyMapLoaded } from '../maps/MapEngine';
import { MAP_LOADED_SUCCESSFUL } from '../maps/MapConstants';

const revolutionsPerSecond = 0.5;
const RotatingIcon = rotating(revolutionsPerSecond)(<LoadingIcon src={loading}/>);


const BLANK = 0;
const LOADING = 1;
const LOADED = 2;

export default class MainPage extends React.Component {

    state = {
        loadingState: BLANK
    }

    componentDidMount() {
        this.setState({ loadingState: LOADING });
        notifyMapLoaded(this.notifyWhenLoaded);
    }

    notifyWhenLoaded = (notifyStatus, error) => {
        if (notifyStatus === MAP_LOADED_SUCCESSFUL){
            this.setState({ loadingState: LOADED });
        } else {
            // TO-DO mostrar mensagem de erro amigável para o usuário. Enquanto não estiver pronto, chutar o pau da barraca
            throw new Error(error);
        }
    }
        
    render() {
        if (this.state.loadingState !== LOADED) {
            return (
                <MainTemplate
                    content={<LoadingPanel><RotatingIcon/></LoadingPanel>}
                />
            )
        }
        return (
            <MainTemplate
                sidebar={<AutocompleteInput/>}
                content={<Map/>}
            />
        );
    }

}