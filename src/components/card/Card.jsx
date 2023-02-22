import { CardHeader, CardMedia, Grid, TextField, Typography } from '@mui/material';
import   {default as CardOrigin}  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { bool, number } from 'prop-types';
import Avatar from '../avatar/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from 'millify';
import styles from './Card.module.scss';
import classNames from "classnames";

export default function Card({mediaUrl="/images/nft.jpg",name="Clock",likes=0,user={avatar:{url:'images/avatar.png'},verified:bool,},price='123',currency="ETH"}){

    return (

        <CardOrigin className={classNames(styles.card)} sx={{maxWidth:339}}>
           <CardHeader 
           avatar={
               <Avatar url={user.avatar.url} verified={user.avatar.verified}></Avatar>
           }
           />
           <CardMedia className={classNames(styles.media)}
                component="img"
                height="286"
                sx={{borderRadius:1}}
                image={mediaUrl}
                alt="image of BUM"
           />
            <CardContent >
                <Typography className={classNames(styles.name)}>{name}
                    <Typography className={classNames(styles.price)}>~{price} {currency}</Typography>
                </Typography>
                <Stack  direction="row" spacing={1}>
                   
                    <Chip className={classNames(styles.likes)}
                        color='secondary'
                        icon={<FavoriteIcon />} 
                        label={
                        likes>0 ? (millify(likes,{ units: ["", "KB", "MB", "GB", "TB"]})):0} 
                        
                        variant="outlined" 
                        />
                </Stack>
            </CardContent>
        </CardOrigin>
    );
}
