import React from "react";

export default function InfoTable({ movie }) {
    return (
      <table className="movieInfo">
        <thead>
          <tr>
            <td className="right bold">Year:</td>
            <td>{movie.year}</td>
          </tr>
          <tr>
            <td className="right bold">Plot:</td>
            <td>{movie.plot}</td>
          </tr>
          <tr>
            <td className="right bold">Directors:</td>
            <td>{movie.directors}</td>
          </tr>
          <tr>
            <td className="right bold">Genres:</td>
            <td>{movie.genres}</td>
          </tr>
          
          <tr>
            <td className="right bold">Cast:</td>
            <td>{movie.cast}</td>
          </tr>
        </thead>
      </table>
    );
  }