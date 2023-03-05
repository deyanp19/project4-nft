import { Grid, Typography } from '@mui/material';
// import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityListItem.module.scss';
import { format, formatDistance,parseISO, formatRelative, subDays } from 'date-fns';

export default function ActivityListItem({user='flava', created_at='+020230305',nft='dicksmart',type="like"}) {
   
    
    return (

        
        <div  >
            {/* <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-start" > */}
                {/* <Grid item > */}
                    <Avatar url={user} />
                {/* </Grid> */}
            {/* <Grid container direction="column"> */}
                {/* <Grid item > */}
               <p> {user} {type=='like'?"liked":(type=="buy"?"bought":null)}  <Link variant="text"  href='/' >{user}</Link> by  <Link variant="text" href='/'>{nft}</Link></p>  
                {/* </Grid> */}
            
           
                <p> { formatDistance(new Date(), new Date(parseISO(created_at, { additionalDigits: 1 })), {includeSeconds: true,addSuffix: true})}</p>
            {/* </Grid> */}
            {/* </Grid> */}
        </div>
    );
}