import { Routes, Route } from "react-router-dom"
import ArtistDetailsPage from "../pages/ARTISTS/ArtistDetailsPage/ArtistDetailsPage"
import ArtistsPage from "../pages/ARTISTS/ArtistsPage/ArtistsPage"
import GenreSearchList from "../pages/ARTISTS/GenreSearchList/GenreSearchList"


const ArtistRoutes = () => {

    return (
        <Routes>
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/artists/details/:artistId" element={<ArtistDetailsPage />} />
            <Route path="/artists/style/:genre" element={<GenreSearchList />} />
        </Routes>
    )
}

export default ArtistRoutes