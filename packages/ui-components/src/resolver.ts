import { toPascalCase } from './utils';

/**
 * Resolver for unplugin-vue-components and unplugin-auto-import
 *
 * @param options
 */
export function UIComponentsResolver() {
  return [
    {
      type: 'component' as const,
      resolve: (name: string) => {
        return {
          name: toPascalCase(name),
          from: 'ui-components/components'
        };
      }
    }
  ];
}
