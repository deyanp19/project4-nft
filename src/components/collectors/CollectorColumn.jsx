import { Grid } from '@mui/material';
import classNames from 'classnames';
import Collector from './Collector';
import styles from './CollectorColumn.module.scss';

  

export default function CollectorColumn({items=[]}) {

  items= [
      {
        "name": 'jhon',
        "nftsCount": "Number 3",
        "avatar": "/images/nft.jpg",
        "verified": Boolean,
        "id": 33
      },
      {
        "name": 'jhon',
        "nftsCount": "Number 3",
        "avatar": "/images/nft.jpg",
        "verified": Boolean,
        "id": 33
      }
    ]

console.log({items});

    let light= styles.lighter;
    let type;
    return (
       items.map((item,i)=>{
          if ((i)%2===0) {
            light =styles.lighter;
            type ='lighter';
            console.log(type);

          } else{
            light===styles.darker;
            type='darker'
            console.log(type);
          }

          return (
            <div className={light}>
              <Grid key={i+item.name} className={styles.collectors} container spacing={2}>
                <Grid item className={classNames(styles.collector)} xs={1}>
                  {i+1}
                </Grid>
                <Grid item  className={styles.collectors} xs={3}>
                  <Collector {...item} type={type}></Collector>
                </Grid>
              </Grid>
            </div>

          );

      }) 


    );

}