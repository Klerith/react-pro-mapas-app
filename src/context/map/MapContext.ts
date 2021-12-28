import { createContext } from 'react';
import { Map } from 'mapbox-gl';

interface MapContextProps {
    isMapReady: boolean;
    map?: Map,

    // Methods
    setMap: (map: Map) => void;
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>;
}



export const MapContext = createContext({} as MapContextProps );