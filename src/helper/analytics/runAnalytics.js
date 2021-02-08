export default function runAnalytics(page) {
    if (process.env.REACT_APP_SIM === undefined) {
        window.gtag('config', 'G-QY4K1FJZTN', { 'page_title': document.title, page_path: '/sad-albert/' });
        window.gtag('event', 'screen_view', {
            'app_name': 'Sad-Albert',
            'screen_name': page
          });
          
    }
}