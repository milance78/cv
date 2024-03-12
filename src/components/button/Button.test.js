import { render } from '@testing-library/react';
import Button from './Button';

test('component Button should render', () => {
    render(<Button title={'test'} />);
});