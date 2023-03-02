import { Grid } from '@mui/material';
import ProductActions from './ProductActions';
import styles from './ProductContainer.module.scss';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

const data={
    "name": "String",
    "owner":{
       "username": "String",
       "verified": "Boolean",
       "avatar":{
          "url": "String"
       }
    },
    "price": "Number",
    "currency": "String",
    "likes": "Number",
    "auction_end": "String",
    "details": "String",
    "source":{
       "url": "String"
    },
    "bids":[
       {
          "user":{
             "info": "Number",
             "name": "String",
             "verified": "Boolean",
             "avatar": "String"
          },
          "date": "String",
          "amount": "Number"
       }
    ]
    }

export default function ProductContainer({
    name,owner,price,currency,likes,auction_end,details,source,bids
}) {
    return (
        <div className={styles["product-container"]}>
            <Grid container direction="row" spacing={2} >
                <Grid item xs={6}>
                    <ProductImage url={owner?.avatar.url} />
                </Grid>
                <Grid container direction="column" xs={5}>
                    <ProductInfo title={name} creator={owner?.username} price={price} currency={currency} likes={likes} timeEnd={auction_end} isLive onTimeEnd/>
                    <ProductTabs text  bids/>
                    <ProductActions  isLive currency={currency} buyAmount bidAmount={bids?.amount} onBid onBuy  />
                </Grid>
            </Grid>
        </div>
    );
}