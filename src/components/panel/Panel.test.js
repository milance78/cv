import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Panel from './Panel';

const MockedPanel = () => <BrowserRouter>
        <Panel
         panelVisibility='true' 
         setPanelVisibility= {jest.fn}/>
    </BrowserRouter>


test('component Panel should render', () => {
    render(<MockedPanel />);
});