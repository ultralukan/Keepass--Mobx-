const NamePass = (props) => {
  return (
    <div className='bg-info h-50'>
    <ul>
    <h1>Ваша база:</h1>
        {props.items.map(el => (
            <li key={el[2]}>
                <div><b>Название :</b> {el[0]} <b>Пароль:</b> {el[1]}
                </div> 
                <input className='btn btn-danger pl-10' type='button' value='Delete' onClick = {()=>props.deleteItem(el)}/>
            </li>
            )  
        )}
    </ul>
    </div>
  )
}


export default NamePass;
