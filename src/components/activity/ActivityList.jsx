import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Container } from "@mui/material";
import { Stack } from '@mui/material';
import classNames from 'classnames'

export default function ActivityList({ items  }) {

  return ( <div className={styles["activity-list"]}> <Stack direction="column" spacing={2}>  {items && items.map((item, i) => {
            return ( <ActivityListItem key={i} user={item.user}   nft={item.nft}  created_at={item.created_at} type={item.type} />);
          })}
        </Stack>
   
    </div>
  );
}
 


