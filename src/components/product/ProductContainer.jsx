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
    "bids":[{user:{avatar:"/images/logo.svg" ,name:"rock",verified:false},amount:3,date:"+02023101"},{user:{avatar:"/images/avatar.png",name:"rock",verified:false},amount:3,date:"+02014101"},{user:{avatar:"/images/nft.jpg",name:"rock",verified:true},amount:3,date:"+02014101"},{user:{ name:"rock",verified:true},amount:3,date:"+02014101"},
    //    {
    //       "user":{
    //          "info": "Number",
    //          "name": "String",
    //          "verified": "Boolean",
    //          "avatar": "String"
    //       },
    //       "date": "String",
    //       "amount": "Number"
    //    }
    ]
    }

    export default function ProductContainer({
        name,owner,price,currency,likes,auction_end,details='Beaten back with a crack not knowing what was two and frow. Te eductation system spews out thothe TAB the broken promises. Unable to find a joutney in a sea of dead bolted doors behind their salvation.',source,bids
    }) {
    // console.log(bids,bids.map(x=>console.log(x)));
    return (
        <div className={styles["product-container"]}>
            <Grid container direction="row" justifyContent="space-between" spacing={2} >
                <Grid item xs={6}>
                    <ProductImage url={owner?.avatar.url} />
                </Grid>
                <Grid container direction="column" xs={5}>
                    <ProductInfo title={name} creator={owner?.username} price={price} currency={currency} likes={likes} timeEnd={auction_end} isLive onTimeEnd/>
                    <ProductTabs text={details} bids={bids}  />
                    <ProductActions text  isLive currency={currency} buyAmount bidAmount={bids?.amount} onBid onBuy  />
                </Grid>
            </Grid>
        </div>
    );
}