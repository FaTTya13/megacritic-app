import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from '../../../components/CategoryCard/CategoryCard';
import RootPage from '../../_Root/Root';

const MainPage = () => {
  return (
    <RootPage>
    <Container className='my-5' fluid>
      <Row className='my-3'>
        <Col sm={true}>
        <CategoryCard category="games" />
        </Col>
        <Col sm={true}>
        <CategoryCard category="movies" />
        </Col>
      </Row>
      <Row>
        <Col sm={true}>
        <CategoryCard category="tv" />
        </Col>
        <Col sm={true}>
        <CategoryCard />
        </Col>
      </Row>
    </Container>
    </RootPage>
  );
}

export default MainPage;