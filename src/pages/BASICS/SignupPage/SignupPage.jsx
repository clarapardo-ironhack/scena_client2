import './SignupPage.css'
import LabelSignupForm from './../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from '../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { useState } from 'react'
import { Button } from 'react-bootstrap'



const SignupPage = () => {

    const [showForm, setShowForm] = useState('')

    const openFanSignupForm = () => setShowForm('fan')
    const openVenueSignupForm = () => setShowForm('venue')
    const openArtistSignupForm = () => setShowForm('artist')
    const openLabelSignupForm = () => setShowForm('label')

    return (
        <>
            <h1>loguinpeich</h1>


            <Button onClick={openFanSignupForm}>Fan</Button>
            <Button onClick={openArtistSignupForm}>Artist</Button>
            <Button onClick={openVenueSignupForm}>Venue</Button>
            <Button onClick={openLabelSignupForm}>Label</Button>

            {showForm === 'fan' && <FanSignupForm />}
            {showForm === 'artist' && <ArtistSignupForm />}
            {showForm === 'venue' && <VenueSignupForm />}
            {showForm === 'label' && <LabelSignupForm />}


        </>
    )
}
export default SignupPage