import styles from './ProductInfoLikes.module.scss';
import millify from 'millify';
import { Chip, Grid, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames';


export default function ProductInfoLikes({amount=0}) {
    return ( <div className={classNames(styles["product-info-likes"])} >
            <Chip className={classNames(styles.likes)} sx={{ borderRadius: "7px"}} color='secondary' icon={<FavoriteIcon fontSize='0.8125rem' />} label={amount>0 ? (millify(likes,{ units: ["", "KB", "MB", "GB", "TB"]})):0} variant="outlined" /> </div> );    
}