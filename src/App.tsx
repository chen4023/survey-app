import '@/App.css';

import { Route, Routes } from 'react-router';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  // const [answers, setAnswers] = useState<string>('');
  return (
    <Routes>
      <Route path="/done" element={<CompletionPage />} />
      <Route path="/survey/:surveyId" element={<SurveyPage />}>
        <Route path=":step" element={<SurveyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
