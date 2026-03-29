import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from "./components/index/Index";
import { Header } from "./components/header/Header";
import { HigherLower } from "./components/higherLower/HigherLower";

function App() {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            //do zmiany elementy
            <Route path="/" element={<Index />} />
            <Route path="/classic" element={<Index />} />
            <Route path="/image" element={<Index />} />
            <Route path="/higherlower" element={<HigherLower />} />
            <Route path="/infinite" element={<Index />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
