import ReactDOM from 'react-dom/client';
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

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
