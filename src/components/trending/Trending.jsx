import { Box, Chip, FormControl, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import Card from '../card/Card';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Trending() {
        const example={"cards":[
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
                                    "currency":"ETH"
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
                                    "currency":"ETH"
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
                                    "currency":"ETH"
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
    return (
        <Grid container >
            <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

                <Grid item  sx={4}>
                    <Typography variant='h1' component='h4' >Trending  </Typography>
                </Grid>
                <Grid item sx={3}>
                    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small" >
                        {/* <TextField fullWidth */}
                        <Select 
                        className={classNames(styles.selectBox)} 
                            label='This week'
                            renderValue={()=>(<Box sx={{display:'flex', flexWrap:'wrap',gap:-.5}}>
                                <Chip key={"asde"} label={"sdf"} />
                            </Box>)}
                        >
                        {/* select
                         InputProps={{
                                startAdornment: (
                                     <InputAdornment position='end' >

                                    <KeyboardArrowDownIcon sx={{color:'white'}}  />
                                    </InputAdornment>
                                ),
                                disableUnderline:true
                            }}
                            > */}
                                
                            <MenuItem value={'this_week'}>This week</MenuItem>
                            <MenuItem value={'last_week'}>Last week</MenuItem>
                            <MenuItem value={'last_month'}>Last month</MenuItem>

                        
                        {/* </TextField> */}
                        </Select>
                    </FormControl>
                
                </Grid>
            </Grid>
            <Grid container wrap='nowrap' spacing={1} >
            {example && example.cards.map(x=>{
               return <Grid item lg={3} ><Card mediaUrl={x.mediaUrl}  name={x.name}  likes={x.likes}  verified={x.user.verified}   price={x.price} currency={x.currency} /></Grid>
            })}            
            </Grid>
        </Grid>
      
    );
}