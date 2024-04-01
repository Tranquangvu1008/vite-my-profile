import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LayoutPage from './pages/Layout/LayoutPage'
import { HomePage } from './pages/Home/HomePage'
import { QuestionBoard } from './pages/Task/QuestionBoard/QuestionBoard'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { MusicPage } from './pages/Music/MusicPage'
import { ReactHookForm } from './pages/Task/ReactHookForm/ReactHookForm'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='questionBoard' element={<QuestionBoard />} />
          <Route path='reactHookForm' element={<ReactHookForm />} />
          <Route path='music/*' element={<MusicPage />} />
        </Route>
        <Route path='pageNotFound' element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
