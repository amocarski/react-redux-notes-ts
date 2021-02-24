import React from 'react';
import { Container } from 'semantic-ui-react';
import ActivityFeed from './components/Activities/ActivityFeed';


function App() {
  return (
    <Container className={"App"}>
      <ActivityFeed/>
    </Container>
  );
}

export default App;
