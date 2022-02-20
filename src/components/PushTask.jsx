import { Input, Button} from 'reactstrap'
import { useState } from 'react'
import { BsFillXOctagonFill, BsFillPencilFill,BsFillFileCheckFill} from 'react-icons/bs'
import '../Style.css'
export default function PushTask() {
  // 1 render an input
  // 2 button render an input text
  // 3 render in content RenderTask.jsx
  // 4 put functions buttons ( edit, close) 
  // 5 transform task into object ( symbol ?)

  const [pushTask, setPushTask] = useState('')
  const [Task, setTask] = useState([])
  const [confirme, setConfirme] = useState(false)
  //

  // get content from input
  const PushTextInput = (value) => {
   setPushTask(value.target.value)
  }

  // send content in input from array of task
  
  const SendTextTask = ()=> {
    const objTask = {
    task: pushTask,
    isComplete: confirme
   }
      return setTask([...Task, objTask])
  }

  //FUNCTION: TO CONFIRME 

  const ConfirmTaskList = (index) => {
    const newArray = [...Task]
    newArray[index].isComplete = !newArray[index].isComplete
      return setTask(newArray)
  }

  // FUNCTION: TO REMOVE
  
  const RemoveTaskList = (index) => {
    const newArray = [...Task]
      newArray.splice(index,1)
      return setTask(newArray)
  }
  // render Task 
  return (
    <>
      <Input onChange={PushTextInput} />
      <Button
        active
        color='success'
        onClick={SendTextTask}
      >Enviar</Button>
      <ul>
      {Task.map((task, index) => {
          return (  
            <li key={index} className={task.isComplete ? 'confirme':'no-confirme'}>
            
            <Button active color='primary'>
            <BsFillFileCheckFill onClick={() => {
                ConfirmTaskList(index)
            }}/>
            </Button>
              <>
                  {task.task}
              </>
                <Button active color='warning'>
                  <BsFillPencilFill />
                </Button>
                <Button active color='danger'>
                  <BsFillXOctagonFill onClick={() => {
                      RemoveTaskList(index)
                  }}/>
                </Button>
            </li>
          )
      })}
  </ul>
    </>

  )
}