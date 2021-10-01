import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel} from "react-materialize";
import "./advisory.css";
class Advisory extends Component {
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
                        <h1 className="font-bold font-setting">ADVISORY COMMITTEE</h1>
                    </div>
                </Carousel>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">INTERNATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">  Dr. Jaume Anguera, Universiatat Ramon Llull, Barcelona, Spain</li>
                            <li className="advitem">  Prof. Guy A. E. Vandenbosch, KU Leuven, Belgium</li>
                            <li className="advitem">  Prof. Chintha Tellambura, University of Alberta, Canada</li>
                            <li className="advitem">  Prof. Mihaela Albu, Politehnica University of Bucharest, Romania</li>
                            <li className="advitem">  Prof. Aime Lay-Ekuakille, University of Salento, Lecce, Italy</li>
                            <li className="advitem">  Prof. Yeon Ho Chung, Pukyong, National University, Busan, South Korea</li>
                            <li className="advitem">  Prof. Hanjung Song, Inje University, South Korea</li>
                            <li className="advitem">  Prof. Sunday, Ekpo, Manchester Meteropolitan University, UK</li>
                        </ul>
                    </div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">NATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">  Prof. Sriram Kumar, NIT Trichy</li>
                            <li className="advitem">  Prof. John D'Souza, NITK Surathkal</li>
                            <li className="advitem">  Prof. Neelawar Sekhar Vittal Shet, NITK Surathkal</li>
                            <li className="advitem">  Prof. T. Laxminidhi, NITK Surathkal</li>
                            <li className="advitem">  Prof. Muralidhar Kulkarni, NITK Surathkal</li>
                            <li className="advitem">  Prof. M. S Bhatt, NITK Surathkal</li>
                            <li className="advitem">  Prof. Suman David S, NITK Surathkal</li>
                            <li className="advitem">  Prof. Brajesh Kaushik, IIT Roorkee</li>
                            <li className="advitem">  Prof. Binod Kumar Kanuajia, JNU, New Delhi</li>
                            <li className="advitem">  Dr. Neelakandan R, IIT Goa</li>
                            <li className="advitem">  Dr. A A Bazil Raj, DIAT, Pune</li>
                            <li className="advitem">  Prof. M. Ganesh Madhan, MIT, Anna University, Chennai</li>
                            <li className="advitem">  Prof. S. J. Thiruvengadam, TCE, Madurai</li>
                            <li className="advitem">  Prof. Sivanantha Raja Avaninathan, ACCET, Tamil Nadu</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Advisory;