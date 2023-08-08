import Link from 'next/link'

function Card({movie}) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"

  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} title={movie.title}></img>

        </div>
      </Link>
    </div>
  )
}

export default Card
