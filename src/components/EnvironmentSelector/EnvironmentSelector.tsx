import { useEnvironmentStore, getApiBaseUrl } from '@/store/environment.store';

// Floating environment selector component
const EnvironmentSelector = () => {
  const { environment, setEnvironment } = useEnvironmentStore();

  const handleOpenSwagger = () => {
    const apiUrl = getApiBaseUrl();
    const swaggerUrl = `${apiUrl}/api`;
    window.open(swaggerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex gap-2">
        <button
          onClick={handleOpenSwagger}
          className="px-3 py-1.5 text-sm font-medium rounded transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 border-l border-gray-300 pl-3 ml-1"
          title="Open API Documentation (Swagger)"
        >
          API Doc
        </button>
      </div>
    </div>
  );
};

export default EnvironmentSelector;
