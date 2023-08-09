"use client";
import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText) {
            router.push(`/movies/search?query=${searchText}`)
        }
    }

    const items = [
        {
            template: () => {
                return (
                    <form onSubmit={e => handleSubmit(e)} className='flex'>
                        <InputText
                            placeholder="Search"
                            type="text"
                            className="w-full"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
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
