import { Article } from 'components/article';
import React from 'react';

export const Feeds = ({ articles }) => {
  return (
    <>
      {articles.map((article, idx) => (
        <Article item={article} key={idx} />
      ))}
    </>
  )
}