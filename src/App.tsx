import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LayoutPage from './pages/Layout/LayoutPage'
import { HomePage } from './pages/Home/HomePage'
import { AboutPage } from './pages/About/AboutPage'
import { QuestionBoard } from './pages/Task/QuestionBoard/QuestionBoard'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='questionboard' element={<QuestionBoard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
