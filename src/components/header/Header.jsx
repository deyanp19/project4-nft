import { Container, Grid, SvgIcon, TextField } from "@mui/material";
import theme from "../../theme";
import Logo from "../logo/Logo";
import Link from "../link/Link";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

 
 

export default function Header() {
console.log(styles);
    return( 
      <div className={classNames(styles.wrapper)}>
          <Container className={classNames(styles.container)} maxWidth="xl">
                <Grid  container >
                    <Grid item xs={4}>

                        <Logo />
                    </Grid>
                    <Grid item xs={4}>

                        <form>

                        <TextField fullWidth variant="standard" label='Find items, users and activities' color='secondary' className={classNames(styles.backgroundInputSearch)} >
                        <Grid item xs={8}>
                    <SearchIcon />
                </Grid>
                        </TextField>
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <Link   href='/' >Home</Link>
                        <Link className={classNames(styles.navLinks)}  href='/' >Activity</Link>
                        <Link className={classNames(styles.navLinks)}  href='/' >Explore</Link>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}