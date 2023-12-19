
import React, { useState } from 'react'

const UserData = () => {

        const [firstName, setfirstName] = useState('');
        const [printValue, setPrintValue] = useState(false);

        const inputHandler = (e) => {
            setPrintValue(false);
            setfirstName(e.target.value)
        }

        const addBtnHandler = () => {
            setPrintValue(true);
        }

  return (
    <div>

    
          {
            printValue ? <div style={{margin:"20px"}}> {firstName} </div> : <div style={{margin:"20px"}}>  </div> 
          }


      <input type="text" value={firstName} onChange={inputHandler} /><br />

      <button onClick={addBtnHandler}>Add</button>

    </div>
  )
}

export default UserData;
