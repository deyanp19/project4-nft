import { Typography } from '@mui/material';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle({text}) {
  return ( <div className={classNames(styles["product-info-title"])}>

    <Typography >
        {text}
    </Typography>
    </div>)
}