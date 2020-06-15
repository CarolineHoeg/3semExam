import React from "react";

export default function MoviePage({movie}) {
    return (
        <div>
            <p>Title</p>
            <p>{movie.title}</p>
        </div>
    );
}