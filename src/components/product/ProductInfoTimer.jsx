import classNames from 'classnames';
import styles from './ProductInfoTimer.module.scss';
import Countdown from 'react-countdown';
import { colors, Typography } from '@mui/material';
 

export default function ProductInfoTimer({timeEnd=10000,onTimeEnd}) {
      // Random component
      const Completionist = () => onTimeEnd;

      const renderer = ({ hours, minutes, seconds }) => {
           
        
            // Render a countdown
            return (
              <span>
                {hours}:{minutes}:{seconds}
              </span>
            );
          
        }; 

 return    (typeof timeEnd=="undefined" ||timeEnd==null) ?(<div className={classNames(styles["product-info-timer"])} >
          </div>
      ) 
   :(<div className={styles['product-info-timer']} >
                <p className={styles.title} variant='overline' 
                sx={{fontWeight:"600",fontStyle:'normal'}}
                display='block'>ENDS IN</p>
                <div className={`${styles.timer} ${styles.active}`}  >
                        <Countdown date={timeEnd } controlled={true}  renderer={renderer} onComplete={onTimeEnd} />
                </div>
            </div>) 
    
}