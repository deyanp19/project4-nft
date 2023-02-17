import { Container, Grid, TextField } from "@mui/material";
import theme from "../../theme";
import Logo from "../logo/Logo";
import Link from "../link/Link";
import classNames from "classnames";
import styles from "./Header.module.scss";

export default function Header() {

    return(
    //   
    //     
    //       <Paper className={classNames(styles.paper)}>
    //         <Link href="/about" color="secondary">
    //           Hi
    //         </Link>
    //       </Paper>
    //  
    //   
      <div className={classNames(styles.wrapper)}>
          <Container className={classNames(styles.container)} maxWidth="xl">
                <Grid theme={theme} container >
                    <Grid item xs={4}>

                        <Logo />
                    </Grid>
                    <Grid item xs={4}>

                        <form>

                        <TextField fullWidth variant="standard" legend='search' color='secondary' className='secondary' >

                        </TextField>
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <Link className={theme.components.MuiIconButton} href='/' >Home</Link>
                        <Link href='/' >Activity</Link>
                        <Link href='/' >Explore</Link>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}