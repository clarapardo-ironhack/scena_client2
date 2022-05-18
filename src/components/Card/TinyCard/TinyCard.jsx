import './TinyCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'



const TinyCard = ({ _id, avatar, username, role, styles, alterRole }) => {

    const path = role



    return (

        <div className='tinyCard'>
            <Link to={`/${path.toLowerCase()}s/details/${_id}`} className='tinyCardLink'>
                <div  >
                    <div className='avatar'
                        style={{
                            backgroundImage: `url(${avatar})`
                        }}>

                        {username && <h2 className='userName'>{username}</h2>}

                    </div>


                </div>
            </Link>


        </div >
    )
}

export default TinyCard