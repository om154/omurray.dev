import Footer from '../Footer';
import Greeting from '../Greeting';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';

const Home = () => {
  return (
    <PageContainer>
      <Navigation />
      <Greeting />
      <Footer />
    </PageContainer>
  );
};

export default Home;
