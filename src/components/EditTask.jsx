import { Input, Button} from 'reactstrap'
export default function EditTask (props) {
    return (
        <>
        <Input onChange={() => {
            props.PushTextInput
        }} />
        <Button
          active
          color='success'
          onClick={() => {
            props.EditTaskList
          }}
        >Editar</Button>
        </>
    )
}