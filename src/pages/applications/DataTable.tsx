import { useState } from 'react';
import ReusableTable from '../../components/table/ReusableTable';
import PaginatedTable from '../../components/table/PaginatedTable';
import { Box, Typography, Avatar, Card } from '@mui/material';
import type { ColumnDef } from '@tanstack/react-table';

type Employee = {
  avatar: string;
  name: string;
  position: string;
  age: number;
  office: string;
  salary: string;
  startDate: string;
};

const DataTable = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 7;

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const data: Employee[] = [
    {
      avatar: '/assets/images/Profile.svg',
      name: 'Tiger Nixon',
      position: 'System Architect',
      age: 61,
      office: 'Tokyo',
      salary: '$170,750',
      startDate: '22/5/2009',
    },
    {
      avatar: '/assets/images/avatar.png',
      name: 'Garrett Winters',
      position: 'Accountant',
      age: 63,
      office: 'San Francisco',
      salary: '$433,060',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/AboutProfile.png',
      name: 'Ashton Cox',
      position: 'Technical Author',
      age: 66,
      office: 'Edinburgh',
      salary: '$320,800',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/avatar.png',
      name: 'Tiger Nixon',
      position: 'Javascript Developer',
      age: 20,
      office: 'San Francisco',
      salary: '$433,060',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/Profile.svg',
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      age: 19,
      office: 'Berlin',
      salary: '$433,060',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/avatar.png',
      name: 'Ashton Cox',
      position: 'Technical Author',
      age: 66,
      office: 'Edinburgh',
      salary: '$320,800',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/AboutProfile.png',
      name: 'Tiger Nixon',
      position: 'System Architect',
      age: 61,
      office: 'Tokyo',
      salary: '$170,750',
      startDate: '22/5/2009',
    },
    {
      avatar: '/assets/images/avatar.png',
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      age: 19,
      office: 'Berlin',
      salary: '$433,060',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/AboutProfile.png',
      name: 'Ashton Cox',
      position: 'Technical Author',
      age: 66,
      office: 'Edinburgh',
      salary: '$320,800',
      startDate: '22/5/2011',
    },
    {
      avatar: '/assets/images/AboutProfile.png',
      name: 'Ashton Cox',
      position: 'Technical Author',
      age: 66,
      office: 'Edinburgh',
      salary: '$320,800',
      startDate: '22/5/2011',
    },
  ];

  const columns: ColumnDef<Employee, any>[] = [
    {
      header: 'Name',
      accessorKey: 'name',
      cell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={row.original.avatar}
            alt={row.original.name}
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Typography variant="body2">{row.original.name}</Typography>
        </Box>
      ),
    },
    {
      header: 'Position',
      accessorKey: 'position',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Office',
      accessorKey: 'office',
    },
    {
      header: 'Salary',
      accessorKey: 'salary',
    },
    {
      header: 'Start date',
      accessorKey: 'startDate',
    },
  ];

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card sx={{ m: 2, background: 'white' }}>
      <ReusableTable data={paginatedData} columns={columns} />
      <PaginatedTable
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
      />
    </Card>
  );
};

export default DataTable;
