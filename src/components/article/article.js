import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'components/tag';

export const Article = ({ item }) => {
  const {
    title,
    slug,
    createdAt,
    tagList,
    description,
    author: {
      username, image
    }
  } = item;
  const classes = `tag-default tag-pill tag-outline`;
  const prefix = 'tags/';
  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link to={`/profiles/${username}`}>
          <img src={`${image ? image : 'https://dummyimage.com/100x100/abq/fre'}`} alt="" />
        </Link>
        <div className="info">
          <Link className="author" to={`/profiles/${username}`}>
            {username}
          </Link>
          <span className='data'>{createdAt}</span>
        </div>
      </div>
      <Link className="preview-link" to={`articles/${slug}`}>
        <h1 className="">{title}</h1>
      </Link>
      <p>{description}</p>
      <Link className="preview-link" to={`articles/${slug}`}>
        Читать далее...
      </Link>
      <ul className='tag-list'>
        {tagList && tagList.map(tag => (
          <Tag item={tag} key={tag} urlPrefix={prefix} classes={classes} />
        ))}
      </ul>
    </div>
  )
}


