"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Header() {
    const items = [
        {
            label: 'Genres',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Horror'
                },
                {
                    label: 'Comedy',
                },
                {
                    label: 'Romance',
                },
                {
                    label: 'Sci-Fi',
                },
            ]
        },
        {
            label: 'Sort',
            icon: 'pi pi-sort',
            items: [
                {
                    label: 'Ratings',
                },
                {
                    label: 'Popularity',
                },
                {
                    label: 'Alphabetical (A-Z)',
                },
                {
                    label: 'Alphabetical (Z-A)',
                },

            ]
        },
        {
            label: 'Favorites',
            icon: 'pi pi-star',
            command: () => { window.location.reload(); }
        },
        {
            template: () => {
                return <div className='flex'><InputText placeholder="Search" type="text" className="w-full" /><Button icon='pi pi-search'></Button></div>;
            }
        }


    ];

    const start = <a className="mr-2" href='/' style={{ fontSize: '2em', fontWeight: 'bold', textDecoration: 'none', color: 'inherit'}}>Movies DB</a>;

    return (
        <div className="card">
            <Menubar model={items} start={start}/>
        </div>
  )
}
