
const moviesUL = document.getElementById('moviesUL')
const movieTitleHeading = document.getElementById('movieTitleHeading')
const movieDirectorHeading = document.getElementById('movieDirectorHeading')
const movieReleaseHeading = document.getElementById('movieReleaseHeading')
const movieRatedHeading = document.getElementById('movieRatedHeading')

function showDetails(imdbID) {

    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=a4543b8d`
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        movieTitleHeading.innerHTML = result.Title 
        movieDirectorHeading.innerHTML = result.Director
        movieReleaseHeading.innerHTML = result.Released
        movieRatedHeading.innerHTML = result.Rated
    })
    request.open('GET', url)
    request.send() 
}
function getAllMovies() {

    const url = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=a4543b8d'
    let request = new XMLHttpRequest() 
    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        const movies = result.Search
        
        const movieItems = movies.map(function(movie) {
            return `<li>
                <img src = ${movie.Poster} />
                <a href = "#" onclick = "showDetails('${movie.imdbID}')">${movie.Title}</a>
            </li>`
        })

        moviesUL.innerHTML = movieItems.join('')
    })
    request.open('GET', url)
    request.send() 

}

getAllMovies() 

