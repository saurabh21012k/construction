import { render } from 'preact'

import { App } from './app.jsx'
import { AuthProvider } from './componants/backend/context/Auth';

render(
    <AuthProvider>
      <App />
    </AuthProvider>,
    document.getElementById('app')
  );
