import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

const loadExternalLibrary = (url: string): Promise<Event> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'module';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

//const externalLibraryUrl = 'http://localhost:5173/my-component-library.js';
const externalLibraryUrl = 'http://localhost:5173/my-library-vue-ts.es.js';
loadExternalLibrary(externalLibraryUrl)
    .then(() => {
        // External library script exists, perform actions here
        //@ts-ignore
        if (window['custom_plugin']) {
            //@ts-ignore
            window['custom_plugin'].install(app);
            app.mount('#app');
        }
    })
    .catch(() => {
        // External library script does not exist
        console.error('External library script not found');
        app.mount('#app');
    });

