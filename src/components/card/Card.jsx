import { CardHeader, CardMedia, Grid, TextField, Typography } from '@mui/material';
import   {default as CardOrigin}  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { bool, number } from 'prop-types';
import Avatar from '../avatar/Avatar';
import User from '../user/User';

console.log(CardOrigin);

export default function Card2({mediaUrl="",name="",likes=number,user={avatar:{url:''},verified:bool,},price='',currency=""}){

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
                <Typography></Typography>
            </CardContent>
        </CardOrigin>
    );
}

