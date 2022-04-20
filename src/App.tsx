import './index.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./ScrollToTop";
import { DotsLoader } from './components/loader';
const HomePageComponent = lazy(() => import("./pages/home"));
const ProjectsPageComponent = lazy(() => import("./pages/projects"));
const AboutPageComponent = lazy(() => import("./pages/about"));
const ContactPageComponent = lazy(() => import("./pages/contact"));
const SkillsPageComponent = lazy(() => import("./pages/skills"));

const ComponentLoader = () => {
    return <div style={{ display: "flex", justifyContent: "center" }}>
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

// const HomePage = () => {
//     return <div>
//         <Suspense fallback={<ComponentLoader />}>
//             <HomePageComponent />
//         </Suspense>
//     </div>
// }
// const ProjectsPage = () => {
//     return <div>
//         <Suspense fallback={<ComponentLoader />}>
//             <ProjectsPageComponent />
//         </Suspense>
//     </div>
// }
// const AboutPage = () => {
//     return <div>
//         <Suspense fallback={<ComponentLoader />}>
//             <AboutPageComponent />
//         </Suspense>
//     </div>
// }
// const ContactPage = () => {
//     return <div>
//         <Suspense fallback={<ComponentLoader />}>
//             <ContactPageComponent />
//         </Suspense>
//     </div>
// }
// const SkillsPage = () => {
//     return <div>
//         <Suspense fallback={<ComponentLoader />}>
//             <SkillsPageComponent />
//         </Suspense>
//     </div>
// }

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
          <Route path="/skills" exact component={() => <Page element={<SkillsPageComponent />} />} />
          {/* <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/skills" exact component={SkillsPage} /> */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
