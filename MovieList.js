import MovieCard from './MovieCard.js'

export default {
  components: {
    MovieCard
  },
  props: ['movies'],
  template: `
    <div>
    <br>
    <MovieCard 
        v-for="(movie, i) of movies"
        :key="movie.title + i"
        :movie="movie" 
       
        @removeMovie="onRemoveMovie"
        
        
        /> 
        
    </div>
    
  `,
  methods: {
    onRemoveMovie(movie) {
      let movieIndex = this.movies.indexOf(movie)
      this.movies.splice(movieIndex, 1)
    // localStorage.removeItem('movie.indexOf(movie)',JSON.stringify(this.movies.indexOf(movie)))
      
       

      
 

  }
 
}

  
  
}
