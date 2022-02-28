import { Input, Button} from 'reactstrap'
import { useState } from 'react'
import RenderTask from './RenderTask'
import EditTask from './EditTask'
export default function PushTask() {
  // 1 renderizar um "input" de texto
  // 2 botão renderiza o texto do "input" na lista
  // 3 renderizar a lista de tarefas (RenderTask.jsx)
  // 4 adicionar funções de edição,remoção e confirmação da tarefa
  // 5 identificação da tarefa via propriedades --> objeto

  const [pushTask, setPushTask] = useState('') // pegar o texto do "input"
  const [Task, setTask] = useState([]) // enviar a texto para a lista de texto
  const [isEdit, setIsEdit] = useState(false) // renderização para editar texto 
  

  // onChange do "Input" // setPushTask()
  const PushTextInput = (value) => {
   setPushTask(value.target.value)
  }

  // onClick do "Button" // setTask()
  const SendTextTask = ()=> {
    const objTask = {
    task: pushTask,
    isComplete: false
   }
      return setTask([...Task, objTask])
  }

  // Função de confirmar a tarefa

  const ConfirmTaskList = index => {
    const newArray = [...Task]
    newArray[index].isComplete = !newArray[index].isComplete
      return setTask(newArray)
  }

  // Função de remover a tarefa
  
  const RemoveTaskList = index => {
    const newArray = [...Task]
      newArray.splice(index,1)
      return setTask(newArray)
  }
  // Função de editar a tarefa 

  const EditTaskActive = (index) => {
    setIsEdit(!isEdit)
    const newArray = [...Task]
    const objTask = {
      task: pushTask,
      isComplete: false
     }
    newArray.splice(newArray[index],1,objTask)
    return setTask(newArray)
  }

  if (isEdit === true) return <EditTask 
  PushTextInput={ (value) => {PushTextInput(value)}}
  EditTaskActive={ () => { EditTaskActive()}}
  /> 
  return (
    <div className='App'>
      <Input onChange={PushTextInput} />
      <Button
        active
        color='success'
        onClick={SendTextTask}
      >Enviar</Button>
       <RenderTask
       ConfirmTaskList={index => ConfirmTaskList(index)} 
       RemoveTaskList={index => RemoveTaskList(index)} 
       Task={Task}
       EditTaskActive={index => EditTaskActive(index)}
       />
    </div>
  )
} 