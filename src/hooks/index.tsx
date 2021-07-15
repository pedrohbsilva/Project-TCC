import React from 'react';
import { AppProviderProps } from '../interfaces';

import { AuthProvider } from './auth';

const AppProvider = ({ children }: AppProviderProps): React.ReactElement => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
