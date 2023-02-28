import { Typography } from '@mui/material';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle({text}) {
    <Typography className={classNames(styles["product-info-title"])}>
        {text}
    </Typography>
}