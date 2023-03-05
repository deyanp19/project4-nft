import { Grid, Typography ,Container} from '@mui/material';
// import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityListItem.module.scss';
import formatDistance from 'date-fns/formatDistance'
import parseISO from 'date-fns/parseISO'
 

const bandera={
    "created_at": Date,
    "user": {
       "avatar": {
          "url": '/images/nft.jpg'
       },
       "verified": true,
       "name":'Cupcat nft'
    },
    "nft":{
       "name": 'dog bone',
       "owner": {
          "username": "antonio banderas",
           "avatar": {
              "url": '/images/avatar.png'
           },
          "verified": true
       }
    },
    "type": "buy"
   }
   
  let currentDate=new Date();
 
export default function ActivityListItem({user ,created_at ,nft ,type="like"}) {
     created_at='+02023065';
    let dateInTime=parseISO(created_at, { additionalDigits: 1 })
  
  
   const timeDistanceCalc=formatDistance(currentDate,dateInTime,{addSuffix:true,includeSeconds:true})
    return (
    <div> 
      <Container>
            <Avatar url={user} />
            <p> {user} {type=='like'?"liked":(type=="buy"?"bought":null)}  <Link variant="text"  href='/' >{user}</Link> by  <Link variant="text" href='/'>{nft}</Link></p>  
            <p> { timeDistanceCalc}</p>
            </Container>
        </div>
    );
}


 {/* <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-start" > */}
   {/* <Grid item > */}
     {/* </Grid> */}
            {/* <Grid container direction="column"> */}

     {/* <Grid item > */}
  {/* </Grid> */}
   {/* </Grid> */}
            {/* </Grid> */}



