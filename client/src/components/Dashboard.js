import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from './Logout'
import LoginButton from './LoginButton'
 
const Record = (props) => (
 <tr>
   <td>{props.record.fname}</td>
   <td>{props.record.lname}</td>
   <td>{props.record.appointmentTime}</td>
   <td>{props.record.appointmentDate}</td>
   <td>
     {/* <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> | */}
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function Dashboard() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://appointment-manager-react.herokuapp.com/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`https://appointment-manager-react.herokuapp.com/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 const loggedIn = sessionStorage.getItem('token')
 // This following section will display the table with the records of individuals.
 if(loggedIn){
  return (
    <div>
      <h3>Appointment Queue</h3>
       <Logout />
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
 }else{
   return(
  <LoginButton/>)
 }
}