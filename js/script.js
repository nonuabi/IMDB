const api_url = "https://www.omdbapi.com/?apikey=210b0060";
var dataObjects = [];
var favMoviesID = [];
var favMoviesInfo = [];

const searchBar = document.getElementById("searchBar");
searchDownbar = document.getElementById("searchRes");
function inputHandle(e) {
  let result = e.target.value;
  console.log("search result : ", result);
  handleMoiveTitle(result);
}
searchBar.addEventListener("input", inputHandle);

async function handleMoiveTitle(result) {
  searchDownbar.innerHTML = "";
  if (result.length > 2) {
    const res = await fetch(api_url + `&t=${result}`);
    let data = await res.json();
    console.log(data);
    if (data.Response === "False") {
      console.log("not found");
      return;
    } else {
      searchDownbar.innerHTML = `
      <div class="poster_container container">
        <img src=${data.Poster} alt="movie_poster"></img>
      </div>
        <div class="card-body">
          <h2 class="card-title" >${data.Title}</h2>
          <p class="card-text" ><b>Actors :</b> ${data.Actors}</p>
          <p class="card-text"><b>Year :</b> ${data.Year}</p>
          <p class="card-text"><b>IMDB Rating :</b> ${data.imdbRating}</p>
          <button id="fav_btn" class="btn btn-outline-danger" type="submit" >
             My Favourite Movie
          </button>
        </div>
      `;
      document
        .getElementById("fav_btn")
        .addEventListener("click", (e) => handleFavBtn(e, data));
    }
  }
}

function handleFavBtn(e, data) {
  e.preventDefault();
  searchDownbar.innerHTML = "";
  console.log("before :: ", favMoviesInfo);
  favMoviesInfo = JSON.parse(localStorage.getItem("favourite movies"));
  favMoviesInfo.push(data);
  console.log("after :: ", favMoviesInfo);
  localStorage.setItem("favourite movies", JSON.stringify(favMoviesInfo));
}

// {
//   Actors, Awards;
//   Director, Genre, Language;
//   Plot;
//   Poster;
//   Production;
//   Released;
//   Title;
//   Writer;
//   Year;
//   imdbRating;
// }

// handleData();
