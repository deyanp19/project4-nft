import { Button, Container, Grid, Typography } from '@mui/material';
import theme from "../../theme";
import classNames from 'classnames';
import Link from '../link/Link';
import Logo from '../logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={classNames(styles.footerWrapper)}>
            <Container className={classNames(styles.footerContainer)} component="footer" maxWidth="xl">
                <Grid 
                container 
                spacing={2}
                
                >
                    <Grid item xs={4} >
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item xs={4} >
                        <p className={classNames(styles.policy)}> Bum All Rights Reserved 2021</p>
                    </Grid>
                    <Grid item xs={4} >
                        <Button  variant="text"  className={styles.policy}>Privacy Policy</Button>
                        <Button variant="text"  className={styles.policy}>Cookie Policy</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}