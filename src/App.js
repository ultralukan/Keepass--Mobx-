import React, { useState } from 'react';
import { observer } from 'mobx-react';
import password from './stores/password'
import NamePass from './NamePass';
import PswGenerator from './PwsGenerator';
import './styles.css'

const App = observer(() => {

  let [pass, setPass] = useState(new password())
  const [passList, setPassList] = useState([])

  const handleChangeName = (e) => {
    pass.setName(e.target.value)
  }

  const handleChangePassword= (e) => {
    pass.setPassword(e.target.value)
  }
  const handleOnClick = () => {
    let id = Date.now()
    setPassList(prevPassList => [...passList, [pass.name, pass.password, id]])
    setPass(new password())
  }
  const handleDelete = (item) => {
    setPassList(passList.filter(el => el !== item))
  }

  return (
    <div id='main' className="flexbox-container ">
      <h1 id='header' className='bg-secondary text-center bg-info m-auto mb-5 mt-1'>Хранилище паролей</h1>
      <PswGenerator/>
      <form className='text-center'>
          <label className='d-block mt-3 text-light'>
            Введите название: <input type = 'text' onChange={handleChangeName} value={pass.name}/>
          </label>
          <label className='d-block mt-3 mb-3 text-light'>
            Введите пароль: <input type = 'text' onChange={handleChangePassword} value={pass.password}/>
          </label>
          <input className="btn btn-light mb-5" type = 'button' onClick={handleOnClick} value='Добавить'/>
      </form>
      <NamePass items={passList} deleteItem={handleDelete}/>
    </div>
  );
}
)

export default App;
