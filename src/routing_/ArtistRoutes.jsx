import { Routes, Route } from "react-router-dom"
import ArtistDetailsPage from "../pages/artists/ArtistDetailsPage/ArtistDetailsPage"
import ArtistsPage from "../pages/artists/ArtistsPage/ArtistsPage"
import GenreSearchList from "../pages/artists/GenreSearchList/GenreSearchList"

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