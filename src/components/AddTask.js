import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add habit')
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        // Submit event 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Atomic Habit</label>
                <input type="text" placeholder="Add habit"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day and Time"
                value={day}
                onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
        
    )
}

export default AddTask
