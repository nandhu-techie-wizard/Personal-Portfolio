import React from "react";
import "./Education.css";
import vhms from '../../assets/vmhss.jpg'
import anna from '../../assets/anna-university-chennai-logo.png'
import bharat from '../../assets/bharat.png'
const Education = () => {
    return (
        <>
        <section id="Education">
        <h5>The Qulafication I Have</h5>
        <h2 className="ed">Education Details</h2>

        <div className="education">
            
          <div className="BE">
          <img src={anna} className="anna" />
          <h2> B.E-Computer Science & Enginnering</h2>
          <h5>2017-2021</h5>
          <h4>Anna Unversity,Chennai</h4>
          <p> Affiliated college By P.S.V College of Engineering & Technology, <br/>Krishnagiri, Tamil Nadu</p>
          <h5>CGPA 7.5</h5>
          </div>
          <div className="HSE">
          <img src={bharat} className="anna"/>
          <h2>HSC/PUC</h2>
          <h5>2016-2017</h5>
          <h4> Bharat Matriculation Higher secondary School, Krishnagiri, Tamil Nadu</h4>
          <h5>Percentage 53%</h5>
          </div>
          <div className="SSLC">
          <img src={vhms} className="anna"/>
            <h2>SSLC</h2>
            <h5>2014-2015</h5>
          <p>Vailankanni Matric Higher Secondary School,Bargur, Krishnagiri, Tamil Nadu</p>
          <h5>Percentage 83%</h5>
          </div>
        </div>
        </section>
        </>
    );
}
export default Education;