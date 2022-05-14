import SearchBar from '../../../components/SearchBar/SearchBar'
import './HomePage.css'
import filterMachine from '../../../utils/filterMachine'
import { useState, useEffect } from 'react'
import artistsService from '../../../services/artist.service'
import Map from '../../../components/Map/Map'


const HomePage = () => {
    return (
        <>
            <h1>jompeich</h1>

            <Map
                googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBIi25v4-JoTyK0y0BM2wVKxutNUwqDb8w'
                containerElement={<div style={{ height: '400px' }}></div>}
                mapElement={<div style={{ height: '400px' }}></div>}
                loadingElement={<p>CARGANDOOOO</p>}
            />
        </>
    )
}

export default HomePage