import SearchBar from '../../../components/SearchBar/SearchBar'
import './HomePage.css'
import filterMachine from '../../../utils/filterMachine'
import { useState, useEffect } from 'react'
import artistsService from '../../../services/artist.service'





const HomePage = () => {

    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('artist');
    // const [searchQuery, setSearchQuery] = useState(query || '');

    // useEffect((() => {
    //     artistsService
    //         .getAllArtists()
    //         .then(({ data }) => setAllArtists(data))
    //         .catch(err => res.json(err))
    // }), [])


    // const [allArtists, setAllArtists] = useState([])

    // return (
    //     <div>
    //         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    //         <ul>
    //             {filteredArtists.map((artist) => (
    //                 <li key={artist.id}>{artist.username}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )



}

export default HomePage