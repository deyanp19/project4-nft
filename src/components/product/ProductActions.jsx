import { SportsRugbySharp } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductActions.module.scss';

export default function ProductActions({isLive=false,currency="",buyAmount=0,bidAmount=0,onBuy,onBid}) {
    return (
        <div className={styles["product-action"]}>
            <Grid container spacing={3} >
                <Grid item xs={7}>
                    <Button variant="contained" color="success" onClick={onBuy} disabled={!isLive}   style={{backgroundColor:'rgba(12, 12, 20, 0.5)' }} className={classNames(styles.button)}>Buy for {buyAmount} {currency}</Button>
                </Grid>
                <Grid item xs={5} >
                <Button   color="success" onClick={onBid} disabled={!isLive} variant="outlined"   style={{backgroundColor:"inherit"}} className={classNames(styles.button)}>Place bid for {bidAmount}</Button>

                </Grid>

            </Grid>
        </div>
    );
}