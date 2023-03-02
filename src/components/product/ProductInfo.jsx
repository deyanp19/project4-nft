import { Grid, Stack } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductInfo.module.scss';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoStatus from './ProductInfoStatus';
import ProductInfoTimer from './ProductInfoTimer';
import ProductInfoTitle from './ProductInfoTitle';


export default function ProductInfo({title="Shallow Son",creator={name:"",avatar:"",verified:""},price=5,currency="ETH",likes=1120,onTimeEnd,timeEnd,isLive=false}) {
    
    return (
        <div className={styles["product-info"]}>
            <Grid container direction='column'    >
                <Grid item md={12}>
                    <ProductInfoTitle text={title}/>
                </Grid>
                <Grid container  justifyContent="space-between" >
                    <Grid item >

                        <ProductInfoPrice amount={price} currency={currency}/>
                    </Grid>
                    <Grid item>
                        <Stack className={classNames(styles.stats)} direction="row" spacing={1} >
                           {isLive && <ProductInfoStatus />}
                            <ProductInfoLikes amount={likes} />
                        </Stack>
                    </Grid>

                </Grid>
                <Grid container    justifyContent="space-between" spacing={2} alignItems="flex-end">
                    <Grid item xs={7}>
                        <ProductInfoCreator {...creator} />
                    </Grid>
                    <Grid item xs={5}>
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}