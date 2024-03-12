import { Provider } from 'react-redux';
import store from '../../redux/store';
import { render } from '@testing-library/react';
import TimeLine from './TimeLine';

const MockedTimeLine = () => <Provider store={store}>
        <TimeLine />
</Provider>

test('component Address should render', () => {
    render(<MockedTimeLine />);
});