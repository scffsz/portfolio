import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Articles from './pages/Articles/Articles'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Home />} />
          <Route exact path='/news' element={<Articles />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
  );
}
export default App