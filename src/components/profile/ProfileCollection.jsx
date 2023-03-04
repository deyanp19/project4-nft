import { Container, Grid, Typography } from '@mui/material'
import Card from '../card/Card';
import styles from './ProfileCollection.module.scss'
import ProfileCollectionFilters from './ProfileCollectionFilters'

export default function ProfileCollection({user,filters,items=[]}){
    return (
        <div className={styles["profile-collection"]}>
            <Container>
                <Grid  container direction="row" justifyContent="space-between"  wrap='nowrap' spacing={2} justifyContent="space-between"    alignItems="center">
                    <Grid item xs={3} >
                        <Typography variant='h3' inputprops={{textTransform:'uppercase'}}>Collection</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters />
                    </Grid>
                    
            </Grid>
            {items.map((item)=><Card {...item}></Card>)}
            </Container>

        </div>
    );
}