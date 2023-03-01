import { Grid, Stack } from '@mui/material';
import styles from './ProductInfo.module.scss';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoStatus from './ProductInfoStatus';
import ProductInfoTimer from './ProductInfoTimer';
import ProductInfoTitle from './ProductInfoTitle';


export default function ProductInfo({title="Shallow Son",creator={name:"",avatar:"",verified:""},price=5,currency="ETH",likes=0,onTimeEnd,timeEnd,isLive=false}) {
    
    return (
        <div className={styles["product-info"]}>
            <Grid container direction='column' rowSpacing={60} >
                <Grid item md={12}>
                    <ProductInfoTitle text={title}/>
                </Grid>
                <Grid container                                  justifyContent="space-between" >
                    <Grid item >

                        <ProductInfoPrice amount={price} currency={currency}/>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={1} >
                           {isLive && <ProductInfoStatus />}
                            <ProductInfoLikes amount={234200} />
                        </Stack>
                    </Grid>

                </Grid>
                <Grid container    justifyContent="space-between" spacing={2}>
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