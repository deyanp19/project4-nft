import classNames from 'classnames';
import styles from './ProductInfoTimer.module.scss';
import Countdown from 'react-countdown';
import { Typography } from '@mui/material';

export default function ProductInfoTimer({timeEnd,onTimeEnd}) {
      // Random component
      const Completionist = () => onTimeEnd;

      const renderer = ({ hours, minutes, seconds, completed }) => {
           
          if (completed) {
            // Render a complete state
            return <Completionist />;
          } else {
            // Render a countdown
            return (
              <span>
                {hours}:{minutes}:{seconds}
              </span>
            );
          }
        };
console.log(typeof timeEnd);
 return    (typeof timeEnd=="undefined" ||timeEnd==null) ?(<div className={classNames(styles["product-info-timer"])} style={{display:"none"}}>
             <Typography sx= {{display:'none' }}  className={classNames(styles.title)} variant='overline' 
              sx={{fontWeight:"600",fontStyle:'normal'}}
              display='block'>ends in</Typography>
              <div className={classNames(styles.timer)}>
                        <Countdown date={Date.now()  } controlled={true}  renderer={renderer} onComplete={onTimeEnd} />
              </div>
          </div>
      ) 
   :(<div className={classNames(styles["product-info-timer"])} >
                <Typography className={classNames(styles.title)} variant='overline' 
                sx={{fontWeight:"600",fontStyle:'normal'}}
                display='block'>ends in</Typography>
                <div className={classNames(styles.timer)}>
                        <Countdown date={timeEnd } controlled={true}  renderer={renderer} onComplete={onTimeEnd} />
                </div>
            </div>) 
    
}