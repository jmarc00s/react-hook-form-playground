import React from 'react';
import { Navbar } from './components/Navbar';
import { AppRouter } from './core/router';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto p-8">
        <AppRouter />
      </section>
    </main>
  );
}

export default App;
