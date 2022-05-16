import './Map.css'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'


const Map = withScriptjs(withGoogleMap(({ lat, lng }) => {
   
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat, lng}}
        >
            <Marker position={{ lat, lng }} />
        </GoogleMap>


    )
}))

export default Map