import React from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from './components/Menu';

// Redux
import {store} from './store';
import { Provider } from 'react-redux';
import { Modal } from './components/Modal';
import { FormAddTweets } from './components/FormAddTweets';
import { TweetList } from './components/TweetList';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">TWEETS</h1>
        <TweetList />
      </Container>
      <Modal>
          <FormAddTweets/>
      </Modal>
    </Provider>
  );
}

export default App;
