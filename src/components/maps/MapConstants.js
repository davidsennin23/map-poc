const MAP_KEY = process.env.REACT_APP_MAP_KEY;
export const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`;
export const MAIN_MAP_KEY = 'MAIN_MAP';

export const MAP_LOADED_WITH_ERRORS = 0;
export const MAP_LOADED_SUCCESSFUL = 1;