import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { setupStore } from '@helpers/setup-store';
import { AppRouter } from '@components/shared/app-router';
import { ThemeProvider } from '@components/shared/theme-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={setupStore()}>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);
