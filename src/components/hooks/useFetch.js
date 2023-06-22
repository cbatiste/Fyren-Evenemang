import {useEffect, useState} from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [url]);

  return data;
};