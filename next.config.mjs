const nextConfig = {
    // ... other configurations
    webpack: (config, { isServer }) => {
      // Only configure for client-side (browser) builds
      if (!isServer) {
        config.module.rules.push({
          test: /\.(bin|node)$/, // Target binary and .node files
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/', // Or a suitable output path for binary files
          },
        });
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  