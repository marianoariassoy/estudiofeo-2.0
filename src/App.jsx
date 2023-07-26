import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Studio from "./pages/studio/Studio";
import Shop from "./pages/shop/Shop";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Post from "./components/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/studio/:id" element={<Post section="studio" />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Post section="shop" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Post section="gallery" />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
