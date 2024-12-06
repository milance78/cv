import React, { useState } from 'react';
import './Inner.scss'
import Box from '../../components/box/Box';
import Panel from '../../components/panel/Panel';

export interface PanelVisibility {
  boxClass: string;
  panelClass: string;
}


const Inner = () => {

  const [panelVisibility, setPanelVisibility] = useState(
    { boxClass: 'box', panelClass: 'panel' }
  );

  return (
    <div className='inner'>
      <Panel
        panelVisibility={panelVisibility}
        setPanelVisibility={setPanelVisibility} />
      <Box panelVisibility={panelVisibility}/>
    </div>
  )
}

export default Inner