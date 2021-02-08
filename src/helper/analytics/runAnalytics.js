export default function runAnalytics(page) {
    if (process.env.REACT_APP_SIM === undefined) {
        window.gtag('event', 'screen_view', {
            'app_name': 'Sad-Albert',
            'screen_name': page
          });
          
    }
}