import {useState} from "react";
import mail from "../../../assets/images/mail.png";
import phone from "../../../assets/images/phone.png";
 
const Contacts = () => {
    return (
        <div>
            <table cellpadding="10px">
                <tr>
                <td><img src={phone} width="20px" alt="phone"></img></td>
                <td><h4 className="text-left">Телефон: </h4></td>
                <td><h4 className="text-left">какой-то там</h4></td>
                </tr>
                <tr>
                <td><img src={mail} width="20px" alt="mail"></img></td>
                <td><h4 className="text-left">E-mail: </h4></td>
                <td><h4 className="text-left">какой-то там</h4></td>
                </tr>
            </table>
        </div>
    )
}
 
export default Contacts;