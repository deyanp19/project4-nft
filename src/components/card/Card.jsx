import { CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import   {default as CardOrigin}  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { bool } from 'prop-types';
import Avatar from '../avatar/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from 'millify';
import styles from './Card.module.scss';
import classNames from "classnames";
import Countdown from 'react-countdown';
import Circle from '@mui/icons-material/Circle'

export default function Card({mediaUrl="/images/nft.jpg",name="Clock",likes=0,user={avatar:{url:'images/avatar.png'},verified:bool,},price='123',currency="ETH",timeLeft=0}){
    if (timeLeft!=0) {
            console.log('live',timeLeft);
            // Random component
            const Completionist = ({ hours="00", minutes="00", seconds="00", completed="00" }) => <span>{hours}:{minutes}:{seconds}</span>;

            const renderer = ({ hours, minutes, seconds, completed }) => {
                if (completed) {
                  // Render a complete state
                  return <Completionist />;
                } else {
                  // Render a countdown
                  return (
                    <span>
                      {hours}:{minutes}:{seconds}
                    </span>
                  );
                }
              };
            return (

                <CardOrigin className={classNames(styles.card)} sx={{maxWidth:339}}>
                   <CardHeader 
                   avatar={
                       <Avatar size={33} url={user.avatar.url} verified={user.avatar.verified}></Avatar>
                   }
                   />
                   <div className={classNames(styles.badge)}>
                        <div className={classNames(styles.liveText)}>
                            <Circle fontSize='11' className={classNames(styles.circle)} />   
                            <p>LIVE</p>
                        </div>
                        <div className={classNames(styles.counterRibon)}>
                            <Countdown
                            date={Date.now() + timeLeft}
                             controlled={true}
                            renderer={renderer}
                            />
                        </div>
                   
                   <CardMedia className={classNames(styles.mediaBadge)}
                        component="img"
                        height="286"
                        sx={{borderRadius:1}}
                        image={mediaUrl}
                        alt="image of BUM"
                        />
                      </div>
                    <CardContent >
                        <Grid container sx={{justifyContent:'space-between', alignItems:'center'}} wrap='nowrap' >
                            <Grid item>
                                <Typography className={styles.name}>{name} </Typography>
                                <Typography className={styles.price}>~{price} {currency}</Typography>
                            </Grid>
                            <Grid item>
                        <Stack  direction="row" spacing={1}>
                            <Chip className={classNames(styles.likes)}
                                color='secondary'
                                icon={<FavoriteIcon />} 
                                label={
                                    likes>0 ? (millify(likes,{ units: ["", "KB", "MB", "GB", "TB"]})):0} 
                                    
                                    variant="outlined" 
                                    />
                        </Stack>
                                    </Grid>
                        </Grid>
                    </CardContent>
                </CardOrigin>
            );
        }
    return (

        <CardOrigin className={classNames(styles.card)} sx={{maxWidth:339}}>
           <CardHeader 
           avatar={
               <Avatar size={33} url={user.avatar.url} verified={user.avatar.verified}></Avatar>
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
                <Grid container sx={{justifyContent:'space-between', alignItems:'center'}} wrap='nowrap' >
                    <Grid item>
                        <Typography className={styles.name}>{name} </Typography>
                        <Typography className={styles.price}>~{price} {currency}</Typography>
                    </Grid>
                    <Grid item>
                <Stack  direction="row" spacing={1}>
                    <Chip className={classNames(styles.likes)}
                        color='secondary'
                        icon={<FavoriteIcon />} 
                        label={
                            likes>0 ? (millify(likes,{ units: ["", "KB", "MB", "GB", "TB"]})):0} 
                            
                            variant="outlined" 
                            />
                </Stack>
                            </Grid>
                </Grid>
            </CardContent>
        </CardOrigin>
    );
}

