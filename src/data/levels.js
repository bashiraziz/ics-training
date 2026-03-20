import modulesData from './modules.json';

/**
 * Single source of truth for level metadata.
 * Both the homepage and the dashboard import from here.
 */
export const LEVELS = Object.entries(modulesData).map(([key, level]) => ({
  key,
  label: level.label,
  description: level.description,
  startLink: `/${key}/training/module-1`,
  modules: level.modules,
}));
