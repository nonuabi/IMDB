const listFav = document.getElementById("listFav");

function handleFavMovies() {
  favMoviesInfo = JSON.parse(localStorage.getItem("favourite movies"));
  console.log(favMoviesInfo);
  Array.from(favMoviesInfo).forEach((element) => {
    console.log(element.Title);
    listFav.innerHTML += `
    <li class="card mb-3" style="max-width: 540px;">
      <div   class="row g-0">
        <div class="col-md-4">
          <img src=${element.Poster}  class="img-fluid rounded-start" alt="movie_poster"></img>
        </div>
        <div  class="col-md-8">
          <div class="card-body">
            <h2 class="card-title" >${element.Title}</h2>
            <p class="card-text"><b>Actors :</b> ${element.Actors}</p>
            <p class="card-text"><b>Year :</b> ${element.Year}</p>
            <p class="card-text"><b>IMDB Rating :</b> ${element.imdbRating}</p>
          </div>
          <div class="card-body" id="remove_btn">
            <button class="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </li>
    `;
  });
}
handleFavMovies();
