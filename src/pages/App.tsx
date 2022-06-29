import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { PakemonsPage } from './PakemonsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<PakemonsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
