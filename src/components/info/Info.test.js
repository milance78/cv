import { render } from '@testing-library/react';
import Info from './Info';

test('component Info should render', () => {
    render(<Info description='test'/>);
});