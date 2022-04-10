import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ModalContext } from './context/ModalContext';
import { store } from './Redux/store';
import { App } from './App';

const Main = () => {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalContext.Provider value={{isModalActive, setModalActive}}>
          <App />
        </ModalContext.Provider>
      </QueryClientProvider>
    </Provider>
  )
};

const queryClient = new QueryClient();

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
