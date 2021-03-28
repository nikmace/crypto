import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';

const columns = [
  { id: 'txid', label: 'Transaction Id', minWidth: 110, maxWidth: 180 },
  { id: 'inputAmount', label: 'Input Amount', minWidth: 110, maxWidth: 180 },
  {
    id: 'fee',
    label: 'Fee',
    minWidth: 110,
    align: 'right',
  },
  {
    id: 'outputAmount',
    label: 'Output Amount',
    minWidth: 110,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 110,
    align: 'right',
  },
  
  
];

function createData(txid, inputAmount, fee, outputAmount, date) {
  return { txid, inputAmount, fee, outputAmount, date };
}

let rows = [];

const useStyles = makeStyles({
  root: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: 'auto',
  },
  container: {
    maxHeight: 540,
  },
  table: {
    backgroundColor: '#eae0ff',
  },
});


function TransactionsTable({transactions, success}) {
    const classes = useStyles();
    
    transactions.map((transaction) => {
        if (success) {
            let date = moment(transaction.time * 1000).format('MMMM Do YYYY, h:mm:ss a')
            let data = createData(transaction.txid, transaction.input_amount, transaction.fee, transaction.output_amount, date);
            rows.push(data);
        }
        return true;
    });

    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table" size="medium" className={classes.table}>
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(0, 10).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        
        </Paper>
    );
}



export default TransactionsTable;
