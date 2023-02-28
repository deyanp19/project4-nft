import { Grid } from '@mui/material';
import classNames from 'classnames';
import Collector from './Collector';
import styles from './CollectorColumn.module.scss';

  

export default function CollectorColumn({items=[],key}) {

console.log(key);


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
            type='darker';
          }

          return (
            <div className={light}>
                <Grid  className={styles.collectors} container spacing={2}>
                  <Grid item className={classNames(styles.collector)} xs={1}>
                    {key}
                  </Grid>
                  <Grid item  className={styles.collectors} xs={3}>
                    <Collector key={i+item.name} {...item} type={type}/>
                  </Grid>
                </Grid>
             
            </div>

          );

      }) 


    );

}