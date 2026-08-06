import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Environment = 'local' | 'prod';

interface EnvironmentState {
  environment: Environment;
  setEnvironment: (env: Environment) => void;
}

const STORAGE_KEY = 'assistant-environment';

const LOCAL_API_BASE_URL = 'http://localhost:3000';
const PROD_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  'https://personal-ai-assistant-api.devcristianrodriguez.lat';

export const useEnvironmentStore = create<EnvironmentState>()(
  persist(
    (set) => ({
      environment: 'prod', // Default to prod
      setEnvironment: (env: Environment) => set({ environment: env }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);

// Helper function to get the API base URL based on environment
export const getApiBaseUrl = (): string => {
  const { environment } = useEnvironmentStore.getState();
  return environment === 'local' ? LOCAL_API_BASE_URL : PROD_API_BASE_URL;
};
