import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel } from "react-materialize";
import "./advisory.css";
class Program extends Component {
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
                    <div className="advisoryaddfilter">
                        <h1 className="font-bold font-setting">TECHNICAL PROGRAM COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">TECHNICAL PROGRAM COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">  Dr. Krishnamoorthy K, NITK Surathkal</li>
                            <li className="advitem">  Dr. A V Narasimhadhan, NITK Surathkal</li>
                            <li className="advitem">  Dr. Deepu Vijayasenan, NITK Surathkal</li>
                            <li className="advitem">  Dr. Raghavendra B S, NITK Surathkal</li>
                            <li className="advitem">  Dr. Ramesh Kini M, NITK Surathkal</li>
                            <li className="advitem">  Dr. Ratnamala Rao, NITK Surathkal</li>
                            <li className="advitem">  Dr. Pathipati Srihari, NITK Surathkal</li>
                            <li className="advitem">  Dr. Prashantha Kumar H, NITK Surathkal</li>
                            <li className="advitem">  Dr. Mandeep Singh, NITK Surathkal</li>
                            <li className="advitem">  Dr. Kalpana G Bhat, NITK Surathkal</li>
                            <li className="advitem">  Dr. Mohammad Khaleqi, Shahid Beheshti University, Iran</li>
                            <li className="advitem">  Dr. AlaaDdin Al-Shidaifat, Inje University, South Korea</li>
                            <li className="advitem">  Dr. Sachin Gupta, SRM University, Chennai</li>
                            <li className="advitem">  Dr. Mukesh Khandelwal, JNU, New Delhi</li>
                            <li className="advitem">  Dr. Ganga Prasad Pandey, PDPU University, Gujrat</li>
                            <li className="advitem">  Dr. Rajiv Kumar Arya, NIT Patna, Bihar</li>
                            <li className="advitem">  Dr. Ravi Roushan, NITK, Surathkal</li>
                            <li className="advitem">  Dr. Varun P. Gopi, NIT Tirchy</li>
                            <li className="advitem">  Dr. Jagadeesh V K, NIT Patna</li>
                            <li className="advitem">  Dr. Akkala Subba Rao, MNIT, Bhopal</li>
                            <li className="advitem">  Dr. Sudhakar M S, VIT Vellore</li>
                            <li className="advitem">  Dr. Surender M, NIT Puducherry</li>
                            <li className="advitem">  Dr. Sudeep P.V, NIT Calicut</li>
                            <li className="advitem">  Dr. Goutham Simha G.D, MAHE, Manipal</li>
                            <li className="advitem">  Dr. Sairam, NITTE, Mangalore</li>
                            <li className="advitem">  Dr. Sangeetha R G, VIT Chennai</li>
                            <li className="advitem">  Dr. Jayashree, Anna University, Chennai</li>
                            <li className="advitem">  Dr. T. Jayasankar Anna University, Trichy </li>
                            <li className="advitem">  Dr. Gopi Ram, NIT Warangal</li>
                            <li className="advitem">  Dr  Anand S, VIT Vellore</li>
                            <li className="advitem">  Dr. Rajesh V, VIT Vellore</li>
                            <li className="advitem">  Dr. Jayavignesh, VIT Chennai</li>
                            <li className="advitem">  Dr. Balaji, LICET, Chennai</li>
                            <li className="advitem">  Dr. Dhanalakshmi, SRMIT, Chennai</li>
                            <li className="advitem">  Dr. Rohit Sharma, SRM University, UP</li>
                            <li className="advitem">  Dr. laxmanan, Galgotia college, UP</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Program;