import { useState } from "react";

export default function Cancel({
  roomStructure,
  form,
  setCall,
  call,
  setForm
}) {
  const [details, setDetails] = useState({
    name: "",
    contact: ""
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      roomStructure[form.floor - 1].rooms[form.room - 1].isBooked === true &&
      roomStructure[form.floor - 1].rooms[form.room - 1].pasname ===
        details.name &&
      roomStructure[form.floor - 1].rooms[form.room - 1].passphone ===
        details.contact
    ) {
      roomStructure[form.floor - 1].rooms[form.room - 1].isBooked = false;
      roomStructure[form.floor - 1].rooms[form.room - 1].pasname = "";
      roomStructure[form.floor - 1].rooms[form.room - 1].passage = 0;
      roomStructure[form.floor - 1].rooms[form.room - 1].passphone = "";
      console.log("successfull");
      setCall({ ...call, open: !call.open });
    } else {
      setError(true);
    }

    setForm({ ...form, vis2: false });
  };

  return (
    <form className="form">
      <h3> Cancel Booking</h3>
      <div className="formContent">
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
      </div>
      <div className="formContent">
        <label>Contact Details</label>
        <input type="text" name="contact" onChange={(e) => handleChange(e)} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {error && <p style={{ color: "red" }}>Are you mad</p>}
    </form>
  );
}
