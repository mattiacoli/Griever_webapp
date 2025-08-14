import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Biography from "./pages/Biography";
import AudioPlayer from "./components/AudioPlayer";
import Contattaci from "./pages/Contattaci";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<Homepage />} />
          <Route path="/bio" Component={Biography} />
          <Route path="/discography" Component={AudioPlayer} />
          <Route path="/contact_us" Component={Contattaci} />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
