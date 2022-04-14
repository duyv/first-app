import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [students, setStudents] = useState([
    {
      name: 'Minh Tran',
      email: 'tranngocminh16294@gmail.com',
      phone: '0379937164',
      id: 1,
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    addStudent(name, email, phone)
    setName('')
    setEmail('')
    setPhone('')
  }

  const addStudent = (name, email, phone) => {
    const newStudent = {
      name,
      email,
      phone,
      id: students.length + 1,
    }
    setStudents([...students, newStudent])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }

  const handleDelete = (id) => {
    deleteStudent(id)
  }

  return (
    <div className="container">
      <div className="form-add">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
        </form>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="table-container">
        <table className="table">
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td><button className="btn btn-danger" onClick={() => handleDelete(student.id)}/></td>
                <td>Name: {student.name}</td>
                <td>Email: {student.email}</td>
                <td>Phone: {student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
