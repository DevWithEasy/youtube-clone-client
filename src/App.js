import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Router from './router/Router'
function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="app">
      <Navbar/>
      <main>
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="mainbar">
            <Router/>
        </div>
      </main>
    </div>
  );
}

export default App;
