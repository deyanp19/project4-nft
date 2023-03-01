import { Chip } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductInfoStatus.module.scss';
import CircleIcon from '@mui/icons-material/Circle';

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles["product-info-status"])}>
            <div className={classNames(styles.status)} >
                <Chip icon={<CircleIcon  color="black" />} label='LIVE' sx={{backgroundColor: "#24F25E", color: 'black',borderRadius:"7"}} />
            </div>
        </div>
    );
}