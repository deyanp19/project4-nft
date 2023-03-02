import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//custom module
import styles from './ProductTabs.module.scss';
//for the table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Avatar from '../avatar/Avatar';
import theme from '../../theme';

export default function ProductTabs({text,bids=[{user:{avatar:"/images/logo.svg" ,name:"rock",verified:false},amount:3,date:"2-3-23"},{user:{avatar:"/images/avatar.png",name:"rock",verified:false},amount:3,date:"2-3-23"},{user:{avatar:"/images/nft.jpg",name:"rock",verified:true},amount:3,date:"2-3-23"},{user:{ name:"rock",verified:true},amount:3,date:"2-3-23"}]}) {
    const [tab,setTab]=useState('bids');



   const handleChangeTab=(e,newVal)=>{
       console.log(newVal);
       setTab(newVal);
   }
   const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor:'#4E24F2',
      opacity:0.3,
    },
    // hide last border
    ' td,  th': {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 700,
      fontFamily:'Montserrat'
    },
  }));
  
    return (
      <TabContext value={tab} >
          <div className={styles["product-tabs"]}>
              
              <TabList onChange={handleChangeTab} aria-label="product-tab">
                  <Tab label="details" value="details"></Tab>
                  <Tab label="bids" value="bids">
                   
                  </Tab>
              </TabList>
              <TabPanel value="details">
                  i will see
              </TabPanel>
              <TabPanel value="bids">
                   <TableContainer compnent={Paper}>
                        <Table sx={{minWidth:400}} aria-label="table">
                             <TableBody>
                                 {bids.map((bid,i)=>(
                                     <StyledTableRow key={bid.user.name} className={[`table-row-${i}`]}>
                                         <StyledTableCell component="th" scope="row"><Avatar size={34} url={bid.user.avatar} verified={bid.user.verified} ></Avatar>{bid.user.name}</StyledTableCell>
                                         <StyledTableCell align="right" >{bid.amount}</StyledTableCell>
                                         <StyledTableCell align="right" >{bid.date}</StyledTableCell>
                                     </StyledTableRow>
                                 ))}
                             </TableBody>
                        </Table>
                    </TableContainer>
              </TabPanel>
          </div>
      </TabContext>
    );
}