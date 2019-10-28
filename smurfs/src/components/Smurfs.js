import React, {useContext} from 'react';
import {SmurfContext} from '../context';
import Smurf from './Smurf';
function Smurfs(props) {
  const smufee = useContext(SmurfContext);
  return (
    <div>
      {smufee.smurfs.map( (smurf,index) => {
         return <Smurf key={index} smurf={smurf}/>
      })}
    </div>
  )
}

export default Smurfs