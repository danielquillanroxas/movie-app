import { getMovies } from '@/utils/requests';
import React from 'react'
import Card from '@/app/components/Card';
import SearchResults from '@/app/components/SearchResults';

async function SearchPage({searchParams}) {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText)
  return (
    <SearchResults searchText={searchText} movies={movies}/>
  )
}

export default SearchPage
