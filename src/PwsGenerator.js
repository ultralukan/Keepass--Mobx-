import pwsGen from "./stores/pwsGen"
import React, { useState } from 'react';
import { observer } from "mobx-react";

const PswGenerator = observer(() => {
    const [genPassw] = useState(new pwsGen())
    const [passlen, setPassLen] = useState(4)
    const handleClickCap = (e) => {
        if (e.target.checked){
            genPassw.setCapLet()
        }
        else{
            genPassw.unsetCapLet()
        }
    }

    const handleClickSpec = (e) => {
        if (e.target.checked){
            genPassw.setSpecLet()
        }
        else{
            genPassw.unsetSpecLet()
        }
    }
        
        const handleChangeRange = (e) =>{
            setPassLen(e.target.value)
        }

    return(
    <div id='generator' className='text-center w-25 min-h-25 mx-auto bg-info'>
        <h3>Генератор</h3>
        <form>
        <div>
        <label>
            Заглавные буквы <input type="checkbox" name="capLet" onChange={handleClickCap}/>
        </label>
        </div>
        <div>
        <label className='ml-2'>
            Специальные символы <input type="checkbox" name="specLet" onChange={handleClickSpec}/>
        </label>
        </div>
        <input type="range" className="form-range w-25" min="4" max="16" id="customRange2" onChange={handleChangeRange} value={passlen}/>
        <p>{passlen}</p>
        <input className='db' type='button' value='Сгенерировать' onClick={() => {genPassw.setPass(passlen)}}/>
        <div>Пароль: <b>{genPassw.password}</b></div>
        </form>
    </div>
    )
}
)

export default PswGenerator