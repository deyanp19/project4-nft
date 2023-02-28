import { Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle({text}) {
  return (
    <div className={classNames(styles["product-info-title"])}>

        <Typography className={classNames(styles.title)} variant="h1"  component='h1' >
            {text}
        </Typography>
    </div>
    );
}