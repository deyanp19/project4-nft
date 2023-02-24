import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './Step.module.scss';

const info={
    "number":"Number",
    "title":"String",
    "description":"String"
   }


export default function Step({number=1, title="",description=""}) {
    return (
        <div >
            <Container className={classNames(styles.cardWrapper)}>
                
                    <Card  >
                        
                            <Grid container className={classNames(styles.containerText)} >
                                <Grid className={classNames(styles.number)}  item xs={4}>
                                    <Typography textAlign='center' justifyContent='center' variant='h1' sx={{fontFamily:'Montserrat',fontWeight:'700'}} >{number}</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant='h3' sx={{textTransform:'uppercase',padding:'25px 10px 0px 10px' }} >{title}</Typography>
                                    <Typography sx={{padding:"10px 20px"}} >{description}</Typography>
                                </Grid>

                            </Grid>
                        
                    </Card>
                 
            </Container>

        </div>
    );
}