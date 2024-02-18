import './App.css'
import { Header, LandingPage, InputArea } from './components'

export default function App() {
  return (
    <main className='bg-slate-200'>
      <div className='px-6 py-8 bg-slate-500'>
        <Header />
      </div>
      <div>
        <LandingPage />
      </div>
      <div className='bg-slate-100'>
        <InputArea />
      </div>
    </main>
  )
}