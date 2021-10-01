import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./committee.css";
import 'materialize-css';
import { Carousel, Row, Col } from "react-materialize";
import Card from "./cards.js";
//import avatar from "../Images/akumar.png"
class Committee extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="caddfilter">
                        <h1 className="font-bold font-setting">ORGANIZING COMMITTEE</h1>
                    </div>
                </Carousel>
                <div class="container center">
                    <h3 className="font-bold text-center heading-c">PATRON</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l4 m4"
                        >
                            <Card className="cardInner" src={"https://www.nitk.ac.in/design-system/demo/Director.jpg"} name="Prof. Karanam Umamaheshwar Rao,"  designation="Director" institute="NITK, Surathkal" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CO-PATRONS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l4 m4"
                        >
                            <Card src={"https://infotech.nitk.ac.in/sites/default/files/ananthanarayana-v-s--image_0.jpg"} name="Prof. Ananthanarayana V. S" designation="Deputy Director" institute="NITK, Surathkal" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CHAIRPERSONS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l2 m2"
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/sripathi-d_0.png"} name="Prof. U. Shripathi Acharya, " designation="Dean R & C" department="ECE Department" institute="NITK, Surathkal"/>
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"http://mnit.ac.in/PortalProfile/images/faculty/mnitjas060.png"} name="Prof. K K Sharma" designation="Professor" department="ECE Department" institute="MNIT, Jaipur" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            offset="l2 m2"
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/ashv_0.png"} name="Prof. Ashvini Chaturivedi" designation="Professor" department="HoD, ECE Department" institute="NITK, Surathkal" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yLUW66MAAAAJ&citpid=1"} name="Prof. P.K. Singhal" designation="Professor" department="ECE Department" institute="MITS, Gwalior" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">ORGANIZING SECRETARY</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            
                        >
                            <Card className="cardInner" src={"https://ece.nitk.ac.in/sites/default/files/Sandeep_phtoto2.jpg"} name="Dr. Sandeep kumar" designation="Assistant Professor" department="ECE Department" institute="NITK, Surathkal" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            
                        >
                            <Card className="cardInner" src={"https://ece.nitk.ac.in/sites/default/files/Prabu2.jpg"} name="Dr. Prabu k" designation="Assistant Professor" department="ECE Department" institute="NITK, Surathkal" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            
                        >
                            <Card className="cardInner" src={"http://www.nitkkr.ac.in/admin/member_images/1602555373arvind.jpg"} name="Dr. Arvind kumar" designation="Assistant Professor" department="ECE Department" institute="NIT, Kurukshetra" />
                        </Col>
                    </Row>
                    <h3 className="font-bold text-center heading-c">CONVENERS</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/rekha-s-image.jpg"} name="Dr. Rekha S" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/shyam22_2.jpg"} name="Dr. Shyam Lal" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal"/>
                        </Col>
                        
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/shushilmedium.png"} name="Dr. Sushil Kumar Pandey" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal"/>
                            </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://jaipur.manipal.edu/content/dam/manipal/muj/images/2021/profilephoto2021/FOE/SEEC/ECE/Sanyog%20Rawat.jpg"} name="Dr. Sanyog Rawat" designation="Assistant Professor" department="ECE Department" institute="Manipal University, jaipur"/>
                            </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://manipal.edu/content/dam/manipal/mu/mit/images/profile/ECE/ASG_8087.JPG.transform/manipal-edu-transform-width-height-528px/image.jpg"} name="Dr. Pramod Kumar" designation="Assistant Professor" department="ECE Department" institute="MAHE MAnipal"/>
                            </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://manipal.edu/content/dam/manipal/mu/mit/images/profile/ECE/ASG_8087.JPG.transform/manipal-edu-transform-width-height-528px/image.jpg"} name="Mrs. Parul Pathak" designation="Assistant Professor" department="ECE Department" institute="JECRC University, Jaipur"/>
                            </Col>
                            </Row>
                    <h3 className="font-bold text-center heading-c">TREASURER</h3>
                    <Row>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                            
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/aparna-p-image.jpg"} name="Dr. Aparna P" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal" />
                        </Col>
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/Untitled1.png"} name="Dr. Nikhil S" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal"/>
                        </Col>
                        
                        <Col
                            m={4}
                            s={12}
                            l={4}
                        >
                            <Card src={"https://ece.nitk.ac.in/sites/default/files/b-nagavel-image.jpg"} name="Mr. B. Nagavel" designation="Assistant Professor" department="ECE Department" institute="NITK Surathkal"/>
                            </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Committee;

