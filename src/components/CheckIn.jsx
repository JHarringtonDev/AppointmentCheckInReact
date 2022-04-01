import PropTypes from 'prop-types'
import Header from './Header'
import React, { useState } from "react";
import { useNavigate } from "react-router";

const CheckIn = (props) => {
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
              value="Create Appointment"
              className="btn btn-primary"
            />
          </div>
    </form>
</div>
    )
}

export default CheckIn