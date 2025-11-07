import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App1 from './app1';

function App() {
  return (
    <Router>
      <nav style={{ 
        padding: '20px', 
        backgroundColor: '#333', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <Link to="/" style={{ 
          color: 'white', 
          marginRight: '20px', 
          textDecoration: 'none',
          fontSize: '18px'
        }}>Home</Link>
        <Link to="/app1" style={{ 
          color: 'white', 
          textDecoration: 'none',
          fontSize: '18px'
        }}>App A</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to My React App</h1>
            <p>Click on "App A" above to see the Vite + React demo</p>
          </div>
        } />
        <Route path="/app1" element={<App1 />} />
      </Routes>
    </Router>
  );
}

export default App;
