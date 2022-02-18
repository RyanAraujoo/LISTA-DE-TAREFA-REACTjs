import { Input, Button } from 'reactstrap'
import { useState } from 'react'
import RenderTask from './RenderTask'
export default function PushTask() {
  // 1 render an input
  // 2 button render an input text
  // 3 render in content RenderTask.jsx

  const [pushTask, setPushTask] = useState('')
  const [Task, setTask] = useState([])
  // get content from input
  const PushTextInput = (value) => {
   setPushTask(value.target.value)
  }
  // send content in input from array of task
  const SendTextTask = () => {
    setTask([...Task, pushTask])
  }
  return (
    <>
      <Input onChange={PushTextInput} />
      <Button
        active
        color='success'
        onClick={SendTextTask}
      >Enviar</Button>

      <RenderTask Task={Task} />
    </>

  )
}