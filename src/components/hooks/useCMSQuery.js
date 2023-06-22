import useFetch from "components/hooks/useFetch";

const PROJECT_ID = "tpz2b2zm";
const DATASET = "production";

export const useCMSQuery = (query) => {
  const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

  return useFetch(url);
};