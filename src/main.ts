import { createApp, App as CreateApp } from 'vue';
import App from './App';

let app: CreateApp;

export function init(opts: { container: any, props: any }) {
  app = createApp(App, opts.props);
  app.mount(opts.container);
}

export function clean() {
  app.unmount();
}

if (process.env.NODE_ENV === 'development') {
  createApp(App, {
    website: 'https://audioeye.com',
    getSupport: 'https://audioeye.com/support',
    privacyPolicy: 'https://audioeye.com/privacy',
    supportArticle: 'https://support.duda.co',
    supportedLangs: 'English, French, Hebrew',
    supportedCountries: 'USA, France, Israel',
    marketingResources: 'https://resources.duda.co',
    desc: '<div style="font-family: Source Sans Pro; font-size: 15px; font-weight: normal; font-stretch: normal ;font-style: normal ;line-height: 1.69; letter-spacing: normal; color: #2f373a;"><p>Businesses and organizations are facing costly, time-consuming digital accessibility lawsuits because their online content isn’t accessible to individuals with disabilities. As much as 15% of the global population has some form of a disability.</p><p>An accessible website broadens your consumer market, improves your SEO and reduces your risk of a costly lawsuit.</p><h2>Thousands of brands trust AudioEye</h2><p>Some of the largest and most influential businesses and organizations in the world trust AudioEye for their digital accessibility compliance in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1.</p><ul><li><strong>AudioEye Standard:</strong> The best way to get started on your journey toward digital accessibility. AudioEye’s Standard solution tests for 400+ accessibility issues, and their patented automation fixes most accessibility issues automatically. AudioEye’s technology then continuously monitors the site with every user visit to track new and persistent issues. AudioEye Standard sites feature a visual toolkit that site users can use to adjust for common visual issues. Inside the toolbar is a link to a 24/7 help desk where site users can report any accessibility issues they may encounter.</li><li><strong>AudioEye Premium:</strong> AudioEye Premium provides a comprehensive digital accessibility solution, combining the forces of patented machine-learning technology with certified accessibility experts. In addition to all of the features in AudioEye Standard, certified accessibility experts can perform manual site audits and fix issues that automation can’t. In the event of legal action, AudioEye Premium customers receive advanced legal support through a Sustainable Testing and Remediation (STAR) Plan, line-by-line assistance in response documentation, and support throughout the legal process.</li></ul></div>',
  }).mount('#app');
}
