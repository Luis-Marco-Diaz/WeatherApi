import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsThunk } from '../Store/Slices/Products.Slice'
import { useEffect } from 'react'

const Home = () => {
  const products = useSelector( state => state.products )
  const dispatch = useDispatch()

  useEffect( () => {
      dispatch( getProductsThunk() )
  }, [] )

  return (
      <div>
         
         <Container>
              <Row xs={1} md={2} lg={3} className="py-3">
                  {
                      products.map( data => (
                          
                              <Col className="mb-3" key={ data.id }>
                              <Card>
                                  <Card.Img 
                                  variant="top" 
                                  src={ data.image } 
                                  style={{ height: 200, objectFit: "cover" }}
                                  />
                                  <Card.Body>
                                      <Card.Title>{ data.name }</Card.Title>
                                      <Card.Text>
                                          { data.category }
                                      </Card.Text>
                                      <Button variant="primary">Ver detalle</Button>
                                  </Card.Body>
                              </Card>
                          </Col>
                      ))
                  }
                  
              </Row>
         </Container>
      </div>
  );
}

export default Home;