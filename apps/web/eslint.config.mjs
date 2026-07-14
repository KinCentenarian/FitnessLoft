import baseConfig from "@fitnessloft/config/eslint";

export default [
  ...baseConfig,
  {
    ignores: [".next/**", "node_modules/**"],
  },
];
