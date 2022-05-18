import './TinyEventCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyEventCard = ({ _id, title, image }) => {


    return (
        <div className='tinyCard'>

            <Link to={`/event/${_id}`} className='tinyCardLink'>
                <div  >
                    <div className='avatar'
                        style={{
                            backgroundImage: `url(${image})`
                        }}>

                        {title && <h2 className='userName'>{title}</h2>}

                    </div>


                </div>
            </Link>
        </div>
    )
}

export default TinyEventCard