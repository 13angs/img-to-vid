import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoToImg from './pages/video-to-img/video-to-img';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createHashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'converting-video-to-image',
        element: <VideoToImg/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();