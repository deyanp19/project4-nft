
import { Container, Stack } from "@mui/material";
import ActivityListItem from "./ActivityListItem";
import styles from "./ActivityList.module.scss";
import classNames from "classnames";

 
  export default function ActivityList({ items = [] }) {
    return (
      <div className={styles["activity-list"]}>
          <Stack direction={"column"} spacing={2} alignItems='center'>
              {items.map((item,index)=>{
                  return <ActivityListItem 
                  key={index}
                  user={item.user} 
                  created_at={item.created_at} 
                  nft={item.nft} 
                  type={item.type}
                  />
              })}
          </Stack>
      </div>
    );
  }
  
 



// {   user:{
//     "avatar": {
//        "url": '/images/profilePic.jpg'
//     },
//     "verified": false,
//     "name":'Cupcat nft'
 
// },
// created_at:"+02023065",
// nft:{
//  "name": 'dog bone',
//  "owner": {
//     "username": "antonio banderas",
//      "avatar": {
//         "url": '/images/avatar.png'
//      },
//     "verified": false
//  }
// },
// type : "like",
// },{   user:{
//     "avatar": {
//        "url": '/images/profilePic.jpg'
//     },
//     "verified": false,
//     "name":'Cupcat nft'
 
// },
// created_at:"+02023065",
// nft:{
//  "name": 'dog bone',
//  "owner": {
//     "username": "antonio banderas",
//      "avatar": {
//         "url": '/images/avatar.png'
//      },
//     "verified": false
//  }
// },
// type : "like",
// }