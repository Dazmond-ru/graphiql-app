import axios, { AxiosError, AxiosResponse } from 'axios';
import { Endpoints, baseURL } from '../constants/url';
import { IGraphQLRequest } from '../types/api';

const getQueryResult = async (requestData: IGraphQLRequest): Promise<unknown> => {
  const { query, variables, headers } = requestData;

  return axios
    .post(`${baseURL}${Endpoints.graphql}`, {
      // headers: {
      //   'Content-Type': 'application/json',
      //   ...headers,
      // },
      headers,
      query,
      variables,
    })
    .then((data: AxiosResponse) => data.data)
    .catch((err: AxiosError) => err.response?.data);
};

export { getQueryResult };
