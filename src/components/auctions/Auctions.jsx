import {  Container, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './Auctions.module.scss';
import Card from '../card/Card';

const element={"cards":[
    {
        "name": String,
        "user": {
           "avatar": String,
           "verified": Boolean
        },
        "mediaUrl": String,
        "price": String,
        "currency": String,
        "timeLeft": Number
       },
       {
        "name": String,
        "user": {
           "avatar": String,
           "verified": Boolean
        },
        "mediaUrl": String,
        "price": String,
        "currency": String,
        "timeLeft": Number
       },
       {
        "name": String,
        "user": {
           "avatar": String,
           "verified": Boolean
        },
        "mediaUrl": String,
        "price": String,
        "currency": String,
        "timeLeft": Number
       },
       {
        "name": String,
        "user": {
           "avatar": String,
           "verified": Boolean
        },
        "mediaUrl": String,
        "price": String,
        "currency": String,
        "timeLeft": Number
       }
    ]
}


export default function Auctions({cards=element.cards,}) {
    console.log(cards);
    return (
        <div>
        <Container className={classNames(styles.container)}  >
            <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

                <Grid item   >
                    <Typography variant='h1' component='h4' >Live Auctions  </Typography>
                </Grid>
                <Grid item   >
                    <FormControl  sx={{ m: 1}} size="small" >
                        <Select 
                        value="" //needs to be here because without value throws Error
                        color='secondary'
                        label='This week'
                        className={classNames(styles.selectBox)} 
                        >
                            <MenuItem key={'this_week'}  value={'this_week'}>This week</MenuItem>
                            <MenuItem key={'last_week'} value={'last_week'}>Last week</MenuItem>
                            <MenuItem key={'last_month'} value={'last_month'}>Last month</MenuItem>

                        
                        {/* </TextField> */}
                        </Select>
                    </FormControl>
                
                </Grid>
            </Grid>
            <Grid container wrap='nowrap' spacing={1} >
            {[...cards].map((x,i)=>{
                console.log(x,i);
               return <Grid item lg={3} key={x.i} ><Card {...x} verified={true} timeLeft={5555}/></Grid>
            })}            
            </Grid>
        </Container>
        </div>
    );
}