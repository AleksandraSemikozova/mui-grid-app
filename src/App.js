import "./App.css"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import Avatar from "@mui/material/Avatar"
import React, { useEffect, useState } from "react"
import FsLightbox from "fslightbox-react"
import axios from "axios"

function App() {
  const [rows, setRows] = useState([])
  const [toggler, setToggler] = useState(false)

  const fetchUsers = async () => {
    await axios
      .get("https://dummyjson.com/users")
      .then((res) => setRows(res.data.users))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerClassName: "col-header",
      renderCell: (param) => {
        return (
          <div>
            <Avatar
              onClick={() => setToggler(!toggler)}
              src={param.row.image}
            />
          </div>
        )
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      valueGetter: (params) => {
        return `${params.row.firstName || ""} ${params.row.lastName || ""}`
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
      align: "center",
      headerAlign: "center",
      headerClassName: "col-header",
      cellClassName: "col-text-age",
    },
  ]

  return (
    <div className="Container">
      <div className="Grid">
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          columns={columns}
        />
        <FsLightbox toggler={toggler} sources={[]} />
      </div>
    </div>
  )
}

export default App
