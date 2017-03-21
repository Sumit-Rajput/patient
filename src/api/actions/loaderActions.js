export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';

export const startLoaderAction = () => ({
  type: START_LOADER,
});

export const stopLoaderAction = () => ({
  type: STOP_LOADER,
});
