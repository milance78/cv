import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Address from './Address';

const MockedAddress = () => <BrowserRouter>
    <Address />
</BrowserRouter>

test('component Address should render', () => {
    render(<MockedAddress />);
});