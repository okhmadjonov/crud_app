import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./pages/add-user/AddUser";
import UsersList from "./pages/users-list/UsersList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
