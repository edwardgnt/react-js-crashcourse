import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'April 4th at 3pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'May 6th at 1pm',
            reminder: false,
        },
    
    ]
)

// Add Task
const addTask = (task) => {
  console.log(task);
}

// Delete task
const deleteTask  = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks available'}
    </div>
  );
}

export default App;
