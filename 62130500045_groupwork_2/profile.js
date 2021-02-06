const app = {
    data() {
        return {
            // msg: 'Hello, Vue3',
            // shown: true,
            // url: 'http://www.sit.kmutt.ac.th'
            username: 'Apple',
            name: 'Niraphon Jongkraijak',
            ar: 'Articles',
            a: '38',
            foll: 'Followers',
            m: '980',
            rate: 'Rating',
            o: '8.9',
            bChat: 'Chat',
            bFoll: 'Follow',
            pic: "./images/ple.jpg"
        }
    }
    
}
// Vue.createApp(app).mount('#app')
mountedApp = Vue.createApp(app).mount('#app') 