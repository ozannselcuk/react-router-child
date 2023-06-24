
import './App.css';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
import ProductContainer from './pages/Product/ProductContainer'
import Header from './components/header/header';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import FrameComponent from './components/filter/Filter';
import Orders from './pages/orders/Orders';
import Profile from './pages/profile/Profile';
import Help from './components/help/Help';
import OrderDetail from './components/orderDetail/OrderDetail';
import Discover from './pages/discover/discover';

function App() {
  const orders = [
    {
     orderCode: "#12453",
     id: "#12453",
     status: "Delivered",
     storeName: "Beethoven",
     orderSubmissionDate: new Date("2023-05-12"),
     orderProccessedDate: new Date("2023-05-12"),
     orderPackingDate: new Date("2023-05-12"),
     orderDeliveringDate: new Date("2023-05-12"),
   },
    {
     orderCode: "#12491",
     id: "#12456",
     status: "Delivered",
     storeName: "Kafka",
     orderSubmissionDate: new Date("2023-06-12"),
     orderProccessedDate: new Date("2023-06-12"),
     orderPackingDate: new Date("2023-05-13"),
     orderDeliveringDate: new Date("2023-05-14"),
   }
 ]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path : "/product",
      element : <ProductContainer/>
    },
    {
      path : "/signin",
      element : <Register/>
    },
    {
      path : "/discover",
      element : <Discover/>
    },
    {
      path : "/profile",
      element : <Profile/>,
      children : [
        {
          path : "/profile/help",
          element : <Help/>,
        },
        {
          path : "/profile/order-detail",
          element : <OrderDetail orders={orders}/>,
        },

      ]
    }
    
    
  ]);
  return (
    <RouterProvider router={router}>
      {/* // <Orders/> */}
    </RouterProvider>
  );
}

export default App;
