import type { App } from 'vue';

import TestImageComponent from './components/TestImageComponent.vue'

export default {
    install(app: App) {
        app.component('TestImageComponent', TestImageComponent)
    }
}

export { TestImageComponent }