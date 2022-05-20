import "./userList.css";
import { userDataRows } from "../../userDataRows";
import { userDataColumns } from "../../userDataColumns";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  let navigate = useNavigate();

  async function handleSubmit() {
    navigate("../newUser");
  }

  const columns = userDataColumns;

  const rows = userDataRows;

  return (
    <div className="userList">
      <div className="UserNameHeader">
        Users{" "}
        <button className="newUser-font" onClick={handleSubmit}>
          Add New User+
        </button>
      </div>
      <DataGrid
        className="dataGrid"
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
