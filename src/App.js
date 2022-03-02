import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
//

function App() {

  return (
    <div className='App'>
        <h1>LISTA DE TAREFA</h1>
        <Link to='/Task'><Button color='sucess' active >Iniciar</Button></Link>
    </div>
  )
}
export default App
