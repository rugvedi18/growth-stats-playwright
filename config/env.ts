type EnvironmentConfig = {
  baseUrl: string;
};

const environment = process.env.TEST_ENV ?? 'production';

const environmentConfigMap: Record<string, EnvironmentConfig> = {
  production: {
    baseUrl: 'https://www.growthstats.io',
  },
  preview: {
    baseUrl: 'https://www.growthstats.io',
  },
};

export const envConfig =
  environmentConfigMap[environment] ?? environmentConfigMap.production;
