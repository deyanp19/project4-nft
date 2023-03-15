import styles from "./ExploreFilters.module.scss";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Card from '../card/Card';
import nftsData from '../../../data/nfts.json';

export default function ExploreFilters({ filters }) {
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [nfts,setNfts]=useState([]);

  useEffect(()=>{
      setNfts(nftsData);
  })

  return (
    <div className={styles["explore-filters"]}>
       
      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        <FormControl>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            value={sortBy}
            sx={{ minWidth: "120px" }}
            color={"primary"}
            onChange={(e) => setSortBy(e.target.value)}
          >
             {filters.sort.map((filter) => {
              return (
                  <Stack direction="column">
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
                </Stack>
              );
            })}  
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="price-range-label">Price range</InputLabel>
          <Select
            labelId="price-range-label"
            value={priceRange}
            sx={{ minWidth: "120px" }}
            color={"primary"}
            onChange={(e) => setPriceRange(e.target.value)}
          >
              <Stack direction="column" >
             {filters.price.map((filter) => {
              return (
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
              );
            })}  
            </Stack>
          </Select>
        </FormControl>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={styles["search-icon"]} />
              </InputAdornment>
            ),
            className: styles.search,
            disableUnderline: true,
            sx: { minWidth: "140px" },
          }}
          sx={{ minWidth: "40px" }}
          variant="standard"
        />
       
      </Stack>
      
    </div>
  );
}