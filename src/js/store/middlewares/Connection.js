import download from './Download';

const methods = ['get', 'post', 'put', 'delete'];

function parseJSON(response) {
  const json = response.text().then((text) => {
    try {
      // 200 status not always return JSON, post requests
      // returns nothing
      return JSON.parse(text);
    } catch (error) {
      return {
        statusCode: response.status,
        ...error,
      };
    }
  });

  if (response.status >= 400) {
    // When the server response contains important JSON data for errors
    return json
      .then(error => ({
        ...error,
        endpoint: response.url,
        statusCode: response.status,
      }))
      .then(Promise.reject.bind(Promise));
  }

  return json;
}

function downloadFile(response) {
  const contentDesposition = response.headers
    .get('Content-Disposition');
  const fileName = contentDesposition ?
    contentDesposition
    .split('filename=')
    .slice(-1) : undefined;

  response.blob().then((blob) => {
    return fileName ? download(blob, fileName) : download(blob);
  });
}

function generateEndpoint(host = '', path, params) {
  let queryParams = [];

  if (params) {
    queryParams = Object.keys(params).map(key => `${key}=${params[key]}`);
  }

  queryParams.push(`request-id=${Date.now()}-${Math.floor(Math.random() * 100000)}`);

  return `${host}${path}?${queryParams.join('&')}`;
}

function generateApiMethod(method) {
  return ({ host, path, params, data, headers, isDownload } = {}) => {
    const endpoint = generateEndpoint(host, path, params);
    const additionalHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    };

    let body;

    if (additionalHeaders['Content-Type'] === 'application/json' && data) {
      body = JSON.stringify(data);
    } else {
      body = data;
    }

    return fetch(endpoint, {
      method,
      body,
      // credentials: 'include',
      headers: additionalHeaders,
    })
      .then(result => (isDownload ? downloadFile(result) : parseJSON(result)))
      .catch(error => Promise.reject({ ...error }));
  };
}

const Connection = {};

for (let i = 0; i < methods.length; i++) {
  const method = methods[i];

  Connection[method] = generateApiMethod(method);
}

export default Connection;
