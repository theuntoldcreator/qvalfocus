import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;