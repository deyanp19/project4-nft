import { Container, Grid, Typography } from '@mui/material'
import styles from './ProfileCollection.module.scss'
import ProfileCollectionFilters from './ProfileCollectionFilters'

export default function ProfileCollection({user,filter,items}){
    return (
        <div className={styles["profile-collection"]}>
            <Container>
                <Grid  container direction="row" justifyContent="space-between"  wrap='nowrap' spacing={2} justifyContent="space-between"    alignItems="center">
                    <Grid item >
                        <Typography variant='h3' inputProps={{textTransform:'uppercase'}}>Collection</Typography>
                    </Grid>
                    <Grid item>
                        <ProfileCollectionFilters />
                    </Grid>
            
            </Grid>
            </Container>

        </div>
    );
}