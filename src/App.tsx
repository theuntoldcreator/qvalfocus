import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;