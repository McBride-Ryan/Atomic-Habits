import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // State to check the reminder if the boolean is true or false
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}{' '}
        <FaTimes 
        style={{color: 'red', 
        cursor: 'pointer'}}
        // Pass a function to get the id
        onClick={() => onDelete(task.id)}
        />
        </h3>
        <p>{task.day}</p>
        </div>
    )
}

export default Task
