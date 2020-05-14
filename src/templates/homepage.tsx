import React from 'react';

import { CmsHomePage } from '../types/pages';

interface Props {
  pageData: CmsHomePage;
}

const HomePage: React.FC<Props> = ({ pageData }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{pageData.pageTitle}</p>
      <p>{pageData.leftHeroText}</p>
      <p>{pageData.rightHeroText}</p>
      <p>{pageData.midPageContentLeft.paragraphText}</p>
      <p>{pageData.midPageContentRight.paragraphText}</p>
    </div>
  )
}

export default HomePage;