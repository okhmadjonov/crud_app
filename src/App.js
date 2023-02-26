import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./UsersList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/*" element={<EditUser />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
