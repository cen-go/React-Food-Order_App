import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Failed to send request");
  }
  return resData;
}

function useHttp(url, config, initialData) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsFetching(true);
      try {
        const resData = await sendHttpRequest(url, {...config, body: data});
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsFetching(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    isFetching,
    data,
    error,
    sendRequest,
  };
}

export default useHttp;
