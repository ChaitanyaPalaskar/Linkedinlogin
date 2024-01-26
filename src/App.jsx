import Nav from './nav';
import { Body } from './body';

function App(){
  return <div>
    <header>
    <Nav/>
    </header>
    <div className='ceneter_box'>
    <Body/>
    </div>
    </div>
}
export default App;