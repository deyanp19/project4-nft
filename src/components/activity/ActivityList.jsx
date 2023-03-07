import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Container } from "@mui/material";
import { Stack } from '@mui/material';
import classNames from 'classnames'

export default function ActivityList({ items  }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return ( <div className={`activity-list ${styles.activityList}`}> <Stack direction="column" spacing={2}>  {items.map((item, i) => {
            return ( <ActivityListItem key={i} user={item.user}   nft={item.nft}  created_at={item.created_at} type={item.type} />);
          })}
        </Stack>
   
    </div>
  );
}
 


