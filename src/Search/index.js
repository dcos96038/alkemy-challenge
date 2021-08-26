import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { searchService } from "../services";

const Search = () => {
  const [results, setResults] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const { searchString } = useParams();

  useEffect(() => {
    async function getSearch(searchString) {
      const response = await searchService(searchString);
      if (response.data.results) {
        setResults(response.data.results);
        setError(null);
        setLoading(false);
      }
      if (response.data.error) {
        setError(response.data.error);
        setResults(null);
        setLoading(false);
      }
    }
    getSearch(searchString);
  }, [searchString]);

  useEffect(() => {
    setLoading(true);
  }, [searchString]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="spinner-border text-primary"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {results ? (
        results.map((hero) => {
          return (
            <div
              className="col-md-4 my-4 d-flex justify-content-center"
              key={hero.id}
            >
              <Card hero={hero} />
            </div>
          );
        })
      ) : (
        <h2 className="text-white text-center">{error}</h2>
      )}
    </div>
  );
};

export default Search;
