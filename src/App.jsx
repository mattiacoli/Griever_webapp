import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Biography from "./pages/Biography";
import AudioPlayer from "./components/AudioPlayer";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<Homepage />} />
          <Route path="/bio" Component={Biography} />
          <Route path="/discography" Component={AudioPlayer} />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
