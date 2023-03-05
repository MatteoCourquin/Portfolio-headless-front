import md from 'markdown-it'
import mila from 'markdown-it-link-attributes'
export default defineNuxtPlugin(() => {
    const renderer = md()
    renderer.use(mila, {
        attrs: {
            target: "_blank",
            rel: "noopener",
        },
    });
    return {
        provide: {
            mdRenderer: renderer
        }
    }
})