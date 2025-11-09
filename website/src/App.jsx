import React from 'react'
import demo from './assets/demo.png'
import './App.css'

const features = [
  'Displays CPU, RAM and File-System resource usage',
  'React + TypeScript renderer',
  'Typesafe IPC between main and renderer',
  'Hide-to-tray / system tray integration',
  'Custom menu bar and window frame',
  'E2E tests (Playwright) and unit tests (Vitest)',
  'Cross-platform packaging with electron-builder',
]

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-sky-100 p-6">
      <div className="w-full max-w-5xl">
        <header className="mb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">Task Manager</h1>
          <p className="text-slate-300 mt-1">A desktop system monitor with tray integration</p>
        </header>

        <main className="flex flex-col items-center gap-6 bg-white/5 rounded-2xl p-6 md:p-8 shadow-lg">

          <div className="w-80 h-60 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-800/20 to-teal-700/10">
            <img src={demo} alt="Demo tray icon" className="w-full h-full object-contain drop-shadow-xl" />
          </div>


          <div className="w-full md:w-2/3">
           <div className="flex gap-3 mt-5">
              <a href="https://github.com/Himanshu7617/taskManager" target='blank' className="inline-block mb-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-teal-400 text-white">Try in dev</a>

            </div>
            <h2 className="text-lg font-semibold text-sky-100 mb-3">Features</h2>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/3 p-3 rounded-lg backdrop-blur-sm">
                  <span className="text-2xl">⚡</span>
                  <span className="text-slate-100">{f}</span>
                </li>
              ))}
            </ul>

           
          </div>
        </main>

      </div>
    </div>
  )
}

export default App