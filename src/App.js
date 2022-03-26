import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ListStudent from './components/student/ListStudent';
import FormStudent from './components/student/FormStudent';


function App() {
  const [user, setUser] = useState({
     value:{
      'name': "",
      'email': "",
      'phone': ""
  }    
  });
  const [list, setList] = useState({
    listData: [],
    countStudent: ''
  });
  useEffect(() => {
    setUser({
      value: {
        'name': '',
        'email': '',
        'phone': ''
      }
    })
  }, [list])
  console.log('user',user);
  const handleInputChange = (e) => {
    let {name,value} = e.target;
    let newUser = {...user.value,[name]:value};
    setUser({
      value:newUser
    })
   
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let listInput = { ...user.value };
   
    list.listData.push(listInput);
    let listUpdate = [...list.listData];
    setList({
      listData: listUpdate,
      countStudent: listUpdate.length
    })
  };


  return (
    <>
    <div className='form-list-student'>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name: </label>
          <input className='name' type="text" name="name" value={user.value.name} required onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label>Email: </label>
          <input className='email' type="text" name="email" value={user.value.email} required onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label>Phone: </label>
          <input className='phone' type="number" name="phone" value={user.value.phone} required  onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className='count'>Sỉ Số: {list.countStudent}</div>
      <div className="list-student">
        <ListStudent listData={list.listData}/>
      </div>
    </div>
    </>
  );
}

export default App;