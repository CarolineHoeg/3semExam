import React from "react";
import InfoTable from "../components/InfoTable";

export default function MoviePage({ movie }) {
    return (
        <div>
            <h3>{movie.title}</h3>
            <div className="flex-container">
                <InfoTable movie={movie} />
                <div className="movieposter">
                    <img src={movie.poster} alt={movie.title}></img>
                </div>
            </div>
        </div>
    );
}