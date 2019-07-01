import mapEventsNotifier from './MapEventsNotifier';

const maps = {};

export default class RegisteredMaps {

    registerMap(mapKey, map) {
        if (maps[mapKey]) return;
        maps[mapKey] = map;
        mapEventsNotifier.mapRegister(mapKey, map);
    }

    getRegisteredMaps(mapKey) {
        // if (maps[mapKey]) return maps[mapKey];
        return mapEventsNotifier.listenMapRegister(mapKey, maps[mapKey]);
    }

}