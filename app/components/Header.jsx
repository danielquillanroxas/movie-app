"use client";
import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import { AutoComplete } from 'primereact/autocomplete';

export default function Header() {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        let query = inputValue;
        if (typeof inputValue === "object" && inputValue.title) {
            query = inputValue.title;
        }

        if (query) {
            router.push(`/movies/search?query=${query}`)
        }
    }

    const fetchSuggestions = async (e) => {
        if(e.query.length > 1) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${e.query}`);
            const data = await response.json();
            setSuggestions(data.results);
        } else {
            setSuggestions([]);
        }
    }

    const items = [
        {
            template: () => {
                return (
                    <form onSubmit={e => handleSubmit(e)} className='flex'>
                        <AutoComplete
                            value={inputValue}
                            suggestions={suggestions}
                            completeMethod={fetchSuggestions}
                            field="title"
                            size={30}
                            placeholder="Search"
                            minLength={1}
                            dropdown={true}
                            onChange={(e) => setInputValue(e.value)}
                        />
                        <Button type="submit" icon='pi pi-search'></Button>
                    </form>
                );
            }
        }
    ];

    const start = <a className="mr-2" href='/' style={{ fontSize: '2em', fontWeight: 'bold', textDecoration: 'none', color: 'inherit'}}>Movies DB</a>;

    return (
        <div className="card">
            <Menubar model={items} start={start}/>
        </div>
    );
}
