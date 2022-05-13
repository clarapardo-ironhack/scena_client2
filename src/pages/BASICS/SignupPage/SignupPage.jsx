import './SignupPage.css'
import LabelSignupForm from './../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from '../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { useState } from 'react'
import { Button } from 'react-bootstrap'



const SignupPage = () => {

    const [showForm, setShowForm] = useState('')


    return (
        <>
            <h1>loguinpeich</h1>


            <Button onClick={() => setShowForm('fan')}>Fan</Button>
            <Button onClick={() => setShowForm('venue')}>Artist</Button>
            <Button onClick={() => setShowForm('artist')}>Venue</Button>
            <Button onClick={() => setShowForm('label')}>Label</Button>

            {showForm === 'fan' && <FanSignupForm />}
            {showForm === 'artist' && <ArtistSignupForm />}
            {showForm === 'venue' && <VenueSignupForm />}
            {showForm === 'label' && <LabelSignupForm />}


        </>
    )
}
export default SignupPage