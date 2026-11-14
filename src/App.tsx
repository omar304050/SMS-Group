import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { CollectionPage } from "./pages/CollectionPage"
import { HomePage } from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
