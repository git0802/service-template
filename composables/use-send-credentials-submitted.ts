import { ref } from 'vue';

export function useSendCredentialsSubmitted() {
  const email = ref('test@test.com');
  const password = ref('');

  return {
    email,
    password,
    workspaceProfileUrl: 'https://fakeimg.pl/400x300/282828/eae0d0',
    submitCredentials: () => {
      console.log('Submit credentials clicked');
    },
  };
}
