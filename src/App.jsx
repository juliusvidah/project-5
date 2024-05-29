import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Error from "./components/error/Error";
import BlogDetails from "./components/blogdetails/BlogDetails";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/portfolio"
					element={<Portfolio />}
				/>
				<Route
					path="/blogdetails/:id"
					element={<BlogDetails />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</div>
	);
}

export default App;