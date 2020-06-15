import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import URLS from "../Settings";
import MoviePage from "./MoviePage";

export function SearchPage({ searchString }) {
    const [movie, setMovie] = useState();

    useEffect(() => {
        facade.fetchData(URLS.Search(searchString)).then(
            (data) => {
                console.log(data);
                setMovie(data);
            }
        );
    }, [searchString]);

    return (
        <div>
          <br />
          <h2>Search Result</h2>
          {movie !== undefined && <MoviePage movie={movie} />}
        </div>
      );
}