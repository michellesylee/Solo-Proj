import React, { Component, useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import VendorView from './VendorView.jsx';
import SignIn from './SignIn.jsx';
import BottomNav from './BottomNav.jsx';
import PoppyContext from '../store/context.js';


function Home() {
  const poppyContext = useContext(PoppyContext);
  const updateIsAuth = poppyContext.updateIsAuth;

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState([]);
  
   useEffect(() => {
   const getVendors = async () => {
    setLoading(true);
    await fetch('/api')
      .then(res => res.json())
      .then((vendors) => {
        setVendors(vendors)
      })
      .catch(err => console.log('useEffect: get vendors: ERROR: ', err))
      setLoading(false)
    }
    getVendors();
    },[])

   const vv = vendors.map((vendor, index) => <VendorView key={index} info={vendor}/>)
    return (
      <div className="viewbody">
        {loading ? <div> Loading </div> : vv}
      </div>
    );
  };
  

  export default Home;