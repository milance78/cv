
import { render } from '@testing-library/react';
import AddSkills from './AddSkills';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const MockedAddSkills = () => <Provider store={store}>
    <AddSkills />
</Provider>

test('component AddSkills should render', () => {
    render(<MockedAddSkills />);
});