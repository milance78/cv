import React from 'react';
import './Panel.scss'
import { PanelVisibility } from '../../pages/inner/Inner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../assets/img/Milan.png';
import Navigation from '../navigation/Navigation';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

interface IProps {
  panelVisibility: PanelVisibility;
  setPanelVisibility: React.Dispatch<React.SetStateAction<PanelVisibility>>
}

const Panel: React.FC<IProps> = ({ panelVisibility, setPanelVisibility }) => {

  const clickHandler = () => {
    panelVisibility.panelClass === 'panel'
      ? setPanelVisibility({
        boxClass: 'box box-spread',
        panelClass: 'panel panel-hide',
      })
      : setPanelVisibility({
        boxClass: 'box',
        panelClass: 'panel',
      })
  }

  return (
    <div className={panelVisibility.panelClass}>
      <div className="hamburger"
        onClick={clickHandler}>
        <FontAwesomeIcon icon={faBars} color='white' />
      </div>
      <img src={profilePic} alt="profile" />
      <h1>Milan Pavlović</h1>
      <Navigation />
      <Link to='/'>
        <Button
          title={
            <>
              <FontAwesomeIcon icon={faAngleLeft} color='white' />
              <p>Go back</p>
            </>
          } />
      </Link>
    </div>
  )
}

export default Panel