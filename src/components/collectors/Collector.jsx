import styles from './Collector.module.scss';
import User from '../user/User';
import { Container } from '@mui/material';

export default function Collector({name,avatar,verified=true,type='darker',nftsCount}) {
    return (
        <div className={styles.container}>
            <Container >

            <User name={name} info={nftsCount} avatar={avatar} verified={verified} type={type} />
            </Container>
        </div>
    );
}