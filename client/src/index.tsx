import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root'),
);
