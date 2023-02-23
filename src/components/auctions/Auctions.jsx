import {   FormControl, Grid, ImageList, ImageListItem, MenuItem, Select, Typography } from '@mui/material';
import classNames from 'classnames';
import { Container } from "@mui/material";
import styles from './Auctions.module.scss';
import Card from '../card/Card';

const element={"cards":[
    {
        "name": 'Clock',
        "user": {
           "avatar": '/images/nft.jpg',
           "verified": true
        },
        "mediaUrl": '/images/nft.jpg',
        "price": "String",
        "currency": "String",
        "timeLeft": "Number"
       },
       {
        "name": 'Dodge',
        "user": {
           "avatar": "/images/nft.jpg",
           "verified": true
        },
        "mediaUrl": "/images/nft.jpg",
        "price": "String",
        "currency": "String",
        "timeLeft": "Number"
       },
       {
        "name": 'BTC',
        "user": {
           "avatar": "/images/logo.svg",
           "verified": false
        },
        "mediaUrl": "/images/logo.svg",
        "price": "String",
        "currency": "String",
        "timeLeft": "Number"
       },
       {
        "name": 'Litecoin',
        "user": {
           "avatar": "/images/logo.svg",
           "verified": true
        },
        "mediaUrl": "/images/logo.svg",
        "price": "String",
        "currency": "String",
        "timeLeft": "Number"
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
        </Container>  
            <Grid container wrap='nowrap' spacing={1} >
                <ImageList cols={4} >

                    {[...cards].slice(0,4).map((x,i)=>{
                        console.log(x.name,i);
                        return <ImageListItem  lg={3} key={x.mediaUrl+i} ><Card key={x.mediaUrl} {...x} verified={true} timeLeft={5555}/></ImageListItem>
                    })}            
            </ImageList>
            </Grid>
        
        </div>
    );
}