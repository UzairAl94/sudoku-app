import axios from "axios";
import { normalizeCatchErrors } from "./client.configs";
import LoaderService from "services/loader";

interface HttpClientConfigs {
  normalizeError?: boolean;
}

const defaultConfigs: HttpClientConfigs = {
  normalizeError: true,
};

export class HttpClient {
  configs: HttpClientConfigs;

  constructor(configs: HttpClientConfigs = {}) {
    this.configs = { ...defaultConfigs, ...configs };
  }

  get = <T>(url: string, options?: Object): Promise<T> =>
    new Promise((resolve, reject) => {
      LoaderService.show();
      axios
        .get(url, options || {})
        .then((response: any) => {
          resolve(response ? response.data : null);
          LoaderService.hide();
        })
        .catch((error: any) => {
          const errorPayload = this.configs.normalizeError
            ? normalizeCatchErrors(error.response)
            : error.response;
          reject(errorPayload);
          LoaderService.hide();
        });
    });

  post = <T>(url: string, data: any, options?: Object): Promise<T> =>
    new Promise((resolve, reject) => {
      LoaderService.show();
      axios
        .post(url, data, options || {})
        .then((response) => {
          resolve(response ? response.data : null);
          LoaderService.hide();
        })
        .catch((error) => {
          const errorPayload = this.configs.normalizeError
            ? normalizeCatchErrors(error.response)
            : error.response;
          reject(errorPayload);
          LoaderService.hide();
        });
    });
}
