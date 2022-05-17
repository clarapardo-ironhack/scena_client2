import SearchBar from '../../../components/SearchBar/SearchBar'
import './HomePage.css'
import filterMachine from '../../../utils/filterMachine'
import { useState, useEffect } from 'react'
import artistsService from '../../../services/artist.service'
import Map from '../../../components/Map/Map'
import { Container } from 'react-bootstrap'
import Section from '../../../components/Section/Section'


const HomePage = () => {
    return (<>
        <h1>jompeich</h1>

        <Section kind='event' />
        <Section kind='artist' />

    </>
    )
}

export default HomePage

