import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// component
import { Toaster } from "./shared/ui/sonner";

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
