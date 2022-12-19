import { useEffect, useState } from "react";
import Details from "./components/Details";
import roomStructure from "./home";
import "./styles.css";
import Book from "./components/book/Book";
import Cancel from "./components/cancel/Cancel";

export default function App() {
  const [hotel, setHotel] = useState([]);

  const [call, setCall] = useState({
    open: false,
    op: false,
    passname: "",
    passage: 0,
    passcontact: ""
  });

  useEffect(() => {
    setHotel(roomStructure.floors);
  }, [call]);

  // console.log(roomStructure);
  const [form, setForm] = useState({
    vis1: false,
    vis2: false,
    room: 0,
    floor: 0
  });

  const bookandcancelroom = (id, fl, book) => {
    if (book) {
      setForm({
        ...form,
        vis1: true,
        room: id,
        floor: fl
      });
    } else {
      setForm({
        ...form,
        vis2: true,
        room: id,
        floor: fl
      });
    }
  };

  const showPass = (name, age, phone) => {
    if (!call.op) {
      setCall({
        open: true,
        op: true,
        passname: name,
        passage: age,
        passcontact: phone
      });
    } else {
      setCall({ ...call, op: false });
    }
  };

  return (
    <div className="App">
      <h1>Book your Hotel Now</h1>
      {hotel.map((ho, key) => (
        <div className="hotel">
          <div className="floor">
            <p>Floor no:-{ho.floor}</p>
          </div>
          <div className="rooms">
            {ho.rooms.map((ro) => (
              <>
                <div
                  className="room"
                  style={{ backgroundColor: ro.isBooked ? "red" : "green" }}
                >
                  Room {ro?.id}
                  <div style={{ display: "flex" }}>
                    {!ro.isBooked && (
                      <button
                        onClick={() => bookandcancelroom(ro.id, ho.floor, true)}
                      >
                        Book
                      </button>
                    )}
                    {ro.isBooked && (
                      <>
                        <button
                          onClick={() =>
                            showPass(ro.pasname, ro.passage, ro.passphone)
                          }
                        >
                          Details
                        </button>
                        <button
                          onClick={() =>
                            bookandcancelroom(ro.id, ho.floor, false)
                          }
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
      {call.op && <Details call={call} />}
      {form.vis1 && (
        <Book
          setHotel={setHotel}
          roomStructure={roomStructure.floors}
          form={form}
          setCall={setCall}
          call={call}
          setForm={setForm}
        />
      )}
      {form.vis2 && (
        <Cancel
          roomStructure={roomStructure.floors}
          form={form}
          setCall={setCall}
          call={call}
          setForm={setForm}
        />
      )}
    </div>
  );
}
