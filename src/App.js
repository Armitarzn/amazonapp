import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./Pages/Homepage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App