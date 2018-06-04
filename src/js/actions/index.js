import generateNames from '../utils/generateNames';

export const GET_ABOUT_CONIFG = generateNames('GET_ABOUT_CONIFG');

export function initAbout() {
  return {
    types: ['GET_ABOUT_CONIFG.request', 'GET_ABOUT_CONIFG.success', 'GET_ABOUT_CONIFG.fail'],
    namespace: 'about',
    promise: {
      host: '',
      path: 'mockservices/chartData',
      method: 'GET'
    }
  };
}