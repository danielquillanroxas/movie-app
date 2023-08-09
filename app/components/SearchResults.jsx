"use client"

import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Card from "./Card";

function SearchResults({ searchText, movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    const sortby = [
        { name: 'Release Year', value: 'release_date' },
        { name: 'Popularity', value: 'popularity' },
        { name: 'Ratings', value: 'vote_average' }
    ];

    const filterMovies = (filter) => {
        let sortedMovies = [];
        switch(filter) {
            case "release_date":
                sortedMovies = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                break;

            case "popularity":
                sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
                break;

            case "vote_average":
                sortedMovies = [...movies].sort((a,b) => b.vote_average - a.vote_average);
                break;

            default:
                break;

        }
        setFilteredMovies(sortedMovies);
    }

    return (
        <div>
            <div className="flex justify-content-between my-3 mx-3">
                <h2>Top Search Results for &quot;{searchText}&quot;</h2>
                <div className="col-2">
                    <Dropdown
                        onChange={(e) => filterMovies(e.target.value)}
                        options={sortby}
                        optionLabel="name"
                        placeholder="Sort By"
                        className="w-full md:w-14rem"
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-5 m-5 p-d-flex p-jc-center p-ai-center" >
                {filteredMovies.map((movie) => {
                    return <Card key={movie.id} movie={movie}></Card>
                })}
            </div>
        </div>
    );
}

export default SearchResults;
