import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import LayoutPage from './layout/LayoutPage'
import { HomePage } from './pages/Home'
import { QuestionBoard } from './pages/Task/QuestionBoard'
import { ReactHookForm } from './pages/Task/ReactHookForm'
import { MusicPage } from './pages/Music'
import { ContactPage } from './pages/Contact'
import { HelmetProvider } from 'react-helmet-async'
import { ChangeFont } from './pages/ChangeFont'

export const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='questionBoard' element={<QuestionBoard />} />
            <Route path='reactHookForm' element={<ReactHookForm />} />
            <Route path='changeFont' element={<ChangeFont />} />
            <Route path='music/*' element={<MusicPage />} />
          </Route>
          <Route path='pageNotFound' element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
