import React from "react";
import user from "../images/user.png";

export default function ContactCard  (props) {
    const {name,email,mob} = props.contact;
    
    return (
        <>
      
        <div className="item">
                
                 <table className="item"> 
                 <tbody>  
                <tr><td><img className="ui avatar image" src={user} alt="user" style={{height:"60px", width:'60px'}}/></td>
                <td><div className="content">
                
                <div className="header"><strong>Name: </strong>{name}</div>
                <div><strong>Email: </strong>{email}</div>
                <div><strong>Mobile :</strong>{mob}</div>
                
                </div></td>
                <td><i className="trash alternate outline icon"></i></td></tr>
                </tbody>
                </table> 
                <hr/>
    </div>
       
        </>
    );
} ;