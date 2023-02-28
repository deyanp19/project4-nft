import { Grid } from '@mui/material';
import classNames from 'classnames';
import Collector from './Collector';
import styles from './Collector.module.scss';

  

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
            type ='lighter'
          } else{
            light===styles.darker;
            type='darker'
          }

          return (
            <div className={light}>
              <Grid key={i+item.name} className={styles.collectors} container spacing={2}>
                <Grid item className={classNames(styles.collector)} >
                  {i+1}
                </Grid>
                <Grid item >
                  <Collector {...item} type={type}></Collector>
                </Grid>
              </Grid>
            </div>

          );

      }) 


    );

}