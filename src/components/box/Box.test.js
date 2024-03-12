import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { render } from '@testing-library/react';
import Box from './Box';

const panelVisibility = { boxClass: 'box', panelClass: 'panel' }

const MockedBox = () => <Provider store={store}>
    <BrowserRouter>
        <Box panelVisibility={panelVisibility} />
    </BrowserRouter>
</Provider>

test('component Address should render', () => {
    render(<MockedBox />);
});