"use client"
import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import { getMovieDetails, getSimilarMovies } from "@/utils/requests";
import { TabView } from "primereact/tabview";
import { TabPanel } from "primereact/tabview";
import { Tag } from "primereact/tag";
import { Carousel } from 'primereact/carousel';
import Card from '@/app/components/Card';

function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const [movieDetails, setMovieDetails] = useState(null);
    const [movies, setMovies] = useState([]);

    const responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    useEffect(() => {
        const fetchData = async () => {
            const details = await getMovieDetails(params.id);
            const similarMovies = await getSimilarMovies(params.id);

            setMovieDetails(details);
            setMovies(similarMovies);
        };

        fetchData();
    }, [params.id]);

    if (!movieDetails) {
      return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <i className="pi pi-spin pi-refresh" style={{ fontSize: '50px' }}></i>
          </div>
      );
    }

    return (
        <div className="my-4 mx-3 flex-1">
            <div className="m-5 p-d-flex p-jc-center p-ai-center" style={{ height: 'auto', textAlign: 'center' }}>
                <img src={IMAGE_BASE_URL + movieDetails.poster_path} alt="" className='mr-2'/>
                <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
            </div>
            <div className="flex-1">
                <TabView>
                    <TabPanel header="Overview" className="flex-wrap">
                        <h4>{movieDetails.title}</h4>
                        <p className="m-0">
                            {movieDetails.overview}
                        </p>
                        {movieDetails.genres && movieDetails.genres.map(genre => {
                            return <Tag className='m-1' key={genre.id}>{genre.name}</Tag>
                        })}
                    </TabPanel>
                    <TabPanel header="Rating">
                        <p className="m-0">
                            <i className="pi pi-star" style={{ marginRight: '5px' }}></i>
                            {movieDetails.vote_average}
                        </p>
                        <p className="m-0">
                            <i className="pi pi-users" style={{ marginRight: '5px' }}></i>
                            Number of votes: {movieDetails.vote_count}
                        </p>
                    </TabPanel>
                    <TabPanel header="Details">
                        <p className="m-1">
                            <i className="pi pi-calendar mr-2"></i>
                            Release date: {movieDetails.release_date}
                        </p>
                        <p className="m-1">
                            <i className="pi pi-question-circle mr-2" ></i>
                            {movieDetails.status}
                        </p>
                        <p className="m-1">
                          <i className='pi pi-language mr-2'></i>
                          {movieDetails.original_language}
                        </p>
                    </TabPanel>
                </TabView>
            </div>
            <div>
              <h2>Similar Movies</h2>
              <Carousel
                value={movies}
                itemTemplate={(movie) => movie && <Card movie={movie} />}
                responsiveOptions={responsiveOptions}
                numVisible={4}
                numScroll={3}
                circular
                autoplayInterval={3000} />
            </div>
        </div>
    );
}

export default MovieDetailsPage;
