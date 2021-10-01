import React, { Component } from "react";
import Navbar from "../../Navbar/index";
import "materialize-css";
import { Carousel, Row, Col, MediaBox } from "react-materialize";
import "./nearbyplaces.css";
class NearBy extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            fullWidth: true,
            indicators: true,
          }}
        >
          <div className="nearbyfilter">
            <h1 className="font-bold font-setting">NEARBY PLACES TO VISIT</h1>
          </div>
        </Carousel>
        <div className="container text-set container-2">
          <h3 className="font-bold text-center heading-c">AGUMBE</h3>
          <div className="text-al">
          This is the perfect place for a day trip (takes only 2 hours by road); a favourite for trekkers and nature photographers. The Agumbe Venugopalakrishna temple is thronged by devotees all round the year.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://thenitklife.weebly.com/uploads/3/0/5/6/30562859/pasted-image-0_orig.png"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69BLIrJQTzoHGsTZ9bSb0oTiUpbmYI63yMA&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjDYjjIv6DSmhaA2DkHeGdtx50i1pjlq3nQ&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjqYNwlM72qLEAPBg9dlNtNYMmIWUrcenFQ&usqp=CAU"
                />
              </MediaBox>
            </Col>
          </Row>

          <h3 className="font-bold text-center heading-c">BEKAL</h3>
          <div className="text-al">
          An excellent location for a road trip, this place is famous for the giant keyhole shaped Bekal Fort. The beach surrounding it offers a picturesque sight and the nearby water sports facilities offer loads of thrill.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://thenitklife.weebly.com/uploads/3/0/5/6/30562859/pasted-image-1_orig.png"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltTY_Z5LrJWYECVQG91A7HWelj303fepdXQ&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREauENrZeEwTfbDafNRwoGf3hbTK7UZ_iknA&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOw8SCNexcjpra67m2VrgrQ1ilzx7pCAPTTw&usqp=CAU"
                />
              </MediaBox>
            </Col>
          </Row>
          <h3 className="font-bold text-center heading-c">CHIKMAGALUR</h3>
          <div className="text-al">
          This is the place to visit if you want to see the sun setting over the hills. A trek to Mullayangiri peak and the beautiful coffee estates are what brings tourists to this town.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://thenitklife.weebly.com/uploads/3/0/5/6/30562859/pasted-image-2_orig.png"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGkwzcDizzKXM0HIvSsYNo494PxteNnylXw&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkXz5awlewKqwu35PJCmdHRLgiwPW9SdaTg&usqp=CAU"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxy0uEfw_iudytp2nwHVjFzsqg8uGufCEhQ&usqp=CAU"
                />
              </MediaBox>
            </Col>
          </Row>
          {/* <h3 className="font-bold text-center heading-c">MANIKARAN</h3>
          <div className="text-al">
          Manikaran, located at an altitude of 1737 m, is a famous pilgrimage centre for both Sikhs and Hindus, situated 45 km from Kullu, in the state of Himachal Pradesh. The name ‘Manikaran’ refers to a jewel. According to a legend, Goddess Parvati, wife of Shiva, the Hindu god of destruction, lost a precious jewel in a water body in this region. When Parvati asked Shiva to look for it, he asked His followers to hunt for it. When they were unable to find the jewel, Shiva flew into a rage an opened his third eye. This action caused disruption in the earth which led to the creation of innumerable precious stones and jewels.
          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/bgImages/MANIKARAN-SAHIB.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.nativeplanet.com/photos/original/2018/07/photo-91-161736-2.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/1237.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/1238.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
          </Row>
          <h3 className="font-bold text-center heading-c">KULLU</h3>
          <div className="text-al">
          Kullu, a popular tourist destination in Himachal Pradesh located on the banks of Beas river. With panoramic views and majestic hills covered with Deodar and Pine trees, it is a nature lover's paradise. Kullu generally coupled with its sister town Manali which is on much higher altitude and provides more scenic views.

Situated at an altitude of 1230 meters between Pir Pranjal, Lower Himalayan and Great Himalayan Ranges, Kullu is abundant with apple orchards, pristine river streams and a wonderful climate. Tourists coming to Kullu and Manali can indulge in a lot of adventure sports activities like river rafting, trekking, mountaineering etc. Bhuntar, the place that houses airport and bus junction and is used as the base town to reach Manikaran, Kasol, Malana, Bhunter and Rohtang Pass is located in Kullu. Kullu also has few important temples like the Raghunath Temple and Jagannathi Devi Temple. Apart from temples, the Pandoh Dam and Chandrakhani Pass are also must-visits in this region.


          </div>
          <Row>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/dest_pixa_9681.jpg"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/271.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/272.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
            <Col m={3} s={12} l={3}>
              <MediaBox
                id="MediaBox_7"
                options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                }}
              >
                <img
                  alt="NIT"
                  src="https://www.holidify.com/images/compressed/278.jpg?v=1.1"
                />
              </MediaBox>
            </Col>
          </Row> */}
        </div>

        <div className=" nearbyfooter"></div>
      </>
    );
  }
}

export default NearBy;
