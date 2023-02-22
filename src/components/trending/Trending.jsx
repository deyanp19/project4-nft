import { Box, Chip, Container, FormControl, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
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
                       
 export default function Trending( {cards=[]} ) {
    return (
        <Container className={classNames(styles.container)} maxWidth="xl" >
            <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

                <Grid item >
                    <Typography variant='h1' component='h4' >Trending  </Typography>
                </Grid>
                <Grid item sx={3}>
                    <FormControl  sx={{ m: 1}} size="small" >
                        {/* <TextField fullWidth */}
                        <Select 
                        color='secondary'
                        placeholder='This week'
                        className={classNames(styles.selectBox)} 
                            label='This week'
                            renderValue={()=>(<Box sx={{display:'flex', flexWrap:'wrap',gap:0.5}}>
                                <Chip
                                 key="asde" 
                                 label="This weeksd"
                                 position="end"
                                 icon={<KeyboardArrowDownIcon />}
                                 variant='outlined'
                                 />
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
            {cards && cards.map(x=>{
               return <Grid item lg={3} ><Card mediaUrl={x.mediaUrl}  title={x.name}  likes={x.likes}  verified={x.user.verified}   price={x.price} currency={x.currency} /></Grid>
            })}            
            </Grid>
        </Container>
      
    );
}