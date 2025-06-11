import movies from "../data/movies";

function Content() {
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Peliculas</h2>
      <div className="row">
        {movies.slice(0, 300).map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 movie-card-hover">
              <img
                src={movie.poster_path}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
              <p className="card-text">año: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
