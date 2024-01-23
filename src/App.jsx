import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Authentication from "./pages/auth/Authentication";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
