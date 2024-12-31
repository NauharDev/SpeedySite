import Header from './components/Header'
import '@/styles/animated_gradient.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col animated-gradient">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-lg">
          Bring your resume to life
        </h1>
      </main>
    </div>
  )
}
