import axios from 'axios'

class EventsService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`
        })

    }

    getAllEvents = () => {
        return this.app.get('/')
    }

    getOneEvent = eventId => {
        return this.app.get(`/${eventId}`)
    }

    createEvent = event => {
        return this.app.post(`/create`, event)
    }

    deleteEvent = eventId => {
        return this.app.post(`/${eventId}/delete`)
    }

    editEvent = eventInfo => {
        const eventId = eventInfo._id
        return this.app.post(`/${eventId}/edit`, eventInfo)
    }

}

const eventsService = new EventsService()

export default eventsService