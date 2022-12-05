import React, {useState} from "react"
import { Row, Col } from "react-bootstrap"
import movies from "../movies"
import Movie from "../components/Movie"

const HomeScreen = () => {
  const [movies, setMovies] = useState([])

  return (
    <>
      <h1 className="text-center">The Best Movies</h1>
      <Row>
        {movies.map((movie) => (
          <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
            <Movie movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen