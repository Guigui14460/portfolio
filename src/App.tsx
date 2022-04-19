import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import SkillsPage from "./pages/skills";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./ScrollToTop";

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
