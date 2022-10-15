import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Crew from "../components/crew/crew";
import Locations from "../components/location/location";
import Time from "../components/time/time";
import Map from "../components/map/map";

function Main (){
    
    return(
        <>
            <Container fluid = "lg" className="header">
                <Row>
                    <Col sm={9} className="item-wrap location-wrap">
                        <Locations/>
                    </Col>
                    <Col sm={3} className="item-wrap">
                        <Time/>
                    </Col>
                </Row>
            </Container>

            <Container fluid= 'lg' className="main">
                <Row className="main-wrap">
                    <Col sm={9} className="map-wrap item-wrap">
                        <Map/>
                    </Col>
                    <Col sm={3} className="item-wrap crew-container">
                        <Crew/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main