const MAP_REGISTER = 'MAP_REGISTER';
const MAP_EVENTS = {
    [MAP_REGISTER]: 0
}

const waitingList = [];
const notifiers = [];

function listen(mapEvent, mapKey) {

}

function event(mapEvent, mapKey, value) {

}

class MapEventsNotifier {

    listenMapRegister(mapKey) {
        listen(MAP_EVENTS[MAP_REGISTER], mapKey);
    }

    mapRegister(mapKey, map) {
        event(MAP_EVENTS[MAP_REGISTER], mapKey, map);
    }

}

const mapEventsNotifier = new MapEventsNotifier();
export default mapEventsNotifier;