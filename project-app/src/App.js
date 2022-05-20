import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/userList/NewUser";
import LaundryList from "./pages/laundryList/LaundryList";
import LaundryOrderForm from "./pages/laundryList/LaundryOrderForm";
import LaundryCategory from "./pages/laundryCategory/LaundryCategory";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/laundryList" element={<LaundryList />} />
          <Route path="/laundryOrderForm" element={<LaundryOrderForm />} />
          <Route path="/laundryCategory" element={<LaundryCategory />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;