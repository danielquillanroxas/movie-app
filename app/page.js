"use client"
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import 'primereact/resources/themes/viva-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export default function Home() {
  return (
    <div>
      <Button label='Button' className='m-5'></Button>
    </div>
  )
}
