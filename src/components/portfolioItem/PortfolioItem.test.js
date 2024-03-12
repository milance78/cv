import { render } from '@testing-library/react';
import PortfolioItem from './PortfolioItem';

const element = {
    photo: 'test',
    title: 'test',
    text: 'test',
}

test('component PortfolioItem should render', () => {
    render(<PortfolioItem
        element={element}
        index={123}
        type='test' />);
});