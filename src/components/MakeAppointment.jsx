import React, { useState } from "react";
import { useNavigate } from "react-router";

const MakeAppointment = (props) => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        appointmentDate: "",
        appointmentTime: "",
        checkedIn: false,
      });
      const navigate = useNavigate();
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/record/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({ fname: "", lname: "", appointmentTime: "", appointmentDate: "", checkedIn: false});
        navigate("/");
      }
      

    return(
        <div>
        <h3>Schedule Your Appointment</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={form.fname}
              onChange={(e) => updateForm({ fname: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              value={form.lname}
              onChange={(e) => updateForm({ lname: e.target.value })}
            />
          </div>
          <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time:</label>
            {/* <div className="form-check form-check-inline"> */}
              <input
                // className="form-check-input"
                type="time"
                name="appointmentTime"
                id="appointmentTime"
                min="7:00"
                max="15:30"
                value={form.appointmentTime}
                onChange={(e) => updateForm({ appointmentTime: e.target.value })}
              />
            {/* </div> */}
            </div>
            <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
            {/* <div className="form-check form-check-inline"> */}
              <input
                // className="form-check-input"
                type="date"
                name="appointmentDate"
                id="appointmentDate"
                value={form.appointmentDate}
                onChange={(e) => updateForm({ appointmentDate: e.target.value })}
              />
            {/* </div> */}
            </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Appointment"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
}

export default MakeAppointment