import { Routes, Route } from "react-router-dom"
import EventCreatePage from "../pages/EVENTS/EventCreatePage/EventCreatePage"
import EventDetailsPage from "../pages/EVENTS/EventDetailsPage/EventDetailsPage"
import EventsPage from "../pages/EVENTS/EventsPage/EventsPage"


const EventsRoutes = () => {

    return (
        <Routes>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/event/:eventId" element={<EventDetailsPage />} />
            <Route path="/event/create" element={<EventCreatePage />} />
        </Routes>
    )
}

export default EventsRoutes