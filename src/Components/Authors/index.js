import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
import './authors.css';
class Authors extends Component {
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
                    <div className="authaddfilter">
                        <h1 className="font-bold font-setting">TRACKS</h1>
                    </div>
                </Carousel>
                
                <div>
                    <p className="authinfo">
                        Authors are invited to submit their latest original and unpublished research work/results in the following areas, but not limited to:
                    </p>

                    <div className="my-20">
                        <div className="authinfoouter">
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track1: RF & Microwave
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">  Body Area Networks</li>
                                    <li className="authitem">  Unmanned Aerial Vehicle Networks </li>
                                    <li className="authitem">  RF Antenna Modeling and Design</li>
                                    <li className="authitem">  Microwave Compatibility</li>
                                    <li className="authitem">  Electromagnetic Interference</li>
                                    <li className="authitem">  Cognitive Communications</li>
                                    <li className="authitem">  Electromagnetic remote sensing</li>
                                    <li className="authitem">  THz integrated circuits and Design</li>
                                    <li className="authitem">  LTE and 5G RF Cell Design</li>
                                    <li className="authitem">  Software Defined Radio Networks</li>
                                    <li className="authitem">  RF and Photonics Devices</li>
                                    <li className="authitem">  Radio Frequency Identification Detection (RFID)</li>
                                    <li className="authitem">  Millimeter and Sub-millimeter wave circuits</li>
                                    <li className="authitem">  RF and Microwave imaging</li>
                                    <li className="authitem">  Machine and Deep Learning for RF and Microwave Applications</li>
                                </ul>
                            </div>
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 2: Signal Processing
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">  Signal Processing Algorithms and Architectures</li>
                                    <li className="authitem">  Biomedical Signal and Image Processing</li>
                                    <li className="authitem">  Analog and Mixed Signal Processing</li>
                                    <li className="authitem">  Hardware Implementation for Signal Processing</li>
                                    <li className="authitem">  Higher Order Spectral Analysis</li>
                                    <li className="authitem">  Image and Multidimensional Signal Processing</li>
                                    <li className="authitem">  Internet Signal Processing</li>
                                    <li className="authitem">  Quantum Signal Processing</li>
                                    <li className="authitem">  Signal Processing Over Graphs</li>
                                    <li className="authitem">  Sensor Array and Multichannel Signal Processing</li>
                                    <li className="authitem">  Industrial Signal Processing</li>
                                    <li className="authitem">  Machine and Deep Learning for Speech and Audio Signal Processing</li>
                                    <li className="authitem">  Machine and Deep Learning for Natural Image Processing</li>
                                    <li className="authitem">  Machine and Deep Learning for Remote Sensing Applications</li>
                                    <li className="authitem">  Machine and Deep Learning for Healthcare Applications</li>
                                    <li className="authitem">  Signal Processing for Communication & Networking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="authinfoouter">
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 3: Micro and Nano electronics
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">  VLSI Circuits and Systems</li>
                                    <li className="authitem">  RF Circuit Design / Analysis / Testing</li>
                                    <li className="authitem">  Emerging Trends in VLSI</li>
                                    <li className="authitem">  Reconfigurable Systems</li>
                                    <li className="authitem">  System on Chip</li>
                                    <li className="authitem">  Heat Distribution Analysis</li>
                                    <li className="authitem">  Design of MEMS / NEMS Devices</li>
                                    <li className="authitem">  Optical MEMS Devices</li>
                                    <li className="authitem">  Nanotechnology</li>
                                    <li className="authitem">  Photovoltaic</li>
                                    <li className="authitem">  Analog and Mixed Signal Design</li>
                                    <li className="authitem">  Field Programmable Systems</li>
                                    <li className="authitem">  System Level Design</li>
                                    <li className="authitem">  Physical Design and Testing</li>
                                    <li className="authitem">  Power Awareness Analysis</li>
                                    <li className="authitem">  Electrical Packaging</li>
                                    <li className="authitem">  Thin film and devices</li>
                                    <li className="authitem">  High Speed / Low power Circuits</li>
                                    <li className="authitem">  Nano Devices: Modeling and Simulation</li>
                                    <li className="authitem">  Light Emitters and Detectors</li>
                                    <li className="authitem">  Plasmonic Materials and Devices</li>
                                    <li className="authitem">  Nanomaterials</li>
                                    <li className="authitem">  Spintronics</li>
                                </ul>
                            </div>
                            <div className="col l4 m6 s12 authinfobox">
                                <h1 className="authinfoHeading font-bold">
                                    Track 4: Wireless Networks
                                </h1>
                                <ul className="authList">
                                    <li className="authitem">  Unmanned Aerial Vehicle Networks</li>
                                    <li className="authitem">  5G Networks and IoT</li>
                                    <li className="authitem">  Future Internet Architechture</li>
                                    <li className="authitem">  Disaster Recovery of Networks</li>
                                    <li className="authitem">  Mobile Networks</li>
                                    <li className="authitem">  Ad hoc and Mesh Networks</li>
                                    <li className="authitem">  Named Data Networking</li>
                                    <li className="authitem">  Network Performance Analysis</li>
                                    <li className="authitem">  QoS for Emergency Applications</li>
                                    <li className="authitem">  Reconfigurable intelligent surfaces</li>
                                    <li className="authitem">  Real-time Systems and Networks</li>
                                    <li className="authitem">  Context and location-aware wireless services and applications</li>
                                    <li className="authitem">  User-centric networks and adaptive services</li>
                                    <li className="authitem">  Dynamic sensor networks for urban applications</li>
                                    <li className="authitem">  Wireless emergency and security systems</li>
                                    <li className="authitem">  Small Cells and femtocell Networks</li>
                                    <li className="authitem">  Wireless mesh Networks</li>
                                    <li className="authitem">  Vehicular Wireless Networks</li>
                                    <li className="authitem">  Cognitive Radio Networks</li>
                                    <li className="authitem">  Underwater Wireless Networks</li>
                                    <li className="authitem">  mm Wave Wireless Networks</li>
                                    <li className="authitem">  Software-defined Wireless Networks</li>
                                    <li className="authitem">  Reconfigurable Wireless Networks</li>
                                    <li className="authitem">  Satellite-based mobile access and backhaul</li>
                                    <li className="authitem">  Testbed and prototype implementation of Wireless services</li>
                                    <li className="authitem">  Machine and Deep Learning for Wireless Communication and Computing</li>
                                    <li className="authitem">  Green Communication Systems and Network</li>
                                    <li className="authitem">  Optical Networks and Systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="authfooter">
                </div>
            </div >
        );
    }
}

export default Authors;