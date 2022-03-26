import React, { useState } from 'react'

export default function ListStudent(props) {
    let { listData } = props;
    //console.log('listData', listData)

    // const [listStudents, setListStudents] = useState(props || [])
    const [list, updateList] = useState(props);
    const onDeleteItem = (e) => {
        // const newListStudents = listStudents.filter((x) => { return x.email !== item.email })
        // setListStudents(newListStudents)
        // item.stopPropagation();
        // const liItem = item.target.closest('.students');
        // this.listviewInstance.removeItem(liItem);
        const name = e.target.getAttribute("index")
        updateList(list.filter(user => user.name !== name));
    }
    return (
        listData.map((user, index) => {
            return (
                <div className='students' key={index}>
                    <span className='delete' name={user.name} onClick={onDeleteItem}>x</span>
                    <p>Họ tên: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Số đt: {user.phone}</p>
                </div>
            )
        })

    )
}