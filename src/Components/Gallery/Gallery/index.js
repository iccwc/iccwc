import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Row, Col, MediaBox } from "react-materialize";
import "./gallery.css";
// import i1 from '../../Images/1.jpg';
// import i2 from '../../Images/2.jpg';
// import i3 from '../../Images/3.jpg';
// import i4 from '../../Images/4.jpg';
// import i5 from '../../Images/5.jpg';
// import i6 from '../../Images/6.jpg';
// import i7 from '../../Images/7.jpg';
// import i8 from '../../Images/8.jpg';
// import i9 from '../../Images/9.jpg';
// import i10 from '../../Images/10.jpg';
// import i11 from '../../Images/11.jpg';
// import i12 from '../../Images/12.jpg';
class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="galleryfilter">
                        <h1 className="font-bold font-setting">Gallery</h1>
                    </div>
                </Carousel>
                <div class="container center container-2">
                    <Row>
                        <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                            <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/360.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                        <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/Boats.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                        <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/MB.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                        <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/Kite-Festival.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                        <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/Inci.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        <Col
                            m={3}
                            s={12}
                            l={4}
                        >
                        <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                            >
                                <img
                                    alt="NIT"
                                    src={"https://www.nitk.ac.in/design-system/Gallery/Snake-Ladder.jpg"}
                                />
                            </MediaBox>
                        </Col>
                        
                    </Row>
                </div>


                <div className=" galleryfooter">
                </div>
            </div>
        );
    }
}

export default Gallery;