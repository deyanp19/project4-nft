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

export default function ProductContainer(
    ) {
    return (
        <div className={styles["product-container"]}>
            <Grid container direction="row" spacing={2} >
                <Grid item xs={6}>
                    <ProductImage />
                </Grid>
                <Grid container direction="column" xs={5}>
                    <ProductInfo />
                    <ProductTabs />
                    <ProductActions />
                </Grid>
            </Grid>
        </div>
    );
}