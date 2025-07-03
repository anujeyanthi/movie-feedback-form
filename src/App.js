import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import MovieFeedbackForm from "./components/MovieFeedbackForm";
import ReviewList from "./components/ReviewList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>
        <nav className="nav">
          <Link to="/feedback">Give Feedback</Link>
          <Link to="/reviews">View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<MovieFeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
