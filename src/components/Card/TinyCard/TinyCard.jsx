import './TinyCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyCard = ({ _id, avatar, username, role, styles, alterRole }) => {

    const path = role

    return (

        <>
            <Link to={`/${path.toLowerCase()}s/details/${_id}`}>
                <Card >
                    <Card.Img className="avatar" variant="top" src={avatar} />
                    <Card.Body>
                        {username && <Card.Title>{username}</Card.Title>}

                    </Card.Body>
                    {styles &&

                        styles.map(style => {
                            return <p>{style}</p>

                        })
                    }
                </Card>
            </Link>


        </>
    )
}

export default TinyCard