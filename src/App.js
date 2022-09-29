import React, { useState } from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
      margin: '1rem 3rem 0'
    }
  }
}

function PhoneBookForm({ users, firstName, lastName, phone, handleAddUser, handleInput }) {
  return (
    <form onSubmit={handleAddUser} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={handleInput}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={lastName}
        onChange={handleInput}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={handleInput}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
      />
    </form>
  )
}

function InformationTable({ users }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {users.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)).map((user, index) => {
          return (
            <tr key={index}>
              <td style={style.tableCell}>{user.firstName}</td>
              <td style={style.tableCell}>{user.lastName}</td>
              <td style={style.tableCell}>{user.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

function App(props) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('1234567890');
  const [users, setUsers] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if(name === 'userFirstname') {
      setFirstName(value);
    } else if(name === 'userLastname') {
      setLastName(value);
    } else if(name === 'userPhone') {
      setPhone(value);
    }
  }

  const addEntryToPhoneBook = {
    firstName,
    lastName,
    phone
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, addEntryToPhoneBook]);
    setFirstName('');
    setLastName('');
    setPhone('');
  }

  return (
    <section style={style.container}>
      <PhoneBookForm users= {users} firstName={firstName} lastName={lastName} phone={phone} handleAddUser={handleAddUser} handleInput={handleInput} />
      <InformationTable users={users}/>
    </section>
  );
}

export default App;
