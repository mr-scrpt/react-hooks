import React, { useEffect, useState } from 'react';
import { Feeds } from 'components/feeds';
import { useFetch } from 'hooks/useFetch';


const GlobalFeed = (props) => {
  const [articlesList, setArticlesList] = useState([]);
  const apiUrl = `articles?limit=10&offset=0`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch])


  useEffect(() => {
    if (!response) return;
    setArticlesList(response.articles);
  }, [response])


  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Место для обмена знаниями</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Идет загрузка статей...</div>}
            {error && <div>Ошибка</div>}
            <Feeds articles={articlesList} />
          </div>
          <div className="col-md-3">
            Популярыне теги
           </div>
        </div>
      </div>
    </div>
  )

}
export default GlobalFeed;