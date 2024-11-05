
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, TextField, Toolbar, Tooltip,InputAdornment } from '@mui/material';
import "./datagrid.scss"
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import NataliCrag from "../../../src/assets/images/Natali.svg"
import KateMorrison from "../../../src/assets/images/Kate.svg"
import Drew from "../../../src/assets/images/Drew.svg";
import Orlando from "../../../src/assets/images/Orlando.svg"
import Andi from "../../../src/assets/images/Andi.svg";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';
const userImages = {
    'Natali Craig': NataliCrag,
    'Kate Morrison': KateMorrison,
    'Drew Caro': Drew,
    'Orlando Diggs': Orlando,
    'Andi Lane': Andi,
  };

  
const tableData = [
  { id: 1, orderId: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: 2, orderId: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: 3, orderId: '#CM9803', user: 'Drew Caro', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: 4, orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: 5, orderId: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: 6, orderId: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: 7, orderId: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: 8, orderId: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: 9, orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Wasburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: 10, orderId: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'In Progress':
      return { color: 'blue', dotColor: 'blue' };
    case 'Complete':
      return { color: 'green', dotColor: 'green' };
    case 'Pending':
      return { color: 'orange', dotColor: 'orange' };
    case 'Approved':
      return { color: 'purple', dotColor: 'purple' };
    default:
      return { color: 'black', dotColor: 'black' };
  }
};

const columns = [
  { field: 'orderId', headerName: 'Order ID', width: 150 },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={userImages[params.value]} alt={params.value} style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }} />
        {params.value}
      </div>
    ),
  },
  { field: 'project', headerName: 'Project', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CalendarTodayIcon style={{ marginRight: 8 }} />
          <span>{params.value}</span>
        </div>
      ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      const { color, dotColor } = getStatusStyle(params.value);
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            display: 'inline-block',
            marginRight: '8px'
          }}></span>
          <span style={{ color }}>{params.value}</span>
        </div>
      );
    },
  },
];


const DataGridComponent = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize:10 });
  const [searchText, setSearchText] = useState('');


  const handleAddNewItem = () => console.log("Add New Item Clicked");
  const handleFilter = () => console.log("Filter Clicked");
  const handleSort = () => console.log("Sort Clicked");

  const filteredRows = tableData.filter((row) =>
    Object.values(row).some((field) =>
      field.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div style={{ height: 600, width: '94%',margin:'22px' }}>
      <h1>Order List</h1>
      

      <Toolbar style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'#f7f9fb',minHeight:'54px !important' }}>
        <div>
          <Tooltip title="Add New Item">
            <IconButton onClick={handleAddNewItem}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton onClick={handleFilter}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort">
            <IconButton onClick={handleSort}>
              <SwapVertIcon />
            </IconButton>
          </Tooltip>
        </div>
        
    
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 250, backgroundColor: 'white', borderRadius: '4px' }} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon style={{ color: '#888' }} /> 
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>

        <div className="order-container" style={{ flex: 1 }}>
        <DataGrid
          rows={filteredRows} 
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          pageSizeOptions={[5,10,20]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row.id}
          rowsPerPageOptions={[5, 10, 20]} 
          autoHeight 
        />
      </div>
    </div>
  );
};

export default DataGridComponent;
