import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';
import Layout from './component/layout';


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
