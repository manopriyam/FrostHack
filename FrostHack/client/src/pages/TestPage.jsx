// importing from libraries
import React from 'react';


// importing from files
import Layout from '../components/layout/Layout.jsx';
import SERVER_URL from '../config.jsx';


// homepage component
const HomePage = () => {
    console.log(`Client Running on ${import.meta.env.VITE_MODE} Mode at Port ${import.meta.env.VITE_PORT}`);
    console.log(`Server URL: ${SERVER_URL}`);
    return (
        <Layout title="Test"/>
    )
}

export default HomePage