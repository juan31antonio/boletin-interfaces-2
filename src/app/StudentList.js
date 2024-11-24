import { useState } from 'react';

export default function StudentList(){
    const [students, setStudents] = useState([]); 
    const [newStudent, setNewStudent] = useState('');

    function addStudent(){
        setStudents(
            [...students,newStudent]
        )
    }
    function deleteStudent(index){
        setStudents(students.filter((student, i) => i!=index))
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Escribe un nombre"
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
            />
            <button onClick={addStudent}>Agregar</button>

            <ul>
                {students.map((student, index) => 
                    <li key={index}>
                        {student}
                        <button onClick={() => deleteStudent(index)}>Borrar</button>
                    </li>
                )}
            </ul>
        </div>
    )
}