import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { render } from '@testing-library/react';
import Inner from './Inner';

const MockedInner = () => <Provider store={store}>
    <BrowserRouter>
        <Inner />
    </BrowserRouter>
</Provider>

test('component Inner should render', () => {
    render(<MockedInner />);
});