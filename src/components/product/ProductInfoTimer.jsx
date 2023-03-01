import classNames from 'classnames';
import styles from './ProductInfoTimer.module.scss';
import Countdown from 'react-countdown';
import { Typography } from '@mui/material';

export default function ProductInfoTimer({timeEnd=1,onTimeEnd}) {
      // Random component
      const Completionist = () => onTimeEnd();

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

    if (timeEnd) {
        return ( 
            <div className={classNames(styles["product-info-timer"])}>
                <Typography className={classNames(styles.title)} variant='overline' 
                sx={{fontWeight:"600",fontStyle:'normal'}}
                display='block'>ends in</Typography>
                <div className={classNames(styles.timer)}>
                        <Countdown date={Date.now()  } controlled={true}  renderer={renderer}  />
                </div>
            </div>
                        );
    } else {
        return (
            <div className={classNames(styles.timer)}>
time end = 0
            </div>
        );
    }
}