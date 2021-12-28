import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';


export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext( MapContext );
    const { userLocation } = useContext( PlacesContext)


    const onClick = () => {
        if ( !isMapReady ) throw new Error('Mapa no está listo');
        if ( !userLocation ) throw new Error('No hay ubicación de usuario');

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }


    return (
        <button 
            className="btn btn-primary"
            onClick={ onClick }
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
        >
            Mi Ubicación
        </button>
    )
}
