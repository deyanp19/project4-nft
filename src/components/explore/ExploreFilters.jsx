import { Container, FormControl, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './ExploreFilters.module.scss';
import {Search} from '@mui/icons-material';

export default function ExploreFilters({filters}) {
    return (
        <div className={styles["explore-filters"]}>
            <Container>
                <Grid container direction="column" >
                     <FormControl sx={{m:1}} size="small" fullWidth>
                         <Select color="primary" labelId="sort-order" id="sort-order" variant="outlined" value={1} label={filters.sort.label}>
                             {filters.sort.map((x)=><MenuItem key{x.value} value={x.value}>{x.label}</MenuItem>)}
                         </Select>
                     </FormControl>
                     <FormControl sx={{m:1}} size="small" fullWidth>
                         <Select labelId="price" id="price" value={3} color="primary" label={filters.price.label} className={classNames(styles.selectBox)}>{filters.type.map(x=><MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>)}</Select>
                     </FormControl>
                     <FormControl sx={{padding:"4"}}>
                         <TextField variant="standard" InputProps={{
                             startAdorement:(<InputAdornment position="start"><Search sx={{color:"white"}}/></InputAdornment>), disableUnderline:true}} className={classNames(styles.backgroundInputSearch)} fullWidth color="secondary" />
                         
                     </FormControl>
                </Grid>
            </Container>
        </div>
    );
}