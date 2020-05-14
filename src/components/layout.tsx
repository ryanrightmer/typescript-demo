import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CmsHomePage, CmsResult } from '../types/pages';
import HomePage from '../templates/homepage';

const Layout: React.FC = () => {

  // We need to figure out the typing for the useState
  const [pageData, setPageData] = useState<CmsResult>();

  let location = useLocation();

  // fetch and store data from https://cpwebapi.brighthealthplan.com/api/v0/content/page?path=${path}
  useEffect(() => {
    const fetchData = async () => {
      var response = await axios.get<CmsResult>(`https://localhost:5001/api/v0/content/page?path=${location.pathname}`);
      setPageData(response.data);
    };
 
    fetchData();
  }, [location.pathname]);

  return (
    <>
      {pageData ? <HomePage pageData={pageData.content} /> : null}
    </>
  )
}

export default Layout;