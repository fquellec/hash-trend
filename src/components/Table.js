import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'user_name',
    headerName: 'Account',
    width: 150,
    editable: false,
  },
  {
    field: 'followers',
    headerName: 'Followers',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'likes',
    headerName: 'Likes',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'retweets',
    headerName: 'Retweets',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'nb_tweets',
    headerName: 'Tweets',
    type: 'number',
    width: 150,
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