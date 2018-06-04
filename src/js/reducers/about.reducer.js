import {
  GET_ABOUT_CONIFG,
} from './../actions';

const initialState = {
  title: 'Polar Graph',
  chartData: {
    chart: {
      polar: true
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_CONIFG.request:
    debugger;
      return { ...state };
    case GET_ABOUT_CONIFG.success:
      return { ...state };
      case GET_ABOUT_CONIFG.fail:
    default:
      return state;
  }
};