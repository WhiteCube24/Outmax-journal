import { Container } from 'react-bootstrap';
import ErrorBoundary from '../components/shared/errorBoundary/ErrorBoundary';

const MainPage = () => {
    return (
       
            <ErrorBoundary>
                <Container>
                <h1>ХОЧУ СКАЗАТЬ ЭТОМУ ЁБАНОМУ ОБЭМЕ</h1>
                </Container>
            </ErrorBoundary>
        
        
    )
}

export default MainPage;