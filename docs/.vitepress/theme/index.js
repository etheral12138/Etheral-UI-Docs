import DefaultTheme from "vitepress/theme";
import etdesign from "et-design";
import "et-design/lib/src/icon/style/index.css";
import "et-design/lib/src/button/style/index.css"
export default {
    ...DefaultTheme,
    enhanceApp: async ({ app, router, siteData }) => {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(etdesign);
    },
};
