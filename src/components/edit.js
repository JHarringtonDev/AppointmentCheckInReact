import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
  const [records, setRecords] = useState([]);
 const [form, setForm] = useState({
   phoneNumber: ''
 });
 const params = useParams();
 const navigate = useNavigate();
 let gRecords
 let gId = params.id.toString()
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
     gId = params.id.toString();
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   

    // This method fetches the records from the database.

    fetchData();

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
  },[params.id, navigate], [records.length]);

 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }



//  useEffect(() => {
  
  

//   return;
// });


// let foundAppoint = records.find(params.id.toString())

const result = records.find( ({ _id }) => _id === gId );

// console.log(result)
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     phoneNumber: form.phoneNumber
    //  name: form.name,
    //  position: form.position,
    //  level: form.level,
   };
  if(form.phoneNumber == result.phoneNumber){
    // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
    method: "POST",
    body: JSON.stringify(editedPerson),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  navigate("/Queue");
  }else{
    alert(`you submitted${e.target.value}`)
  }
   
 }
//  console.log(gRecords)

 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Check-in for your appointment.</h3>
     <form onSubmit={onSubmit}>
       {/* <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
       </div>
       </div>
       <br />
  */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
            {/* <div className="form-check form-check-inline"> */}
              <input
                // className="form-check-input"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={form.value}
                maxLength= "10"
                minLength= "10"
                onChange={(e) => updateForm({phoneNumber: e.target.value})}
                required
              />
            {/* </div> */}
            </div>
       <div className="form-group">
         <input
           type="submit"
           value="Check-in"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}