import LoginForm from '../../../components/Forms/LoginForm/LoginForm'
import './LoginPage.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


const LoginPage = () => {

    const [showForm, setShowForm] = useState('')

    const openFanSignupForm = () => setShowForm('fan')
    const openVenueSignupForm = () => setShowForm('venue')
    const openArtistSignupForm = () => setShowForm('artist')
    const openLabelSignupForm = () => setShowForm('label')

    return (
        <>
            <h1>loguinpeich</h1>


            <Button onClick={openFanSignupForm}>Fan</Button>
            <Button onClick={openVenueSignupForm}>Venue</Button>
            <Button onClick={openArtistSignupForm}>Artist</Button>
            <Button onClick={openLabelSignupForm}>Label</Button>

            {showForm === 'fan' && <LoginForm role={showForm} />}
            {showForm === 'venue' && <LoginForm role={showForm} />}
            {showForm === 'artist' && <LoginForm role={showForm} />}
            {showForm === 'label' && <LoginForm role={showForm} />}


        </>
    )
}

export default LoginPage