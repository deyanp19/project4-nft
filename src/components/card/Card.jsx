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

console.log(CardOrigin);

export default function Card2({mediaUrl="",name="",likes=0,user={avatar:{url:''},verified:bool,},price='123',currency="ETH"}){

    return (

        <CardOrigin sx={{maxWidth:350}}>
           <CardHeader 
           avatar={
               <Avatar ></Avatar>
           }
           title='Batman'
           subheader="Feb 22 2023"
           />
           <CardMedia 
                component="img"
                height="193"
                image={mediaUrl}
                alt="image of BUM"
           />
            <CardContent >
                <Typography>{price} {currency}</Typography>

                <Stack direction="row" spacing={1}>
                   
                    <Chip icon={<FavoriteIcon />} label={
                        likes>0
                        ?(millify(likes,{ units: ["", "KB", "MB", "GB", "TB"]})):0} variant="outlined" />
                </Stack>
            </CardContent>
        </CardOrigin>
    );
}

