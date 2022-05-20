import { React, useState } from "react";
import "./laundryOrderForm.css";
import { useNavigate } from "react-router-dom";
export default function LaundryOrderForm() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    username: "",
    washCategory: "",
    item: "",
    quantity: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("../laundryList");
    console.log(details);
  };
  return (
    <div className="formTitle">
      <div className="LaundryformInner">
        <div className="formGroup">
          <label htmlFor="username">Customer Username:</label>
          <input
            type="text"
            name="username"
            id="text"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="washCategory">Wash Category:</label>
          <input
            type="text"
            name="washCategory"
            id="text"
            onChange={(e) =>
              setDetails({ ...details, washCategory: e.target.value })
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            name="item"
            id="text"
            onChange={(e) => setDetails({ ...details, item: e.target.value })}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            name="quantity"
            id="text"
            onChange={(e) =>
              setDetails({ ...details, quantity: e.target.value })
            }
          />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}
