import React from 'react';
import { Router } from "@reach/router"
import Discover from './Discover';
import RedirectPage from './RedirectPage';

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <Router>
      <Discover path="/" />
      <RedirectPage path="/redirect" />
    </Router>
  );
}
