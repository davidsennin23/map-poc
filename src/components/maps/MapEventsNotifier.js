const MAP_REGISTER = 'MAP_REGISTER';
const MAP_EVENTS = {
    [MAP_REGISTER]: 0
}

class EventListener {

    constructor() {
        this._listeners = {}
    }

    _addListener(mapKey, resolve, reject) {
        if (this._listeners[mapKey]) return this._listeners[mapKey].push({ resolve, reject });
        this._listeners[mapKey] = [];
        return this._addListener(mapKey, resolve, reject);
    }

    _resolveListeners(mapKey, value) {
        if (this._listeners[mapKey]) {
            this._listeners[mapKey].forEach(functions =>
                functions.resolve(value)
            )
            this._listeners[mapKey] = [];
        }
    }

}

const waitingList = {};

function listen(mapEvent, mapKey, value) {
    if (value) return new Promise((resolve) => resolve(value));

    if (!waitingList[mapEvent]) waitingList[mapEvent] = new EventListener();

    let promise = new Promise((resolve, reject) => {
        waitingList[mapEvent]._addListener(mapKey, resolve, reject);
    });
    return promise;
}

function event(mapEvent, mapKey, value) {
    if (waitingList[mapEvent]) waitingList[mapEvent]._resolveListeners(mapKey, value);
}

class MapEventsNotifier {

    listenMapRegister(mapKey, map) {
        return listen(MAP_EVENTS[MAP_REGISTER], mapKey, map);
    }

    mapRegister(mapKey, map) {
        event(MAP_EVENTS[MAP_REGISTER], mapKey, map);
    }

}

const mapEventsNotifier = new MapEventsNotifier();
export default mapEventsNotifier;