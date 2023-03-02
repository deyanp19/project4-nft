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
import User from '../user/User';
import { format, formatDistance,parseISO, formatRelative, subDays } from 'date-fns';


export default function ProductTabs({text,bids=[{user:{avatar:"/images/logo.svg" ,name:"rock",verified:false},amount:3,date:"+02023101"},{user:{avatar:"/images/avatar.png",name:"rock",verified:false},amount:3,date:"+02014101"},{user:{avatar:"/images/nft.jpg",name:"rock",verified:true},amount:3,date:"+02014101"},{user:{ name:"rock",verified:true},amount:3,date:"+02014101"}]}) {
  const [tab,setTab]=useState('bids');


  console.log(bids);

  const handleChangeTab=(e,newVal)=>{
       console.log(newVal);
       setTab(newVal);
   }
   const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(78, 36, 242, 0.1)',
      
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
          <div className={styles["product-tabs"]}>
      <TabContext value={tab} >
              
              <TabList onChange={handleChangeTab} aria-label="product-tab">
                  <Tab className={styles["tab-details"]} label="details" value="details"></Tab>
                  <Tab className={styles["tab-bids"]} label="bids" value="bids">
                   
                  </Tab>
              </TabList>
              <TabPanel value="details">
                  i will see
              </TabPanel>
              <TabPanel value="bids">
                   <TableContainer compnent={Paper}>
                        <Table sx={{minWidth:400}} aria-label="table">
                             <TableBody>
                                 {bids&&bids.map((bid,i)=>(
                                     <StyledTableRow key={bid.user.name+i} className={[`table-row-${i}`]}>
                                        <TableCell component="th" scope="row">
                                            <User name={bid.user.name} size={34}  avatar={bid.user.avatar} verified={bid.user.verified} /> 
                                        </TableCell>
                                         <TableCell align="right" >{bid.amount}</TableCell>
                                         <TableCell align="right" >{   
                                         formatDistance(new Date()-3, new Date(parseISO(bid.date, { additionalDigits: 1 })), {includeSeconds: true,
                                          addSuffix: true})
                                         }</TableCell>
                                     </StyledTableRow>
                                 ))}
                             </TableBody>
                        </Table>
                    </TableContainer>
              </TabPanel>
      </TabContext>
          </div>
    );
}