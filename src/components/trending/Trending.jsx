import { Box, Chip,  FormControl, Grid,  MenuItem, Typography } from '@mui/material';
import { Container } from "@mui/material";
import Card from '../card/Card';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const element={"cards":[
                                {
                                    "name":"Ivy",
                                    "user":{
                                        "avatar":{
                                            "url":"images/avatar.png"
                                        },
                                        "verified":true
                                    },
                                    "mediaUrl":"images/nft.jpg",
                                    "price":1,
                                    "currency":"ETH",
                                    "likes":300,
                                    "timeLeft":20
                                },
                                {
                                    "name":"Judie",
                                    "user":{
                                        "avatar":{
                                            "url":"images/avatar.png"
                                        },
                                        "verified":true
                                    },
                                    "mediaUrl":"images/nft.jpg",
                                    "price":2.3,
                                    "currency":"ETH",
                                    "timeLeft":200
                                },
                                {
                                    "name":"Juniper",
                                    "user":{
                                        "avatar":{
                                            "url":"images/avatar.png"
                                        },
                                        "verified":true
                                    },
                                    "mediaUrl":"images/nft.jpg",
                                    "price":5,
                                    "currency":"ETH",
                                    "timeLeft":440
                                },
                                {
                                    "name":"Maple",
                                    "user":{
                                        "avatar":{
                                            "url":"images/avatar.png"
                                        },
                                        "verified":true
                                    },
                                    "mediaUrl":"images/nft.jpg",
                                    "price":10,
                                    "currency":"ETH"
                                }
                                ]
                        }
                       
 export default function Trending( {cards=[...element.cards]} ) {
    return (
        <div>
        <Container className={classNames(styles.container)}  >
            <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

                <Grid item   >
                    <Typography variant='h1' component='h4' >Trending  </Typography>
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
            {cards.map(x=>{
               return <Grid item lg={3} key={x.name} ><Card  mediaUrl={x.mediaUrl}  title={x.name}  likes={x.likes}  verified={x.user?.verified}   price={x.price} currency={x.currency} timeLeft={x.timeLeft} /></Grid>
            })}            
            </Grid>
        </Container>
        </div>
    );
}