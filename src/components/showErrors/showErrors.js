import React from 'react';

export const ShowErrors = ({ error }) => {
  if (!error) return null;
  return <div>Ошибка!</div>
}