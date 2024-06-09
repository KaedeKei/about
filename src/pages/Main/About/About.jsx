import {useState} from "react";
import avatar from "../../../assets/images/pic1.jpg";
import about from "../../../assets/images/about.jpg";
 
const About = () => {
    
 
    return (
        <div className="container">
            <img src={avatar} width="150px" alt="avatar" ></img>
            <h2 className="text-left">Зовут меня Ольга</h2>
            <p>и в последнее время всё, чего хочется - это поспать</p>
            <p>Коротко о навыках:</p>
            <img src={about} width="350px" alt="about"></img>
        </div>
    )
}
 
export default About;