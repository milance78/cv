import { render } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const MockedHome = () => <BrowserRouter>
        <Home />
    </BrowserRouter>


test('component Home should render', () => {
    render(<MockedHome />);
});