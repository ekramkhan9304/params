import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserLIst = () => {
    const params = useParams();
    const { id } = params;
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://647436057de100807b1a7a5b.mockapi.io/livingheightsdata/${id}`, {

        }).then((res) => {
            setApiData(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])
    console.log(apiData.data)
    return (
        <>
            <h1>user {id} page list</h1>
        </>
    )
}

export default UserLIst
