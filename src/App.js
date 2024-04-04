import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Book from "./LibraryComponents/Books/Book";
import Home from "./LibraryComponents/Home/Home";
import About from "./LibraryComponents/About/About";
import RootLayout from "./Layout/RootLayout";
import Contact from "./LibraryComponents/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="book" element={<Book />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
