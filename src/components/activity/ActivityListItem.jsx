import { Grid } from '@mui/material';
// import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityListItem.module.scss';
import { format, formatDistance,parseISO, formatRelative, subDays } from 'date-fns';

export default function ActivityListItem({user='', created_at='',nft='',type="like"}) {
   
    
    return (

        
        <div className={styles.activity} >
            <Grid container direction="row" >
                <Grid item >
                    <Avatar  />
                </Grid>
                <Grid item >
                  {nft} {type}  <Link href='/' >{user}</Link>> 
                </Grid>
            
           
            { formatDistance(new Date()-3, new Date(parseISO(created_at, { additionalDigits: 1 })), {includeSeconds: true,addSuffix: true})}
            </Grid>
        </div>
    );
}