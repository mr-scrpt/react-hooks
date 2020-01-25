import { Article } from 'components/article';
import { useFetch } from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';

export const Feeds = ({ articles }) => {
  const [articlesList, setArticlesList] = useState([])
  const apiUrl = `articles?limit=10&offset=0`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
  useEffect(() => {
    doFetch();
  }, [doFetch])


  useEffect(() => {
    if (!response) return;
    setArticlesList(response.articles);
  }, [response])

  return (
    <>
      {isLoading && <div>Идет загрузка статей...</div>}
      {error && <div>Ошибка</div>}
      {!isLoading && articlesList.map((article, idx) => (
        <Article item={article} key={idx} />
      ))}
    </>
  )
}