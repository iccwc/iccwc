import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel,MediaBox,Row,Col} from "react-materialize";
import "./aboutkkr.css";
import i14 from '../../Images/ecenitk.jpg';

class AboutKkr extends Component {
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
                    <div className="aboutkkrfilter">
                        <h1 className="font-bold font-setting">ABOUT NITK SURATHKAL</h1>
                    </div>
                </Carousel>
                <div className="container text-set container-2">
                <Row>
                <Col
                    m={6}
                    s={10}
                    l={6}
                    offset="l3 m3 s1"
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
                    src={"https://www.deccanherald.com/sites/dh/files/articleimages/2021/09/10/national-institute-of-technology-karnataka-dh-file-1-1028949-1631251765.jpg"}
                />
            </MediaBox>

                </Col>
            </Row>
            <div className="text-al">
            The National Institute of Technology Karnataka (NITK), Surathkal has established itself as one of the top technological institutions in India and richly deserved recognition as an Institute of National Importance under the NIT Act 2007. Accreditation of all our academic programs by NBA; many with highest rating, recognition as a QIP Center, initiation and operationalization of MoUs with several national and international institutions, more competitive student admissions and improved performance of students in examinations are achievements that bear testimony to our commitment to maintain quality in all processes and systems. NITK is making sustained efforts towards consolidation of the state-of-the-art infrastructural facilities for teaching and research, attracting highly qualified and motivated staff into the existing pool and ensuring availability of all other amenities necessary for imparting globally relevant technological education. A research culture is taking shape in the institute through enhanced R & D activities, creation of centers for interdisciplinary research, establishment of industry-sponsored Charis, stronger interface with industry, alumni and a special focus on new post-graduate and doctoral programs. Team NITK is fully geared to take on the challenges of the 21st century to establish itself as a World-Class Technological Institution. Prof. Karanam Umamaheshwar Rao, Director, NITK Surathkal.
                </div>
                </div>
                <div className="container text-set container-2">
                <Row>
                <Col
                    m={12}
                    s={10}
                    l={12}
                    offset="l5 m3 s1"
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
                    src={i14}
                />
            </MediaBox>

                </Col>
            </Row>
                <br/>
                <div className="text-al">
                The Electronics and Communication (E&C) Engineering Department was established in the year 1979. The Department offers an Under Graduate program in Electronics and Communication Engineering, a PG program in VLSI design and a PG program in Communication Engineering. In addition to these, it also offers MTech (Research) and PhD programs in the three streams of VLSI design, Digital Signal Processing and Communication Engineering which provide a platform for bright graduates and postgraduates to conduct research in state-of-the-art technologies. The Department is also a recognized center under the Quality Improvement Program (QIP) of the Government of India.
                
                </div>
                </div>

                <div className=" kkrfooter">
                </div>
            </>
        );
    }
}

export default AboutKkr;