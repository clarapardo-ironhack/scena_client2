import LabelsRoutes from "./LabelRoutes"
import ArtistRoutes from "./ArtistRoutes"
import BasicRoutes from "./BasicRoutes"
import EventsRoutes from "./EventsRoutes"
import VenuesRoutes from "./VenuesRoutes"

const AppRoutes = () => {

    return (
        <>
            <BasicRoutes />
            <ArtistRoutes />
            <EventsRoutes />
            <LabelsRoutes />
            <VenuesRoutes />
        </>
    )
}

export default AppRoutes