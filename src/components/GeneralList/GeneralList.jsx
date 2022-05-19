import './GeneralList.css'
import { Row, Col } from "react-bootstrap"
import filterMachine from "../../utils/filterMachine"
import TinyCard from "../Card/TinyCard/TinyCard"
import Loader from "../Loader/Loader.jsx"


const GeneralList = ({ infoType, input }) => {

    const filteredData = filterMachine(infoType, input)

    return (
        filteredData.length
            ?
            infoType.length
                ?
                <Row className="CardContainerRow" >
                    {
                        filteredData?.map(elem => {
                            return (
                                <Col md={{ span: 4 }} key={elem._id} className="CardContainerCol">
                                    <TinyCard {...elem} />
                                </Col>
                            )
                        })
                    }
                </Row>
                :
                <Loader />
            :
            <Row>
                {
                    infoType?.map(elem => {
                        return (
                            <Col md={{ span: 4 }} key={elem._id}>
                                <TinyCard {...elem} />
                            </Col>
                        )
                    })
                }
            </Row>
    )
}

export default GeneralList


