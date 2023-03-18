import { Create, Delete, Update, Read } from "../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layouting } from "../layouting/Layouting";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layouting />}>
          <Route path="/create" element={<Create />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
        </Route>
      </Routes>
    </Router>
  );
};
