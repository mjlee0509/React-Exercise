import React from 'react'
import { useState } from 'react'

let nextId = 0;

export default function List() {

    const [newName, setNewName] = useState('');
    const [personList, setPersonList] = useState([]);
    const addPerson = () => {
        
        // 1. input 박스 비워주기
        setNewName('');

        // 2. input 박스에 입력된 값을 배열에 추가

        // const newList = [...personList];
        // newList.push({
        //     id: nextId++,
        //     name: newName,
        // });
        // setPersonList(newList);
        setPersonList([
            ...personList,
            {
                id: nextId++,
                name: newName,
            }
        ]);

    }
  return (
    <div>
        <h1>떠든사람</h1>
        <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <button onClick={addPerson}>살생부 등록</button>
        <ul>
            {personList.map((person) => (
                <li key={person.id}>{person.name}</li>
            ))}
        </ul>
    </div>
  )
}
