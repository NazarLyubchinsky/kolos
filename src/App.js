import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import PayDonate from "./pages/PayDonate/PayDonate";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='profile' element={<UserProfile />} />
					<Route path='donate' element={<PayDonate />} />
					{/* <Route path='*' element={<NotFound />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
