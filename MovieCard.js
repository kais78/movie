export default {
  props: ['movie'],
  template: `
    <div @click="removeMovie" class="movie-card">
      <h3 class="card-title" >{{ movie.title }}</h3>
      <br>
      <img class="movie-image" :src="movie.image" alt="image"/>
      <h3 class="card-rating" >{{ movie.rating }}/5</h3>
      <br>
      <h3 class="card-genre" >{{ movie.genre }}</h3>
      <p>{{ movie.desc }}</p>
      
    </div>
  `,
  methods: {
    removeMovie() {
      this.$emit('removeMovie', this.movie)
    }
  }
}