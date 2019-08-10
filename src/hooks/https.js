/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log('Sending Http req. url: ' + url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(charData => {
        setIsLoading(false);
        setFetchedData(charData);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);
  return [isLoading, fetchedData];
};
