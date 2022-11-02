import React from 'react';
import { Outlet, RouterProvider } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { router } from './core/router';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto p-8">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
