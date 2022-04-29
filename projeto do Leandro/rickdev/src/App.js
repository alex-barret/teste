import './App.css';
import Footer from './components/Footer';

import MyForms from './components/MyForms';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <h2>PAINEL DE CONTROLE</h2>
        <MyForms />

      </div>

      <Footer />
    </div>
  );
}

export default App;
