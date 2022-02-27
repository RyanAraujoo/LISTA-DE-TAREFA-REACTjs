import { Input, Button} from 'reactstrap'
export default function EditTask (props) {
    return (
        <>
        <Input onChange={(value) => {
            props.PushTextInput(value)
        }}/>
        <Button
          active
          color='success'
          onClick={() => {
            props.EditTaskActive()
          }}
        >Editar</Button>
        </>
    )
}