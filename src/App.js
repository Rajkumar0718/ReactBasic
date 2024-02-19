import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateh from "./components/hooks/UseStateh"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/useState" element={<UseStateh />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
