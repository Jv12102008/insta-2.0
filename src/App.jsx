import './App.css'
import { Headertwo } from './components/haeder/headertwo';
import { Header } from './components/haeder/header';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';

function App() {

  return (
    <div className="App">
     <Header/>
     <Headertwo/>
     
      <Content/>
     <Footer/> 
    </div>
  )
}

export default App
