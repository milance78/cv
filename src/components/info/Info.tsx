import React from 'react';
import './Info.scss';

const Info: React.FC<{description: string}>= ({description}) => {
  return (
    <div>
      {description}
    </div>
  )
}

export default Info