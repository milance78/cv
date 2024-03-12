import { render } from '@testing-library/react';
import PhotoBox from './PhotoBox';
import { BrowserRouter } from 'react-router-dom';

const MockedPhotoBox = () => <BrowserRouter>
        <PhotoBox name='test' avatar='test' />
    </BrowserRouter>

test('component PhotoBox should render', () => {
    render(<MockedPhotoBox />);
});