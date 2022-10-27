import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes/Routes';

function App() {
  return (
    <div className=" bg-white  dark:bg-gray-800">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
