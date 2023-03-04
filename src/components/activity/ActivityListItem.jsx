import { Grid, Typography } from '@mui/material';
// import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityListItem.module.scss';
import { format, formatDistance,parseISO, formatRelative, subDays } from 'date-fns';

export default function ActivityListItem({user='flava', created_at='+02014101',nft='dicksmart',type="like"}) {
   
    
    return (

        
        <div className={styles.activity} >
            <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-start" >
                <Grid item >
                    <Avatar size={56} />
                </Grid>
            <Grid container direction="column">
                <Grid item >
                  {user} {type}  <Link href='/' >{user}</Link>
                </Grid>
            
           
                <Typography> { formatDistance(new Date()-3, new Date(parseISO('+02014101', { additionalDigits: 1 })), {includeSeconds: true,addSuffix: true})}</Typography>
            </Grid>
            </Grid>
        </div>
    );
}