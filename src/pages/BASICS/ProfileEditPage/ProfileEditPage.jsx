import './ProfileEditPage.css'
import { AuthContext } from './../../../context/auth.context'
import { useContext } from 'react'
import LabelSignupForm from '../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from './../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { Container } from 'react-bootstrap'




const ProfileEditPage = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <h1>profaileditpeich</h1>
            <Container>
                <h1>Edita tu perfil</h1>
                <hr />

                {user.role === 'Fan' && <FanSignupForm edit={user._id} />}
                {user.role === 'Label' && <LabelSignupForm edit={user._id} />}
                {user.role === 'Venue' && <VenueSignupForm edit={user._id} />}
                {user.role === 'Artist' && <ArtistSignupForm edit={user._id} />}

            </Container>
        </>
    )
}

export default ProfileEditPage