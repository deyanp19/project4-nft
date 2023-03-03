import { Container, Grid, Typography } from '@mui/material'
import styles from './ProfileCollection.module.scss'

export default function ProfileCollection({user,filter,items}){
    return (
        <div className={styles["profile-collection"]}>
            <Container>
            <Grid item >
                    <Typography variant='h3' inputProps={{textTransform:'uppercase'}}>Collection</Typography>
                </Grid>
            </Container>

        </div>
    );
}