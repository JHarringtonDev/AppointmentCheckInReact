import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <div className="qAppoint">
   <span className="qFName">{props.record.fname.substring(0, 3)}</span>
   <span className="qLName">{props.record.lname[0]}.</span>
   <span className="qTime">{props.record.appointmentTime}</span><br/>
   <span className="qType">Appointment</span>
 </div>
);
 
export default function Queue() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
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
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   {let checkedAppoint = records.map((record) => {

     if(record.checkedIn === true){return (
       <Record
         record={record}
         key={record._id} 
       />
     );}
   })
   return checkedAppoint.sort((a,b) => {
     return a.props.record.appointmentTime < b.props.record.appointmentTime ? -1 : 1
   })};}
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="appointList">
    {recordList()}
   </div>
 );
}
