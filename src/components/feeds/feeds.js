import { Article } from 'components/article';
import { useFetch } from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';

export const Feeds = ({ articles }) => {
  return (
    <>
      {articles.map((article, idx) => (
        <Article item={article} key={idx} />
      ))}
    </>
  )
}