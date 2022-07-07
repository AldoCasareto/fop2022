import React, { useState } from 'react';

const Toggable = (props) => {
  const [expand, setExpand] = useState(false);

  const visibility = expand ? { display: '' } : { display: 'none' };

  return (
    <div>
      <div>
        <button style={visibility} onClick={() => setExpand(!expand)}>
          {props.label}
        </button>
      </div>
      <div style={visibility}>
        {props.children}
        <button onClick={() => setExpand(!expand)}>cancel</button>
      </div>
    </div>
  );
};

export default Toggable;
