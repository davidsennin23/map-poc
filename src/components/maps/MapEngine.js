import { Observable } from 'rxjs';
import { MAP_LOADED_WITH_ERRORS, MAP_LOADED_SUCCESSFUL } from './MapConstants'
import { MAP_URL } from './MapConstants';
import RegisteredMaps from './RegisteredMaps';

let maps = undefined;
let observer = undefined;
let functionsToNotify = [];
let mapRegister = new RegisteredMaps();

function notifyFunctions() {
    observer = new Observable(observer => observer.next(maps));
    functionsToNotify = functionsToNotify.map(func => observer.subscribe(func));
    functionsToNotify.forEach(subscribed => subscribed.unsubscribe());
    functionsToNotify = [];
}

const callbackMap = () => {
    maps = window.google.maps;
    console.log(maps)
    notifyFunctions();
}

export function initMaps() {

    if (maps) {
        return;
    }
    const scriptjs = require('scriptjs');
    scriptjs(MAP_URL, callbackMap);

}

export function getMaps(callback) {
    if (maps) {
        callback(maps);
    } else {
        initMaps();
        functionsToNotify.push(callback);
    }
}

export function notifyMapLoaded(functionToNotify) {
    try {
        getMaps((maps) => {
            if (maps) {
                functionToNotify(MAP_LOADED_SUCCESSFUL);
            } else {
                functionToNotify(MAP_LOADED_WITH_ERRORS, 'Ocorreu um erro desconhecido ao carregar o mapa');
            }
        })
    } catch(e) {
        console.log(e);
        functionToNotify(MAP_LOADED_WITH_ERRORS, `Ocorreu um erro ao carregar o mapa. Erro: ${e.message}`);
    }
}

export function buildMap(Component, mapKey) {
    return new Promise((resolve, reject) => {
        try {
            getMaps((maps) => {
                let map = new maps.Map(Component);
                map.setZoom(14);
                map.setCenter({ lat:  -23.5678096, lng: -46.718843 });
                mapRegister.registerMap(mapKey, map);
                resolve(map);
            });
        } catch (e) {
            console.log(e);
            reject(`Não foi possível criar um componente de mapa. Motivo: ${e.message}`);
        }
    });
}

export function buildAutocomplete(Input) {
    return new Promise((resolve, reject) => {
        try {
            getMaps((maps) => {
                let autocomplete = new maps.places.Autocomplete(Input);
                console.log(autocomplete);
                resolve(autocomplete);
            })
        } catch (e) {
            console.log(e);
            reject(`Não foi possível criar um componente de autocomplete. Motivo: ${e.message}`);
        }
    });
}

export function boundAutocompleteToMap(autocomplete, mapKey) {
    mapRegister
        .getRegisteredMaps(mapKey)
        .then(map => autocomplete.bindTo('bounds', map));
}