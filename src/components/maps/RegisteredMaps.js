

const maps = {};

export default class RegisteredMaps {

    registerMap(mapKey, map) {
        if (maps[mapKey]) return;
        maps[mapKey] = map;
    }

}