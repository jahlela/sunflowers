import React from 'react'

function EndingList({ending, data}) {

  
  return (
      <div>
          <li>{data[ending].title}</li>
      </div>
  );
}

export default EndingList