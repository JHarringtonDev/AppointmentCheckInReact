import PropTypes from 'prop-types'
import Header from './Header'
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const CheckIn = (props) => {
  const [records, setRecords] = useState([]);
  const params = useParams();
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

    const [form, setForm] = useState({
        fname: "",
        lname: "",
        appointmentDate: "",
        appointmentTime: "",
        phoneNumber: "",
        checkedIn: false,
      });
      const navigate = useNavigate();

       // These methods will update the state properties.
 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}

async function onSubmit(e) {
  e.preventDefault();
  const foundAppoint = records.filter(obj => {
    return obj.phoneNumber === form.phoneNumber
  }) 
  const id = foundAppoint.id
  

  // This will send a post request to update the data in the database.
  await fetch(`http://localhost:5000/update/${params.id}`, {
    method: "POST",
    checkedIn: true,
    // body: JSON.stringify(editedPerson),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  navigate("/");
}
      
    return(
       <div className="appointFCheckIn">
           <h1>Check-in for your appointment</h1>
       <form action="" method="post">
       <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
            {/* <div className="form-check form-check-inline"> */}
              <input
                // className="form-check-input"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={form.phoneNumber}
                maxlength= "10"
                minlength= "10"
                onChange={(e) => updateForm({ phoneNumber: e.target.value })}
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
    )
}

export default CheckIn