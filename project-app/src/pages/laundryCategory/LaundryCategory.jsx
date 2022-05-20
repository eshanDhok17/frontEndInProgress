import { color } from "@mui/system";
import React from "react";
import "./laundryCategory.css";

export default function LaundryCategory() {
  return (
    <div className="cardContainer">
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Soft Wash
          </label>
          <br />
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1047498432.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
          <br />
        </div>
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Hard Wash
          </label>
          <br />
          <img
            src="https://static.langimg.com/thumb/msid-89865464,imgsize-150688,width-700,height-525,resizemode-75/navbharat-times.jpg"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
          <br />
        </div>
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Normal Wash
          </label>
          <br />
          <img
            src="https://images.ctfassets.net/ajjw8wywicb3/2vDxiimmRamEA0L3blQmq5/51366f5ce1763ca5af6732432cb26aa1/Dirty-Clean-Color-Shirts-White-Basket_Tide-Life-Objects_SIDE-ANGLE-286_370x320_1.jpg?fm=webp"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
          <br />
        </div>
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Quick Wash
          </label>
          <br />
          <img
            src="https://image.shutterstock.com/image-photo/clock-washing-machine-advertising-image-260nw-1405425104.jpg"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
          <br />
        </div>
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Bio Wash
          </label>
          <br />
          <img
            src="https://greendiary.com/wp-content/uploads/2017/08/Organic-Cotton-fabric.jpg"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
          <br />
        </div>
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
      <div className="categoryCard">
        <div className="categoryItems">
          <label htmlFor="category" className="categoryHeading">
            Premium Wash
          </label>
          <br />
          <img
            src="https://i.insider.com/5babbfdc821ecf0924461b66?width=1300&format=jpeg&auto=webp"
            className="categoryImg"
          />
          <br />
          Price per kg: <input type="text" className="inputForCPKG" />
        </div>
        <br />
        <div className="buttonContainer">
          <button className="editButton">Edit</button>
          <button className="saveButton">Save</button>
        </div>
      </div>
    </div>
  );
}
