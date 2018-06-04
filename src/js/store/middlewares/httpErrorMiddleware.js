import { setHttpError } from '../../actions';

export default ({ dispatch }) => next => (action) => {
  const { httpError } = action;

  if (httpError) {
    let message;

    switch (httpError.statusCode) {
      case 404:
        message = 'API endpoint not found';
        break;
      case 500:
        message = 'An API error has occured';
        break;
      default:
        message = 'An error has occured';
    }

    dispatch(
      setHttpError(action.namespace, {
        code: httpError.statusCode || 0,
        message,
      })
    );
  }

  next(action);
};
