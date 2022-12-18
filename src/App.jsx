import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PostsIndex } from "./PostsIndex";
import { PostNew } from "./PostNew";
import { PostsShowPage } from "./PostsShowPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts-index" element={<PostsIndex />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
