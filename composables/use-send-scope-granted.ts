export function useSendScopeGranted() {
  return async (scopeService: string) => {
    console.log('Grant scope clicked', scopeService);
  };
}
