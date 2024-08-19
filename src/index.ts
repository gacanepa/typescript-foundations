/*

import { Person, Company } from './types';

const person = new Person();
const company = new Company();

console.log({ person, company });

// https://developers.google.com/maps/documentation/javascript/load-maps-js-api#js-api-loader
*/
let map: google.maps.Map;

async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps") as { Map: typeof google.maps.Map };
    // Short namespaces can be used.
    map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -31.4201, lng: -64.1888 },
        zoom: 100,
    });
}

initMap();