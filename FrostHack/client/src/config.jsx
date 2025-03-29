const SERVER_URL = import.meta.env.VITE_MODE === "Development" ? import.meta.env.VITE_DEVELOPMENT_SERVER_URL : import.meta.env.VITE_PRODUCTION_SERVER_URL;

export default SERVER_URL;
