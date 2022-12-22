import React, { lazy, Suspense } from 'react';

const LazySettingsScreen = lazy(() => import('./SettingsScreen'));

const SettingsScreen = props => (
  <Suspense fallback={null}>
    <LazySettingsScreen {...props} />
  </Suspense>
);

export default SettingsScreen;
