import React from "react";

function MovieList({ movies }) {
  return (
    
      <table border="1" style={{border:'none', marginTop:'50px',width:'48%',borderRadius:'5px'}}>
        <thead>
          <tr style={{ backgroundColor: "lightgray"}}>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody >
          {movies.map((data,i) => {
            return (
              <tr key={i}>
                <td>{data.title}</td>

                <td>{data.genre}</td>

                <td>{data.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

  );
}

export default MovieList;
