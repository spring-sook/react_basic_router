import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./styles/Layout";
import UserStore from "./context/UserStore";
import Setting from "./pages/Setting";
import ImageUploader from "./pages/ImageUploader";
import MaterialEx from "./MaterialEx";
import CardEx from "./CardEx";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* UserStore로 감싼 아이들이 전부 children */}
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/firebase" element={<ImageUploader />} />
              <Route path="/material" element={<MaterialEx />} />
              <Route path="/card" element={<CardEx />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
