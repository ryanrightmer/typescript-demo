import React, { useEffect, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { CmsHomePage, CmsResult, CmsSimplePage } from '../types/pages';
import HomePage from '../templates/homepage';
import SimplePage from '../templates/simplepage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByPath } from '../store/pages';
import { RootState } from '../store/store';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  let location = useLocation();

  const pageData = useSelector<RootState, CmsResult>(state => state.pages.pages[location.pathname]);

  // fetch and store data from https://cpwebapi.brighthealthplan.com/api/v0/content/page?path=${path}
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchByPath(location.pathname));
    };
 
    fetchData();
  }, [dispatch, location.pathname]);


  let page: ReactElement | null = null;

  if (pageData) {
    switch (pageData.contentType) {
      case "brightPlansHomepage":
        page = <HomePage pageData={pageData.content as CmsHomePage} />
        break;
      case "templateSimplePage":
        page = <SimplePage pageData={pageData.content as CmsSimplePage} />
        break;
    }
  }
  
  return (
    <>
      {page}
    </>
  )
}

export default Layout;