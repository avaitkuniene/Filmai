function searchMovie() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = 'bbda002b';
    const apiUrl = 'https://www.omdbapi.com/?t=' + searchInput + '&apikey=' + apiKey;
    const apiPicUrl = 'http://img.omdbapi.com/?t=' + searchInput + '&apikey=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovieInfo(data);
        })
        
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayMovieInfo(movie) {
    const movieInfo = document.getElementById('movieInfo');
    movieInfo.innerHTML = '';

    if (movie.Response === 'False') {
        movieInfo.innerHTML = movie.Error;
        return;
    }

    let card = document.createElement('div');
    card.id = 'card';
    card.style.backgroundColor = 'black';
    card.style.border = '5px solid white';

    let cardBody = document.createElement('div');
    cardBody.id = 'card-body';

    let movieTitle = document.createElement('h5');
    movieTitle.style.color = 'white';
    movieTitle.style.justifyItems = 'center';
    movieTitle.style.padding = '10px';
    movieTitle.style.textTransform = "uppercase";
    movieTitle.textContent = 'Pavadinimas: ' + movie.Title;

    let movieDuration = document.createElement('li');
    movieDuration.style.color = 'white';
    movieDuration.textContent = 'Filmo trukmė: ' + movie.Runtime;

    let movieDirector = document.createElement('li');
    movieDirector.style.color = 'white';
    movieDirector.textContent = 'Filmo režisierius: ' + movie.Director;

    let actors = document.createElement('li');
    actors.style.color = 'white';
    actors.textContent = 'Aktoriai: ' + movie.Actors;

    let rating = document.createElement('li');
    rating.style.color = 'white';
    rating.textContent = 'IMDB reitingas: ' + movie.imdbRating;

    card.appendChild(cardBody);
    cardBody.appendChild(movieTitle);
    cardBody.appendChild(movieDuration);
    cardBody.appendChild(movieDirector);
    cardBody.appendChild(actors);
    cardBody.appendChild(rating);
    movieInfo.appendChild(card);
}