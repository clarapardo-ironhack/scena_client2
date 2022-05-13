import SearchBar from '../../../components/SearchBar/SearchBar'
import './HomePage.css'
import filterMachine from '../../../utils/filterMachine'
import { useState, useEffect } from 'react'
import artistsService from '../../../services/artist.service'





const HomePage = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('artist');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const posts = [
        { id: '1', name: 'This first post is about React' },
        { id: '2', name: 'This next post is about Preact' },
        { id: '3', name: 'We have yet another React post!' },
        { id: '4', name: 'This is the fourth and final post' },
    ];

    useEffect((() => {
        artistsService
            .getAllArtists()
            .then(({ data }) => setAllArtists(data))
            .catch(err => res.json(err))
    }), [])


    const [allArtists, setAllArtists] = useState([])

    const filteredArtists = filterMachine(allArtists, query);

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ul>
                {filteredArtists.map((artist) => (
                    <li key={artist.id}>{artist.username}</li>
                ))}
            </ul>
        </div>
    )



}

export default HomePage