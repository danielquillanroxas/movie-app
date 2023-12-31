"use client";

import React, { useState, useEffect } from 'react';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/viva-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Carousel } from 'primereact/carousel';
import { getPopularMovies, getTrendingMovies, getUpcomingMovies } from '@/utils/requests';
import Card from './components/Card';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const trendingMovies = await getTrendingMovies();
      const popularMovies = await getPopularMovies();
      const upcomingMovies = await getUpcomingMovies();

      setMovies(trendingMovies);
      setMovies1(popularMovies);
      setMovies2(upcomingMovies);
    }

    fetchData();
  }, []);

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

  return (
    <div>
      <h2>Top Trending Movies</h2>
      <Carousel
        value={movies}
        itemTemplate={(movie) => <Card movie={movie} />}
        responsiveOptions={responsiveOptions}
        numVisible={4}
        numScroll={3}
        circular
        autoplayInterval={3000} />

      <h2>Popular Movies</h2>
      <Carousel
        value={movies1}
        itemTemplate={(movie) => <Card movie={movie} />}
        responsiveOptions={responsiveOptions}
        numVisible={4}
        numScroll={3}
        circular
        autoplayInterval={3000} />

      <h2>Upcoming Movies</h2>
      <Carousel
        value={movies2}
        itemTemplate={(movie) => <Card movie={movie} />}
        responsiveOptions={responsiveOptions}
        numVisible={4}
        numScroll={3}
        circular
        autoplayInterval={3000} />
    </div>
  );
}
