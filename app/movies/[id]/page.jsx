"use client"
import { getMovieDetails, getSimilarMovies } from "@/utils/requests"
import { TabView } from "primereact/tabview"
import { TabPanel } from "primereact/tabview"


async function MovieDetailsPage({params}) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"
  const movieDetails = await getMovieDetails(params.id)
  const movies = await getSimilarMovies();

  return (
    <div className="my-4 mx-3  flex">
      <div className="m-5">
        <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt=""/>
      </div>
      <div>
      <TabView>
    <TabPanel header="Overview">
        <h4> {movieDetails.title}</h4>
        <p className="m-0">
            {movieDetails.overview}
        </p>
    </TabPanel>
    <TabPanel header="Rating">
        <p className="m-0">
          <i className="pi pi-star" style={{marginRight: '5px'}}></i>
          {movieDetails.vote_average}
        </p>
    </TabPanel>
    <TabPanel header="Details">
        <p className="m-0">
          <i className="pi pi-calendar" style={{marginRight: '5px'}}></i>
            Release date: {movieDetails.release_date}
        </p>
    </TabPanel>
</TabView>
      </div>
        {/* <div>
          <h2>Top Trending Movies</h2>
            <div className="flex flex-wrap">
                {movies.map(movie => {
                return <Card movie={movie}></Card>
                } )}
            </div>

    </div> */}
    </div>
  )
}

export default MovieDetailsPage
