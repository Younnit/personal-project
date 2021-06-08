import './App.css';
import Header from './components/Header'
import routes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
