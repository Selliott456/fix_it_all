import './App.css'
import About from './components/About'
import Header from './components/Header'
import Landlords from './components/Landlords'
import Generalrepairs from './components/Generalrepairs'
import Services from './components/Services'
import Mobilenav from './components/Mobilenav'


function App() {
  return<>
  <Mobilenav />
  <Header />
  <About />
  <Generalrepairs />
  <Landlords />
  <Services />
  </>
}
export default App;
