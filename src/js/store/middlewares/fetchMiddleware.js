import Connection from './Connection';

export default ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const { promise, types, hideLoading = false, ...rest } = action;

  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  const method = (promise.method && promise.method.toLowerCase()) || 'get';
  const fetch = Connection[method];

  if (fetch) {
    next({ ...rest, type: REQUEST, isXHr: !hideLoading });

    const actionPromise = fetch(promise);

    actionPromise
      .then(result => next({ ...rest, result, type: SUCCESS, isXHr: false, params: promise.data }))
      .catch((httpError) => {
        // Log the error please!!
        console.error(httpError); // eslint-disable-line
        next({
          ...rest,
          httpError,
          type: FAILURE,
          isXHr: false,
          params: promise.data,
        });
      });

    return actionPromise;
  }

  return Promise.reject('Invalid http method, only GET, POST, PUT and DELETE methods are allowed');
};
