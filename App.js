import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'

export default {
  components: {
    AddMovie,
    MovieList
  },
  template: `
    <div id="app">
      
      <AddMovie @newMovie="onNewMovie"></AddMovie>
      <br>
      <MovieList :movies="movies" />
     
    </div>
  `,
  data() {
    
    return {
      movies: JSON.parse(localStorage.getItem("movie"))|| []
      
     
    }
  
  },
  methods: {
    onNewMovie(movie) {
      this.movies.push(movie)
      this.movies.sort((a,b)=>a.rating<b.rating?1:-1)
      console.log(this.movies)
      localStorage.setItem('movie',JSON.stringify(this.movies))
     
     console.log(localStorage.getItem("movie"))
    }
   
  },
  
 
}
