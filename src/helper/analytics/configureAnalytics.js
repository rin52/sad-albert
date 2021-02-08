export default function configureAnalytics() {
    if (process.env.REACT_APP_SIM === undefined) {
        window.gtag('config', 'G-QY4K1FJZTN', { 'page_title': document.title, page_path: '/sad-albert/' });          
    }
}