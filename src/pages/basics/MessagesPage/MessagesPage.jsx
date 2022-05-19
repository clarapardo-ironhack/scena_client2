import { Container, Row, Col } from "react-bootstrap"
import ChatSection from "../../../components/ChatSection/ChatSection"
import PetitionSection from "../../../components/PetitionSection/PetitionSection"
import ScenaNav from './../../../components/Navbar/ScenaNav'
import './MessagesPage.css'

const MessagesPage = () => {


    return (<>  <ScenaNav />
        <Container className="messagesPage">
            <Row className="messPageRow">
                <Col><ChatSection /></Col>
                <Col> <PetitionSection /></Col>
            </Row>

        </Container>
    </>)
}

export default MessagesPage