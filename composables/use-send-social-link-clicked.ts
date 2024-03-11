export async function useSendSocialLinkClicked() {
  return async (socialService: string) => {
    console.log('Social link clicked', socialService);
  };
}
