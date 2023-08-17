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
        // ... same logic
    }

    return (
        <div>
            <div className="flex grid justify-content-between my-3 mx-3">
                <div className="col-12 md:col-6 lg:col-6 p-text-center p-md-8">
                    <h2>Top Search Results for &quot;{searchText}&quot;</h2>
                </div>
                <div className="col-12 md:col-2 lg:col-2 justify-content-end">
                    <Dropdown
                        onChange={(e) => filterMovies(e.target.value)}
                        options={sortby}
                        optionLabel="name"
                        placeholder="Sort By"
                        className="w-full"
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
