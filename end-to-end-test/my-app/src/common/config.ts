export interface Config {
  apiUrl: string
  apiBasePath: string
}

export const config:Config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  apiBasePath: process.env.REACT_APP_API_BASE_PATH || '/api/v1',
};
