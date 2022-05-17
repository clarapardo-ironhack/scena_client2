import { Row, Col } from "react-bootstrap"
import filterMachine from "../../utils/filterMachine"
import TinyCard from "../Card/TinyCard/TinyCard"
import Loader from "../Loader/Loader.jsx"


const GeneralList = ({ infoType, input }) => {

    const filteredData = filterMachine(infoType, input)

    return (
        filteredData?.length
            ?
            <Row>
                {filteredData?.map(element => {
                    return (
                        <Col md={{ span: 4 }} key={element._id}>
                            <TinyCard {...element} />
                        </Col>
                    )
                })
                }
            </Row>
            :
            <h2>No hay resultados</h2>


    )
}

export default GeneralList