import { BsFillXOctagonFill, BsFillPencilFill,BsFillFileCheckFill} from 'react-icons/bs'
import {Button} from 'reactstrap'

export default function RenderTask (props) {
    // "push" da lista via props para ser renderizada
        const Task = props.Task 
    return (
        <ul className='task-list'>
            {Task.map((task, index) => {
          return (  
            <li key={index} className={task.isComplete ? 'confirme':'no-confirme'}>
            
            <Button active color='primary'>
            <BsFillFileCheckFill onClick={() => {
                props.ConfirmTaskList(index) // "push" da função via props // comando
            }}/>
            </Button>
              <>
                  {task.task} 
              </>
                <Button active color='warning'>
                  <BsFillPencilFill onClick={()=> {
                    props.EditTaskActive(index) // "ativar renderização para editar o texto" // via props // comando
                  }}/>
                </Button>
                <Button active color='danger'>
                  <BsFillXOctagonFill onClick={() => {
                      props.RemoveTaskList(index) // "push" da função via props // comando
                  }}/>
                </Button>
            </li>
          )
      })}
        </ul>
    )
}