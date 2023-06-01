import "./App.css";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AvatarWithPreview } from "./componetns/avatar/avatar";
import { Container } from "@mui/material";

function App() {
  const [rows, setRows] = useState([]);

  const fetchUsers = async () => {
    await axios
      .get("https://dummyjson.com/users")
      .then((res) => setRows(res.data.users));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      headerClassName: "col-header",
      renderCell: (param) => {
        return (
          <div>
            <AvatarWithPreview
              thumb={param.row.image}
              sources={[param.row.image]}
            />
          </div>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      valueGetter: (params) => {
        return `${params.row.firstName || ""} ${params.row.lastName || ""}`;
      },
      flex: 1,
      headerClassName: "col-header",
      cellClassName: "col-text-name",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "col-header",
      cellClassName: "col-text-email",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerClassName: "col-header",
      cellClassName: "col-text-age",
    },
  ];

  return (
    <Container maxWidth="lg">
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          transform: "none",
        }}
      />
    </Container>
  );
}

export default App;
