import React from 'react';

import { CmsSimplePage } from '../types/pages';

interface Props {
  pageData: CmsSimplePage;
}

const SimplePage: React.FC<Props> = ({pageData}) => {
  return (
    <div>
      <p>{pageData.pageTitle}</p>
      <p>{pageData.content.title}</p>
      <p>{pageData.content.body}</p>
    </div>
  )
}

export default SimplePage;