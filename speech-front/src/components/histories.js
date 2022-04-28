import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Histories(props) {
     const { histories } = props;
     console.log(histories);
     if (!histories || histories.length === 0) return <p>Вы еще ничего не тестировали</p>;
  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Пользователь</TableCell>
            <TableCell align="right">speaker</TableCell>
            <TableCell align="right">Текст</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="right">{row.speaker}</TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">{row.process_at}</TableCell>
              <TableCell align="right">{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
