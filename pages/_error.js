import { Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Error({ statusCode }) {
    return (
        <div className={"error"}>
            <Container>
                <Row>
                    <Col md={{span:6, offset:3}}>
                    <h1 id="company-name">valleUS</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{fontSoze: '72px', textAlign: 'center'}} >An Error Occured</Card.Title>
                            <Card.Text >
                                <h3 style={{fontSize: '30px', textAlign: 'center'}}>{statusCode? `Error ${statusCode} occurred on server`: 'An error occurred on client'}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error