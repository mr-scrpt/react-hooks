import React, { useEffect, useState } from 'react';
import { Feeds } from 'components/feeds';
import { useFetch } from 'hooks/useFetch';
import { Pagination } from 'components/pagination';
import { getPaginators } from 'helpers/getPaginators';
import { limit } from 'constant';
import { stringify } from 'query-string';

const GlobalFeed = ({ location: { search }, match: { url } }) => {
  const { currentPage, offset } = getPaginators(search);
  const [articlesList, setArticlesList] = useState([]);
  const stingifyParams = stringify({
    limit, offset
  })
  const apiUrl = `articles?${stingifyParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);


  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage])


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
            {!isLoading && articlesList && response && (
              <>
                <Feeds articles={articlesList} />
                <Pagination total={response.articlesCount} limit={limit} url={url} currentPage={currentPage} />
              </>
            )}
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