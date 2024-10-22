import { useEffect, useState } from "react";

function useHttp() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    
  }, []);
}

export default useHttp;