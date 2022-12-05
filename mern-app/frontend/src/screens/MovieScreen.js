import React from 'react'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'

const MovieScreen = () => {

  const movie = movies.find((m) => m._id === match.params.id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      <Row>
        <Col md = "6">
          <Image src="movie.image" alt={movie.title} fluid />
        </Col>
        <Col md = "3">
          <ListGroup variant = 'flush'>
            <ListGroupItem>
              <h3>{movie.title}</h3>
            </ListGroupItem>
            <ListGroupItem>
              value = {movie.numstars}
              text = {`${movie.numstars} reviews`}
            </ListGroupItem>
            <ListGroupItem>
              Price: ${movie.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: {movie.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md = "3">
          <Card>
            <ListGroupItem>
              <Row>
                <Col>Price: </Col>
                <Col><strong>${movie.price}</strong></Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>Status: </Col>
                <Col>{movie.countinstock > 0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Button className='btn-block' type='button' disabled={movie.countinstock === 0}>Add To Cart</Button>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default MovieScreen