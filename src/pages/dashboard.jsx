import React, { useEffect, useState } from 'react';
import Frame from "../components/frame";
import Typography from '@material-ui/core/Typography';
import Loader from '../components/Loader';

const DashBoardPage = (props) => {

    const [loadState, setLoadState] = useState({
        error: false,
        loading: true,
        data: null,
        status: "Starting process",
      });

    const intervalDelay = 2000;

    const query = decodeURIComponent(props.location.search.slice(1));

    useEffect(() => {
        const apiUrl = `https://185.227.111.113:80/?query=` + props.location.search.slice(1);
        const timeout = setTimeout(function fetchData() {
            fetch(apiUrl)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res.code)
                    if (res.code === 200) {
                        setLoadState({ error: false, loading: false, status:res['status'], data: res['result'] });
                    } else if (res.code === 206) {
                        setLoadState({ error: false, loading: false, status:res['status'], data: res['result'] }); // TODO: Popup
                    } else if (res.code === 202){
                        setLoadState({ error: false, loading: true, status:res['status'], data: null}); 
                        setTimeout(fetchData, intervalDelay)
                    } else {
                        setLoadState({ error: true, loading: true, status:res['status'], data: null});
                    }
                })
                .catch(error => {setLoadState({ error: true, loading: true, status:"API does not respond", data: null})});
        }, intervalDelay);
        
        return()=>clearTimeout(timeout)
    }, [setLoadState, props.location.search]);

    return (
        <Frame withSideBar={true}>
            <Typography color="textSecondary">
                Query : {query}
            </Typography>
            <Loader  query={query} loading={loadState.loading} data={loadState.data} status={loadState.status} error={loadState.error}/>
        </Frame>
    );
}

export default DashBoardPage;