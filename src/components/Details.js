import "./details.css";

export default function Details({ call }) {
  return (
    <div className="details">
      <div className="detail">
        <label>Name:-</label>
        <span>{call?.passname}</span>
      </div>
      <div className="detail">
        <label>Age:-</label>
        <span>{call?.passage}</span>
      </div>
      <div className="detail">
        <label>Phone:-</label>
        <span>{call?.passcontact}</span>
      </div>
    </div>
  );
}
