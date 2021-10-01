import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Row, Col } from "react-materialize";
import "./howtoreach.css";

class HowTo extends Component {
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
                    <div className="howtofilter">
                        <h1 className="font-bold font-setting">HOW TO REACH</h1>
                    </div>
                </Carousel>
                <div className="container text-set container-2">
                    <h3 className="font-bold text-center heading-c">AIR CONNECTION</h3>
                    <div className="text-al">NITK is located on the coastal belt of Karnataka, on the National Highway 66, at about 22 kms from Mangalore towards Udupi. It lies close to Mangalore International Airport</div>
                    <Row>
                        <Col
                            m={3}
                            s={8}
                            l={3}
                            offset="l4 m4 s1"
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44633.51534610541!2d74.89179336219914!3d12.93838521071995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d3616d95e9%3A0x46d57322d8165a30!2sMangaluru%20International%20Airport!5e0!3m2!1sen!2sin!4v1633069392263!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>

                        </Col>
                        
                    </Row>
                    <h3 className="font-bold text-center heading-c">RAIL CONNECTION</h3>
                    <div className="text-al">All Express buses to Udupi, Manipal, Kundapur, Bhatkal or Karkala drop you at the College NITK Express Bus Stop which is closer to the Administrative Block, Departments, Girls' Hostels Block, and the Guest House. A number of Private Taxis also available at Mangalore. NITK is 21 Kms. from Mangalore on the northern side on National Highway No.66.</div>
                    <Row>
                        <Col
                            m={4}
                            s={8}
                            l={4}
                            offset="l4 m4 s1"
                        >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.689088103203!2d74.84106231430735!3d12.863346920726066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bb399771a07%3A0xeb2856bb79d6e5ff!2sMangalore!5e0!3m2!1sen!2sin!4v1633069789631!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>

                        </Col>
                    
                    </Row>
                    <div className="text-al">Passengers alighting at Surathkal station can engage auto rickshaws that will take them to the college 2 kms from the Station.  Further, one can also reach Surathkal Bus Stand and board regular service buses that ply via the college.</div>
                    <Row>
                        <Col
                            m={4}
                            s={8}
                            l={4}
                            offset="l4 m4 s1"
                        >
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7119186959007!2d74.80319581410161!3d12.990268517984852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3518cbd843e87%3A0xc9a442f0fe27cd68!2sSurathkal%20Railway%20Station!5e0!3m2!1sen!2sin!4v1633070277620!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>

                        </Col>
                    
                    </Row>
                    {/* <h3 className="font-bold text-center heading-c">ROAD CONNECTION</h3>
                    <div className="text-al">The Grand Trunk Road also called National Highway 1 runs through Kurukshetra which is 150 km off Delhi and 90 km south of Chandigarh. Buses are also easily available.</div>
                    <Row>
                        <Col
                            m={4}
                            s={8}
                            l={4}
                            offset="l4 m4 s1"
                        >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14002.918133024059!2d77.229127!3d28.667816000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ad30da21784cfb7!2sIsbt%20Kashmiri%20Gate!5e0!3m2!1sen!2sin!4v1605651953799!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </Col>
                    </Row> */}
                </div>
                <div className=" howtofooter">
                </div>
            </div>
        );
    }
}

export default HowTo;