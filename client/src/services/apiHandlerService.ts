import axios from 'axios';

const BASE_URL = ''; // the app already uses a proxy url so this is empty

export const get = async (url: string, id = null): Promise<any> => {
  let path = `${BASE_URL}/${url}`;
  path = !id ? path : `${path}/${id}`;
  return await axios
    .get(path)
    .then((response: { data: any }) => {
      return response.data;
    })
    .then((jsonData: any) => {
      return jsonData;
    })
    .catch((error: { message: any }) => {
      const errorResponse = {
        data: error,
        message: error.message,
        requestStatus: false,
        statusCode: error,
      };
      throw errorResponse;
    });
};

export const post = async (url: string, data: any) => {
  const path = `${BASE_URL}/${url}`;
  return await axios
    .post(path, data)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      const errorResponse = error.response;
      console.log(errorResponse);
      throw errorResponse;
    });
};

export const put = async (url: string, data = null) => {
  const path = `${BASE_URL}/${url}`;
  return await axios
    .put(path, data)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      const errorResponse = error.response;
      throw errorResponse;
    });
};

export const patch = async (url: string, data = null) => {
  const path = `${BASE_URL}/${url}`;
  return await axios
    .patch(path, data)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      const errorResponse = error.response;
      throw errorResponse;
    });
};

export const del = async (url: string) => {
  const path = `${BASE_URL}/${url}`;
  return await axios
    .delete(path)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      const errorResponse = error.response;
      throw errorResponse;
    });
};

/**
 * [getFile description]
 * @param  {[type]}  url         [description]
 * @param  {[type]}  [data=null] [description]
 * @return {Promise}             [description]
 * For exports
 */
export const getFile = async (url: string, data = null) => {
  const path = extractDataAsParam(`${BASE_URL}/${url}`, data);
  return await axios
    .get(path, { responseType: 'arraybuffer' })
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      throw error.response;
    });
};

export const postFile = async (url: string, file: any | Blob, data = null) => {
  const path = extractDataAsParam(`${BASE_URL}/${url}`, data);
  const formData = new FormData();
  formData.append('file', file, file.name);

  return await axios
    .post(path, formData, { responseType: 'arraybuffer' })
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: { response: any }) => {
      throw error.response;
    });
};

export const extractDataAsParam = (path: string, data: any = null) => {
  if (data) {
    const dataParams = '?';
    let appendment = '';
    for (const key in data) {
      appendment += `${key}=${data[key]}&`;
    }
    path += `${dataParams}${appendment}`;
  }
  return path;
};
