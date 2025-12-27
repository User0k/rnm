import CharacterInfo from './pages/character-info';
import CharacterList from './pages/character-list';
import { Routes, Route } from 'react-router';

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
