import { BsFillXOctagonFill, BsFillPencilFill} from 'react-icons/bs'

export default function RenderTask (props) {
    const NewArray = props.Task
    return (
        <ul>
            {NewArray.map((task, index) => {
                return <li>
                            <>
                                {index} - {task}
                            </>
                            <>
                                <BsFillPencilFill/>
                            </>
                            <>
                                <BsFillXOctagonFill/>
                            </>
                       </li>
            })}
        </ul>
    )
}