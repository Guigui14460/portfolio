import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './containers/HomePage';
import { ProjectsPage } from './containers/ProjectsPage';
import { AboutPage } from './containers/AboutPage';
import { ContactPage } from './containers/ContactPage';
import { SkillsPage } from './containers/SkillsPage';
import Header from './components/Header';
import Footer from './components/footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/skills" exact component={SkillsPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
