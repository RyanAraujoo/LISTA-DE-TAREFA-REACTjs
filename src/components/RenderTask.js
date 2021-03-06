import { BsFillXOctagonFill,BsFillFileCheckFill} from 'react-icons/bs'
import {Button} from 'reactstrap'

export default function RenderTask (props) {
    // "push" da lista via props para ser renderizada

        const Task = props.Task

    return (
      <div className='App'>
        <ul>
            {Task.map((task, index) => {
          return (  
            <li key={index} className={task.isComplete ? 'confirme':'no-confirme'}>
            
            <Button active color='primary' className='btn-function'>
            <BsFillFileCheckFill onClick={() => {
                props.ConfirmTaskList(index) // "push" da função via props // comando
            }}/>
            </Button>
              <div className='txt-task'>
                  {task.task} 
              </div>
                <Button active color='danger' className='btn-function'>
                  <BsFillXOctagonFill onClick={() => {
                      props.RemoveTaskList(index) // "push" da função via props // comando
                  }}/>
                </Button>
            </li>
          )
      })}
        </ul>
        </div>
    )
}