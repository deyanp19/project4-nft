import { Grid } from '@mui/material';
// import { formatDistance, parseISO } from 'date-fns/esm';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './Activity.module.scss';

export default function Activity({user='', crated_at='',nft='',type="like"}) {
   
    
    return (

        
        <div className={styles.activity} >
            <Grid container direction="row" >
                <Grid item >
                    <Avatar  />
                </Grid>
                <Grid item >
                    
                </Grid>
            
            <Link href='/' />
            </Grid>
        </div>
    );
}