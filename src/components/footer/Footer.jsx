import { Button, Container, Grid, Typography } from '@mui/material';
import theme from "../../theme";
import classNames from 'classnames';
import Link from '../link/Link';
import Logo from '../logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={classNames(styles.footerWrapper)}>
            <Container >
                <Grid 
                container 
                className={classNames(styles.footerContainer)}
                maxWidth="xl"
                >
                    <Grid item xs={4} >
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography className={styles.rights} variant='p'> Bum All Rights Reserved 2021</Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Link href='/' className={classNames(styles.policy)}>Privacy Policy</Link>
                        <Link href='/' className={classNames(styles.policy)}>Cookie Policy</Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}