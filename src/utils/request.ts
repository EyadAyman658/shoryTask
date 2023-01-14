import { BASE_API, clientConfig, clientSecret } from "../config";

export const get = async (
  url: string,
  token?: string,
  lang?: string,
) => {
  const isBlob = "json";
  return await BASE_API.get(url, {
    responseType: isBlob,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const post = async (
  url: string,
  body?: any,
  token?: string,
  lang?: string,
) => {
  return await BASE_API.post(url, body, {
    headers: {
      Authorization: "Bearer " + token,
      lang: lang,
      "Accept-Language": lang,
      client: clientConfig,
      "client-secret": clientSecret,
    },
  });
};

export const patch = async (url: string, body?: any, token?: string) => {
  return await BASE_API.patch(url, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const put = async (url: string, body?: any, token?: string) => {
  return await BASE_API.put(url, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteReq = async (url: string, token?: string) => {
  return await BASE_API.delete(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
