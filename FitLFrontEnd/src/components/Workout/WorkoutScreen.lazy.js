import React, { lazy, Suspense } from 'react';

const LazySettingsScreen = lazy(() => import('./SettingsScreen'));

const WorkoutScreen = props => (
  <Suspense fallback={null}>
    <LazySettingsScreen {...props} />
  </Suspense>
);

export default WorkoutScreen;
