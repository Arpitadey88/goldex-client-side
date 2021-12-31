import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ExploreGallery from './Pages/Home/ExploreGallery/ExploreGallery';
// import AddProduct from './Pages/AddProduct/AddProduct';
import Purchase from './Pages/Purchase/Purchase';
import Review from './Pages/Home/Review/Review/Review';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
// import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
// import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
// import Admin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
// import Reviews from './Pages/Dashboard/Reviews/Reviews';
// import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/manageOrder">
              <ManageOrder />
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/addReviews">
              <Reviews />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route> */}
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/explore">
              <ExploreGallery></ExploreGallery>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
