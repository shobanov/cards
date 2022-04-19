import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { store } from './Redux/store';
import { ModalContextProvider } from './context'
import { App } from './App';

const Main = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

// const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root'),
);
