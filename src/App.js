
import React from 'react';
import product from './product';
import { Card, Container, Row, Col} from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import product from './product';

const App = () => {
  return(
     <Container>
      <Row>
        <Col>
        <Card>
          <Card.Body>
            <Name name={product.name}/>
            <Price Price={product.Price}/>
            <Description Description={product.description}/>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
  )
}

export default App;
