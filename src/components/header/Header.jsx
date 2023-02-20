import { Container, Grid, SvgIcon, TextField } from "@mui/material";
import theme from "../../theme";
import Logo from "../logo/Logo";
 
import classNames from "classnames";
import styles from "./Header.module.scss";
 
import {Search} from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';

export default function Header() {
 
    return( 
      <div className={classNames(styles.wrapper)}>
          <Container >
                <Grid  container className={classNames(styles.container)} maxWidth="xl">
                    <Grid item xs={4}>

                        <Logo />
                    </Grid>
                    <Grid item xs={4}>
                       
                        <form >
                            <TextField
                            InputProps={{
                                startAdornment: (
                                     <InputAdornment position='start' >

                                    <Search sx={{color:'white'}}  />
                                    </InputAdornment>
                                ),
                                disableUnderline:true
                            }}
                            className={classNames(styles.backgroundInputSearch)} 
                            fullWidth 
                            variant="standard" 
                             placeholder='Find items, users and activities' color='secondary'  />
                        </form>
                    </Grid>
                    <Grid className={classNames(styles.navLinks)} item xs={4}>
                        <Stack direction='row' spacing={2} >

                    <Button   >Home</Button>
                    <Button >Activity</Button> 
                    <Button href='/' variant="contained" >Explore</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}