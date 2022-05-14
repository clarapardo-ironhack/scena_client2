import { Routes, Route } from "react-router-dom"
import VenueDetailsPage from "../pages/venues/VenueDetailsPage/VenueDetailsPage"
import VenuesPage from "../pages/venues/VenuesPage/VenuesPage"

const VenuesRoutes = () => {

    return (
        <Routes>
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/venues/details/:venueId" element={<VenueDetailsPage />} />
        </Routes>
    )
}

export default VenuesRoutes