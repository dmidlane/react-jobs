import React from 'react'
import Navbar from './components/Navbar.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import JobsPage from './pages/JobsPage.jsx'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
  </Route>
  
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App  