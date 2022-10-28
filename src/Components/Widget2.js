import React, {useState} from 'react'

import '../css/Widget2.css'


const input= <i className="icon1 fa-brands fa-twitter"></i>;



function Widget2() {

    const [ items, setItems ] = useState([]);


    const addtolist = () => {
        setItems([...items, 
            {   id: items.length,
                tag: input
            }]);
        

    }

    const delList = () => {

        setItems([]);
      
    
    }

  return (
    <div className ="container">
        <h2>Twitter Icons</h2>

        <div className ="row">
            <div className ="widget1 col-md-2 p-2 border">
                <i className="icon1 fa-brands fa-twitter"></i>
                <button onClick={addtolist} type="button" className="btn btn-outline-success btn-sm">Add</button>
                <button onClick={delList} type="button" className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
            <div className = "col-md-10">    
            <ul className="list-group list-group-horizontal">
            {items.map(item => <li key = {item.id}className='list-group-item'>{item.tag}</li>)}
                    
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Widget2