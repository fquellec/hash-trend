import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'user_name',
    headerName: 'Account',
    //flex:1,
    width: 130,
    editable: false,
  },
  {
    field: 'followers',
    headerName: 'Followers',
    type: 'number',
    //flex:1,
    width: 140,
    editable: false,
  },
  {
    field: 'likes',
    headerName: 'Likes',
    type: 'number',
    //flex:1,
    width: 110,
    editable: false,
  },
  {
    field: 'retweets',
    headerName: 'Retweets',
    type: 'number',
    //flex:1,
    width: 140,
    editable: false,
  },
  {
    field: 'nb_tweets',
    headerName: 'Tweets',
    type: 'number',
    //flex:1,
    width: 130,
    editable: false,
  },
  
];

export default function DataGridDemo(props) {
  let rows = props.data.map(obj=> ({ ...obj, id: obj.user_name }))
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        disableColumnFilter
      />
    </div>
  );
}