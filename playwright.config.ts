import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000, // Set global timeout
    workers:1,
    use: {
        browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
        baseURL: 'https://partner-ea.ppr.exocad.com/',
        headless: false, // Set to true for headless execution
        screenshot: 'on', // Capture screenshots on failure
        video: 'retain-on-failure', // Capture video on failure
        trace: 'on-first-retry', // Capture tracing data
    },
    projects:[
        {
            name: 'smoke',
            grep: /@smoke/,
        },
    ],
    reporter: [['list'], ['html', { open: 'never' }]], // Set reporters
});