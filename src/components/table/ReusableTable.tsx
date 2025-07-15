import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import type { ColumnDef } from '@tanstack/react-table';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

interface ReusableTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

function ReusableTable<T>({ data, columns }: ReusableTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableCell
                key={header.id}
                sx={{ color: 'black', fontWeight: 'semibold', fontSize: '1.2rem' }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>

      <TableBody>
        {table.getRowModel().rows.map((row,index) => (
          <TableRow key={row.id}
          sx={{
            backgroundColor: index % 2 === 0 ? '#f3f3f3ff' : 'white',
            '&:hover': {
          backgroundColor: '#d4d9e6ff', 
          cursor: 'pointer',          
            },  }}>
            {row.getVisibleCells().map(cell => (
              <TableCell
                key={cell.id}
                sx={{ color: 'rgba(64, 63, 63, 0.6)', fontSize: '1rem' }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReusableTable;
