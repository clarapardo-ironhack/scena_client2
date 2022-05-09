import { Routes, Route } from "react-router-dom"
import VenueDetailsPage from "../pages/VENUES/VenueDetailsPage/VenueDetailsPage"
import VenuesPage from "../pages/VENUES/VenuesPage/VenuesPage"

const VenuesRoutes = () => {

    return (
        <Routes>
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/venue/:venueId" element={<VenueDetailsPage />} />
        </Routes>
    )
}

export default VenuesRoutes