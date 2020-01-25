import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocalStorage } from 'hooks/useLocalStorage';
export const useFetch = url => {
  const baseURL = 'https://conduit.productionready.io/api/';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');
  const doFetch = useCallback(async (options = {}) => {
    setOptions(options);
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) return;



    (async () => {
      try {

        const requestOptins = {
          ...options, ...{
            headers: {
              authorization: token ? `Token ${token}` : ''
            }
          }
        }

        const res = await axios(`${baseURL}${url}`, requestOptins);
        setResponse(res.data);
      } catch (error) {
        setError(error.response.data);
      } finally {
        setIsLoading(false)
      }
    })()
  }, [isLoading, options, url, token]);

  return [{
    isLoading, response, error
  }, doFetch]
}

