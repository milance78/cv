import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { render } from '@testing-library/react';
import Skills from './Skills';

const MockedSkills = () => <Provider store={store}>
    <BrowserRouter>
        <Skills />
    </BrowserRouter>
</Provider>

test('component Address should render', () => {
    render(<MockedSkills />);
});