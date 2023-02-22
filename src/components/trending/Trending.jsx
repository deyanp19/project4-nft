import { Grid, Typography } from '@mui/material';
import Card from '../card/Card';
import styles from './Trending.module.scss';

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
            <Grid item lg={12}><Typography variant='h1' component='h4' >Trending  </Typography></Grid>
            <Grid container wrap='nowrap' spacing={1} >
            {example && example.cards.map(x=>{
               return <Grid item ><Card mediaUrl={x.mediaUrl}  name={x.name}  likes={x.likes}  verified={x.user.verified}   price={x.price} currency={x.currency} /></Grid>
            })}            
            </Grid>
        </Grid>
      
    );
}