import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import InfoCarousel from "./InfoCarousel/index";
import "./home.css";
import "./back.css"
import { Table } from 'react-materialize';
import Springer from '../Images/springer1.png'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="w-screen h-screen">
                    <div className="w-screen h-screen absolute">
                        <div className="w-screen h-screen bg-cover absolute addhome"></div>
                    </div>
                    <div className="w-screen h-screen absolute">
                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto eventHeading font-bold">
                                ICCWC-2022
                            </h1>
                            <br />
                            <span className="eventName">
                                2nd International Conference on Computational Electronics for Wireless Communications (ICCWC-2022)
                            </span>
                            <br />
                            <div className="homelocation">
                                09-10 June, 2022 <br />
                                National Institute of Technology Karnataka, Surathkal
                            </div>
                        </div>
                    </div>
                    <div class="area" >
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >
                </div>
                <div>
                <marquee className="marq">
                <ul>
                    <li>Easy Chair Link for Registration &nbsp;  
                    <a href="https://easychair.org/conferences/?conf=iccwc2021"
                    className="black pulsate" id="textElement">https://easychair.org/conferences/?conf=iccwc2021</a></li>
                </ul>
                </marquee>
                    <h2 className="aboutHeading">
                        About ICCWC-2022
                    </h2>
                    <p className="aboutData text-justify">
                        The conference is concerned with the application of the latest computational technology to all aspects of Electronics Engineering and Wireless Communications. Computational technology encompasses both the latest hardware and software developments as well as algorithmic and theoretical developments. The conference is concerned with both theoretical, mathematical and scientific developments as well as applications of established technology to new domains. The purpose of holding this conference will aim at bringing together from around the world academics, researchers and practitioners to review recent achievements in the advancement of knowledge and understanding in these areas, share the latest developments, and address the challenges that the present and the future pose.
                        <br />
                        <br />
                    </p>
                </div>
                <div>
                    <InfoCarousel />
                </div>
                <div className="map">
                <iframe title="NIT MAP" className="mapframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.390640155043!2d74.7921203148224!3d13.010777590830234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211b768ac8f%3A0x6b1144ac2d5dadf3!2sNational%20Institute%20of%20Technology%20Karnataka%20Surathkal.!5e0!3m2!1sen!2sin!4v1633066656283!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                     <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=fdf226e91b73c9972541d5db6f957e965e925895'></script>
                </div>
                <div className="partners white-text center">
                <div className="phead">Partner</div>
                    <Table centered={true}
                        hoverable={true} className="container">
                        <tbody>
                            <tr>
                                <td className="centered">
                                    <img className="springer-partner" alt="Springer" src={Springer}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                                    </div>
            </div>
        );
    }
}

export default Home;


