import {
  computed,
  getCurrentInstance,
  resolveDynamicComponent,
  toRef
} from 'vue';

// Types
import type { ComputedRef, Ref, SetupContext } from 'vue';
import type {
  RouteLocationNormalizedLoaded,
  Router,
  RouterLinkProps,
  RouterLink as _RouterLink,
  useLink as _useLink
} from 'vue-router';

export function useRoute(): Ref<RouteLocationNormalizedLoaded | undefined> {
  const vm = getCurrentInstance();

  return computed(() => vm?.proxy?.$route);
}

export function useRouter(): Router | undefined {
  return getCurrentInstance()?.proxy?.$router;
}

export interface LinkProps extends Partial<RouterLinkProps> {
  href?: string
}

interface UseLink extends Omit<Partial<ReturnType<typeof _useLink>>, 'href'> {
  isLink: ComputedRef<boolean>
  isClickable: ComputedRef<boolean>
  href: Ref<string | undefined>
}

export function useRouterHistory() {
  const router = useRouter();

  const isWebHashHistory = computed(() => router && router.options.history.base.includes('#'));

  return {
    isWebHashHistory
  };
}

export function useLink(props: LinkProps, attrs: SetupContext['attrs']): UseLink {
  const RouterLink = resolveDynamicComponent('RouterLink') as typeof _RouterLink | string;

  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return isLink?.value || !!(attrs.onClick || attrs.onClickOnce);
  });

  if (typeof RouterLink === 'string') {
    return {
      isLink,
      isClickable,
      href: toRef(props, 'href')
    };
  }

  const link = props.to
    ? RouterLink.useLink(props as RouterLinkProps)
    : undefined;

  return {
    ...link,
    isLink,
    isClickable,
    href: computed(() => props.to ? link?.route.value.href : props.href)
  };
}
