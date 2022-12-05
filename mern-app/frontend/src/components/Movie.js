import React from "react"
import { Card } from "react-bootstrap"
//import Rating from './Rating'
import NumStars from './NumStars'

const Movie = ({movie}) => {
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <a href={`/movie/${movie._id}`}>
        <Card.Img src={movie.imageurl} variant='top' />
      </a>
      <Card.Body>
        <a href={`/movie/${movie._id}`}>
          <Card.Title as='div'>
            <strong>{movie.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <NumStars
          value = {movie.numstars}
          text = {`${movie.numberreviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${movie.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie