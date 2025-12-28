import { Route, Routes } from 'react-router';

import CharacterInfo from './pages/character-info';
import CharacterList from './pages/character-list';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<CharacterList />}
      />
      <Route
        path='/character/:id'
        element={<CharacterInfo />}
      />
    </Routes>
  );
}
