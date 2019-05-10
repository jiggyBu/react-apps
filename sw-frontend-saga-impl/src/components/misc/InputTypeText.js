import React from 'react'


/**
 * 
 * @param {name}        name        - Name for input name and id 
 * @param {onChangeEnv} onChangeEnv - On change function
 * @param {placeholder} placholder  - Placeholder for input 
 * @param {rqd}         rqd         - Is input required or not
 * @param {grid}        grid        - Grid visibility for parent
 */
const InputTypeText = ({ name, onChangeEv, placeholder, rqd, grid }) => {
    return (
      <div className={`input-field col ${grid ? grid : 's3'}`}>
            <input id={name} placeholder={placeholder} required={`${rqd ? 'required' : ''}`} 
                name={name} type="text" className="validate" onChange={onChangeEv} />
            <label htmlFor={placeholder}></label>
      </div>
    )
}

export default InputTypeText
