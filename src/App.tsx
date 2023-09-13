import './index.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./ScrollToTop";
import { DotsLoader } from './components/loader';
const HomePageComponent = lazy(() => import("./pages/home"));
const ProjectsPageComponent = lazy(() => import("./pages/projects"));
const PublicationsPageComponent = lazy(() => import("./pages/publications"));
const AboutPageComponent = lazy(() => import("./pages/about"));
const ContactPageComponent = lazy(() => import("./pages/contact"));
const SkillsPageComponent = lazy(() => import("./pages/skills"));

const ComponentLoader = () => {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(80vh - 85px)", lineHeight: "calc(80vh - 85px)" }}>
        <DotsLoader />
    </div>
}

const Page = (props: { element: JSX.Element }) => {
    return <div>
        <Suspense fallback={<ComponentLoader />}>
            {props.element}
        </Suspense>
    </div>
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" exact component={() => <Page element={<HomePageComponent />} />} />
          <Route path="/about" exact component={() => <Page element={<AboutPageComponent />} />} />
          <Route path="/contact" exact component={() => <Page element={<ContactPageComponent />} />} />
          <Route path="/projects" exact component={() => <Page element={<ProjectsPageComponent />} />} />
          <Route path="/publications" exact component={() => <Page element={<PublicationsPageComponent />} />} />
          <Route path="/skills" exact component={() => <Page element={<SkillsPageComponent />} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
