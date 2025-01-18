import AnimatedText from './components/AnimatedText';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
      <>
          <AnimatedText />
          <Portfolio />
          <Resume />
          <ContactForm />
      </>
  );
}
