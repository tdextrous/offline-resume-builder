import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import ExperiencePage from './pages/ExperiencePage';
import ProfilePage from './pages/ProfilePage';
import ResumeListPage from './pages/ResumeListPage';
import ResumeDetailPage from './pages/ResumeDetailPage';

import './App.scss';


interface Props { };

export const App: React.FC<Props> = () => {

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="page-wrapper">
        <Switch>
          {/* <ExperiencePage /> (was <Resume/>) */}
          <Route path="/experience" render={() => (
            <ExperiencePage />
          )}/>
          
          {/* <ResumeDetailPage /> (was <ExperiencePicker/>) */}
          <Route path="/resumes/:id" render={({ match }) => (
            <ResumeDetailPage resumeId={match.params.id} />
          )}/>

          {/* <ResumeListPage /> (was <ResumeList/>) */}
          <Route path="/resumes" render={() => (
            <ResumeListPage />
          )}/>

          {/* <ProfilePage /> (was <ProfilePage/>) */}
          <Route path="/profile" render={() => (
            <ProfilePage />
          )}/>

          <Route path="/" render={() => (
            <Redirect to="/experience" />
          )}/>
        </Switch>
      </main>
    </div>
  );
}
