import React, { useMemo, useState, useEffect, useCallback } from 'react';
// import React, { useMemo, useMemo, useCallback, useEffect, useState } from 'react';

const Server = React.createContext();
const API = 'http://www.omdbapi.com/?i=';
const ID = 'tt3896198';
const KEY = '&apikey=b64a56c4'; 

export function ServerProvider(props) {

    const[ data, setData ] = useState([]);
    const[ movie, setMovie ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API}${ID}${KEY}&s=batman`);
      const info = await data.json();
      setData(info.Search);
    };
    fetchData();
  }, [ setData ]);

  const page = useCallback((e) => {
    const fetchImage = async () => {
      const data = await fetch(`${API}${e}${KEY}`);
      const info = await data.json();
      setMovie(info);
    };
    fetchImage();
  },[]);

  const value = useMemo(() => {
    return ({
      movie,
      data,
      page
    })
  }, [ movie, data, page ]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}