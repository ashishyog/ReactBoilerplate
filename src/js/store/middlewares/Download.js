const toString = a => String(a);

function dataUrlToBlob(strUrl, blobClass) {
  const parts = strUrl.split(/[:;,]/);
  const type = parts[1];
  const decoder = parts[2] === 'base64' ? atob : decodeURIComponent;
  const binData = decoder(parts.pop());
  const length = binData.length;
  const uiArr = new Uint8Array(length);
  let i = 0;

  for (i; i < length; ++i) {
    uiArr[i] = binData.charCodeAt(i);
  }

  return new blobClass([uiArr], { type });
}
/* eslint-disable */
const download = (payload, fileName = 'download', mimeType = 'application/octet-stream') => {
  const anchor = document.createElement('a');
  const blobType = window.Blob || window.MozBlob || window.WebKitBlob || toString;

  const blobClass = blobType.call ? blobType.bind(window) : Blob;

  if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
    if (payload.length > 1024 * 1024 * 1.999 && blobClass !== toString) {
      payload = dataUrlToBlob(payload);
      mimeType = payload.type;
    } else {
      return navigator.msSaveBlob
        ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
        : saver(payload);
    }
  } else if (/([\x80-\xff])/.test(payload)) {
    let i = 0,
      tempUiArr = new Uint8Array(payload.length),
      mx = tempUiArr.length;
    for (i; i < mx; ++i) {
      tempUiArr[i] = payload.charCodeAt(i);
    }
    payload = new blobClass([tempUiArr], { type: mimeType });
  }

  const blob = payload instanceof blobClass ? payload : new blobClass([payload], { type: mimeType });

  function saver(url, winMode) {
    if ('download' in anchor) {
      anchor.href = url;
      anchor.setAttribute('download', fileName);
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      setTimeout(() => {
        anchor.click();
        document.body.removeChild(anchor);
        if (winMode === true) {
          setTimeout(() => {
            window.URL.revokeObjectURL(anchor.href);
          }, 250);
        }
      }, 66);
      return true;
    }

    if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
      if (/^data:/.test(url)) {
        url = `data:${url.replace(/^data:([\w\/\-\+]+)/, mimeType)}`;
      }
      if (!window.open(url)) {
        console.log('popup blocked');
      }
      return true;
    }

    const iFrame = document.createElement('iframe');
    document.body.appendChild(iFrame);

    if (!winMode && /^data:/.test(url)) {
      url = `data:${url.replace(/^data:([\w\/\-\+]+)/, mimeType)}`;
    }
    iFrame.src = url;
    setTimeout(() => {
      document.body.removeChild(iFrame);
    }, 333);
  }

  if (navigator.msSaveBlob) {
    return navigator.msSaveBlob(blob, fileName);
  }

  if (window.URL) {
    saver(window.URL.createObjectURL(blob), true);
  } else {
    if (typeof blob === 'string' || blob.constructor === toString) {
      try {
        return saver(`data:${mimeType};base64,${window.btoa(blob)}`);
      } catch (y) {
        return saver(`data:${mimeType},${encodeURIComponent(blob)}`);
      }
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      saver(this.result);
    };
    reader.readAsDataURL(blob);
  }
  return true;
};
/* eslint-enable */

export default download;
