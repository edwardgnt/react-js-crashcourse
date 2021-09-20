import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

// Delete task
const deleteTask  = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
};

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks available'}
    </div>
  );
}

export default App;
