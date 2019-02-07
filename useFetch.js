import usePromise from "@aslan-hooks/use-promise";

const useFetch = url => {
  const fetchCall = async () => {
    const result = await fetch(url);
    return result.json();
  };

  const [loading, result, error, refresh] = usePromise(fetchCall);

  return [loading, result, error, refresh];
};

export default useFetch;
