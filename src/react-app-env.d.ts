/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CAROUSEL_AUTOPLAY: 'yes' | 'no';
    REACT_APP_CAROUSEL_TIMEOUT: number;
    REACT_APP_BACKEND_API_URL: string;
    REACT_APP_RECAPTCHA_KEY: string;
  }
}
