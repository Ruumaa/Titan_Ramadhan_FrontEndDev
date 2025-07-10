import Layout from './components/layouts/Layout';
import CTA from './sections/CTA';
import Feature from './sections/Feature';
import Footer from './sections/Footer';
import Hero from './sections/Hero';

function App() {
  return (
    <Layout>
      <Hero />
      <Feature />
      <CTA />
      <Footer />
    </Layout>
  );
}

export default App;
