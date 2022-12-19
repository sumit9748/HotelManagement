import { useState } from "react";
import "./book.css";

export default function Book({ roomStructure, form, setCall, call, setForm }) {
  const [details, setDetails] = useState({
    name: "",
    age: 0,
    contact: ""
  });

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(roomStructure);
    if (details.name !== "" && details.contact !== "") {
      roomStructure[form.floor - 1].rooms[form.room - 1].isBooked = true;
      roomStructure[form.floor - 1].rooms[form.room - 1].pasname = details.name;
      roomStructure[form.floor - 1].rooms[form.room - 1].passage = details.age;
      roomStructure[form.floor - 1].rooms[form.room - 1].passphone =
        details.contact;
      setCall({ ...call, open: false });
      setForm({ ...form, vis1: false });
    }
  };

  return (
    <form className="form">
      <h3> Booking Details</h3>
      <div className="formContent">
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
      </div>
      <div className="formContent">
        <label>Age</label>
        <input type="number" name="age" onChange={(e) => handleChange(e)} />
      </div>
      <div className="formContent">
        <label>Contact Details</label>
        <input type="text" name="contact" onChange={(e) => handleChange(e)} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
