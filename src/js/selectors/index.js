import { createSelector } from 'reselect';
import { getRootState as getState } from '../utils/selectors';

export const getRootState = getState('app');
export const getAboutState = createSelector([getRootState], (state) => {
  return state.about;
});
export const getDashboardState = createSelector([getRootState], (state) => {
  return state.dashboard;
});
/**
 * Returns the data for the main grid, it applies the
 * current filters on the state.
 */
// Get the current sorting applied to the grid
export const initializeAbout = createSelector(
  [getAboutState],
  (about) => { 
    debugger;
    return about; }
);