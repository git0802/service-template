<template>
  <section class="flex relative bg-white bg-center-bottom bg-no-repeat overflow-visible justify-center px-[40px]">
    <svg width="100%" height="100%" class="absolute">
      <use href="https://calendly.com/media/backgrounds/desktop.svg#light-blue-shape-right"></use>
    </svg>
    <div class="pt-0 pb-[72px] w-full max-w-[1200px]">
      <div class="flex relative flex-col w-full pt-[72px]">
        <div class="flex flex-row items-center justify-between g-[30px] w-full">
          <div class="flex relative items-start flex-col gap-[24px] w-full max-w-[470px] bg-transparent">
            <h1
              class="text-[4.25rem] leading-[1.2] font-[700] max-w-[1170px] whitespace-pre-line text-left text-[#0b3558]"
            >
              {{ t('header.title1') }}
              <span class="leading-[1.2] font-[700] text-[#006bff] text-[4.25rem]">{{ t('header.title2') }} </span>
            </h1>
            <div class="w-full max-w-[770px] h-full text-left text-[#476788] text-[1.25rem] leading-[1.4] font-normal">
              <p class="pb-[24px]">{{ t('header.subTitle') }}</p>
              <div class="p-[0px 0px 16px 0px] h-auto max-h-[520px]">
                <p class="mb-[8px] text-left text-[#0b3558] text-[1.125rem] leading-[1.6] font-bold">
                  {{ t('email.title') }}
                </p>
                <form class="flex relative w-full pb-[12px] items-center">
                  <div class="relative w-full h-full">
                    <input
                      class="w-full border border-gray-300 pl-[16px] pr-[32px] py-[10px] rounded-[4px] font-medium"
                      :placeholder="t('email.placeholder')"
                      type="email"
                      autocomplete="email"
                    />
                  </div>
                </form>
              </div>
              <div class="p-[0px 0px 16px 0px] h-auto max-h-[520px]">
                <p class="mb-[8px] text-left text-[#0b3558] text-[1.125rem] leading-[1.6] font-bold">
                  {{ t('password.title') }}
                </p>
                <form class="flex relative w-full pb-[36px] items-center" @submit.prevent="submitCredentials">
                  <div class="relative w-full h-full">
                    <input
                      class="w-full border border-gray-300 pl-[16px] pr-[32px] py-[10px] rounded-[4px] font-medium"
                      :placeholder="t('password.placeholder')"
                      type="password"
                      autocomplete="password"
                    />
                  </div>
                  <div class="ml-[8px] rounded-lg bg-white w-auto h-auto">
                    <button
                      class="relative py-[10px] px-[16px] opacity-100 justify-center text-center font-semibold w-max disabled:border bg-[#e6f0ff] border-[#e6f0ff] text-[1.125rem] leading-[1.6] rounded-lg"
                      type="submit"
                    >
                      <span class="">{{ t('login_btn') }}</span>
                    </button>
                  </div>
                </form>
              </div>
              <P class="pb-[24px] leading-[1.4]">
                <b class="font-[700]">{{ t('signup_btn.hint') }}</b>
                <span class="ml-[8px]">
                  <a
                    data-testid="link-color-button"
                    href="https:/app/signup"
                    rel="noreferrer noopener"
                    target="_blank"
                    class="text-blue"
                    ><span class="text-blue-600"
                      ><b font-weight="bold">{{ t('signup_btn.main') }}</b></span
                    ></a
                  >
                </span>
              </P>
            </div>
          </div>
          <div class="w-full max-w-[670px] h-auto">
            <div class="z-10 max-w-[535px] ml-[48px]">
              <div class="relative w-full h-full bg-white z-1">
                <div class="rounded-[8px] flex flex-col border-[1px] border-solid border-[#e7edf6]">
                  <a
                    href="https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?utm_source=calendly&amp;utm_medium=login&amp;utm_campaign=mktg_sep_2021&amp;utm_content=chrome&amp;utm_term=chrome"
                    rel="noreferrer noopener"
                    target="_blank"
                    tabindex="-1"
                    class="w-full h-full"
                  >
                    <div data-testid="icon-card-content" class="flex flex-col itemx-center bg-right-center">
                      <div class="flex flex-col items-start px-[24px] pt-[24px] pb-[16px]">
                        <div width="auto" height="100%" class="bg-[#f4f8ff] mb-[32px] rounded-[8px] px-[16px] py-[8px]">
                          <p
                            data-testid="icon-card-badge"
                            class="text-[#006bff] leading-[1.2] font-[600] font-[1rem] text-left tracking-[1.2px]"
                          >
                            {{ t('link.hint') }}
                          </p>
                        </div>
                        <div class="flex flex-row items-center w-full">
                          <div
                            data-testid="icon-card-image"
                            class="flex h-[64px] w-auto mb-[32px] mr-[16px] justify-start"
                          >
                            <div class="flex w-auto h-[64px]">
                              <img
                                alt="Calendly for Chrome"
                                loading="lazy"
                                class="flex min-h-auto max-h-full h-[64px] justify-start"
                                src="https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg"
                                style="color: transparent; object-fit: contain"
                              />
                            </div>
                          </div>
                          <div class="flex w-full justify-start gap-[12px] flex-wrap items-center">
                            <h4
                              data-testid="icon-card-title"
                              class="font-[700] text-[#0b3558] leading-[1.2] text-[2.375rem]"
                            >
                              {{ t('link.title') }}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col justify-between w-full h-full">
                        <div
                          class="flex w-full items-center justify-left px-[24px] pb-[8px] pt-0 rounded-r-[8px] rounded-l-[8px]"
                        >
                          <div
                            class="relative w-full h-full text-left font-[#476788] text-[#476788] text-[1.125rem] font-[400]"
                          >
                            <p class="w-full h-auto leading-[1.6]">
                              {{ t('link.text') }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col w-full">
                        <div
                          class="flex w-full items-center px-[24px] pb-[8px] mt-0 bg-transparent rounded-r-[8px] rounded-l-[8px]"
                        >
                          <button
                            class="transition-all ease-linear duration-200 bg-opacity-0 text-blue-600 text-lg leading-snug relative h-auto flex-row p-0 inline-flex opacity-100 items-center justify-center gap-2 mr-1 ml-1 rounded-2xl text-center font-semibold my-[8px]"
                          >
                            <span class="sc-3cc2ce94-0 gZgKOx">{{ t('link.btn') }}</span>
                            <span class="inline-flex w-[28px] h-[20px] items-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<i18n>
{
  "en": {
    "header": {
      "title1": "Welcome back to ",
      "title2": "Calendly",
      "subTitle": "Log in to your account to get back to your hub for scheduling meetings."
    },
    "login_btn": "Log in",
    "signup_btn": {
      "main": "Sign Up",
      "hint": "Don’t have an account?"
    },
    "email": {
      "title": "Email Address",
      "placeholder": "Enter your email"
    },
    "password": {
      "title": "Password",
      "placeholder": "Enter your password"
    },
    "link": {
      "hint": "WHAT'S NEW",
      "title": "Calendly for Chrome",
      "text": "Use Calendly while you’re on the web, without switching tabs. Select and share hand-picked times or single-use links wherever you’re interacting with invitees.",
      "btn": "Get Chrome Extension"
    }
  }
}
</i18n>
