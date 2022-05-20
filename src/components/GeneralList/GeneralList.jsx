import './GeneralList.css'
import { Row, Col } from "react-bootstrap"
import filterMachine from "../../utils/filterMachine"
import TinyCard from "../Card/TinyCard/TinyCard"
import Loader from "../Loader/Loader.jsx"
import { AuthContext } from '../../context/auth.context'
import { useContext, useState } from "react"



const GeneralList = ({ infoType, input }) => {

    const { user, isLoggedIn } = useContext(AuthContext)
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
                                (user._id !== elem._id)
                                &&
                                <>
                                    < Col md={{ span: 4 }} key={elem._id} className="CardContainerCol" >
                                        <TinyCard {...elem} />
                                    </Col>
                                </>

                            )
                        })
                    }
                </Row >
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


