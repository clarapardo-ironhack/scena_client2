import './SignupPage.css'
import LabelSignupForm from '../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from '../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { useState } from 'react'
import { Button } from 'react-bootstrap'



const SignupPage = () => {

    const [showButtons, setShowButtons] = useState(true)
    const [showForm, setShowForm] = useState('')

    const openSignupForm = role => {
        setShowForm(role)
        setShowButtons(false)
    }

    return (
        <>
            <h1>sainginpeich</h1>

            {showButtons
                ?
                <>
                    <Button onClick={() => openSignupForm('fan')}>Fan</Button>
                    <Button onClick={() => openSignupForm('venue')}>Venue</Button>
                    <Button onClick={() => openSignupForm('artist')}>Artist</Button>
                    <Button onClick={() => openSignupForm('label')}>Label</Button>
                </>
                :
                <>
                    {showForm === 'fan' && <FanSignupForm />}
                    {showForm === 'artist' && <ArtistSignupForm />}
                    {showForm === 'venue' && <VenueSignupForm />}
                    {showForm === 'label' && <LabelSignupForm />}
                </>
            }

        </>
    )
}

export default SignupPage