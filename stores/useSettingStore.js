import { defineStore } from "pinia";

export const useSettingStore = defineStore("settings", {
    state: () => ({
        isCookieAlertShow: true,
        isOpenSearch: false,
        theme: 'dark-mode',
    }),

    actions: {
        closeCookieAlert() {
            this.isCookieAlertShow = false;
        },
        openSearchModal() {
            this.isOpenSearch = true;
        },
        closeSearchModal() {
            this.isOpenSearch = false;
        },
        applyTheme(newTheme) {
            this.theme = newTheme;
            document.body.className = newTheme;
        },

        toggleTheme() {
            const newTheme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
            this.applyTheme(newTheme);
        },
    },
    persist: true,
});