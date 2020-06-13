import Movie from './Movie.js'

export default {
  template: `
    <div>
      <form>
      <h1>ADD MOVIE</h1>
        <label for="title">Title</label>
        
        <input id="title" v-model="title" type="text">
        <br>
       
        <br>
        <label for="rating">Rating</label>
        1
        <input id="rating" type="range" v-model="rating" min="1" max="5">
        5
        <span class="current-rating">{{"("+rating+")"}}</span>
        <br>
        <br>
        <label for="genre">Genre</label>
        <select id="genre" v-model="genre">
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </select>
        
        <br>
        <br>
        <label for="image">Image-link</label>
        <input id="image" v-model="image" type="text"><br>
       
        <br>
        <label for="description">Description</label><br>
        <br>
        <textarea id="description" v-model="desc"></textarea><br>
        <br>

        <button @click.prevent="clearForm">Clear</button>
        <button @click.prevent="addMovie">Add</button>
        <br>
        <br>
        

    
      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      rating: 3,
      genre: 'Drama',
      desc: '',
      image: ''
    }
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault()

      let movie = new Movie(
        this.title, 
        this.rating,
        this.genre,
        this.desc,
        this.image 
        );
        if (movie.title!==''){

          console.log(movie);

          this.$emit('newMovie', movie)
         
          this.clearForm()
         
        }else{
          console.log("Inter movie title")
          alert("Please enter your movie title");
          
        }
       
    
    },
   
   
    
    clearForm() {
      this.title = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
      this.image = ''
      
   
    } ,
    
  }
  
    
}