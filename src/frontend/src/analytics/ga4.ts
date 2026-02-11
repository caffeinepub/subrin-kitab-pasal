/**
 * Google Analytics 4 (GA4) integration helper
 * 
 * Reads GA4 Measurement ID from environment variable and conditionally
 * loads gtag.js script. If no ID is configured, operates as a safe no-op.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

/**
 * Initialize Google Analytics 4 tracking
 * Safe to call multiple times - will only initialize once
 */
export function initGA4(): void {
  // If no measurement ID is configured, skip initialization
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '') {
    console.info('GA4: No measurement ID configured, analytics disabled');
    return;
  }

  // Check if already initialized
  if (window.gtag) {
    console.info('GA4: Already initialized');
    return;
  }

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };

    // Configure gtag
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
    });

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    console.info('GA4: Initialized with ID:', GA_MEASUREMENT_ID);
  } catch (error) {
    console.error('GA4: Failed to initialize', error);
  }
}

/**
 * Track a custom event
 * Safe to call even if GA4 is not initialized
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>): void {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track a page view
 * Safe to call even if GA4 is not initialized
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
