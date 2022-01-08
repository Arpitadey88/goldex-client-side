import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { Fragment } from 'react';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Reviews from './Pages/Dashboard/Reviews/Reviews';
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
          <Fragment>
            <Header />
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}> </Route>
              <Route path="/register" element={<Register />}></Route>

              <Route path="/purchase/:productId" element={<PrivateRoute><Purchase /></PrivateRoute>}></Route>

              <Route path="/explore" element={<PrivateRoute><ExploreGallery /></PrivateRoute>}> </Route>

              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

                <Route exact path="/dashboard" element={<DashboardHome />}>
                </Route>

                <Route path={`/dashboard/addProduct`} element={<AddProduct />}>
                </Route>

                <Route path={`/dashboard/manageOrder`} element={<ManageOrder />}>
                </Route>

                <Route path={`/dashboard/manageProducts`} element={<ManageProducts />}>
                </Route>

                <Route path={`/dashboard/myOrder`} element={<MyOrder />}>
                </Route>

                <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />}>
                </Route>

                <Route path={`/dashboard/payment`} element={<Payment />}>
                </Route>

                <Route path={`/dashboard/addReviews`} element={<Reviews />}>
                </Route>
              </Route>

              <Route path="/review" element={<Review />}></Route>

              <Route exact path="/" element={<Home />}></Route>

            </Routes>
            <Footer />
          </Fragment>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
