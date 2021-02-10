export default function runAnalytics(page) {
    if (process.env.REACT_APP_SIM === undefined) {
        window.gtag('event', 'page_view', {
            page_title: 'Sad Albert - ' + page,
            page_location: '/sad-albert/' + page,
            page_path: page,
        })
    }
}