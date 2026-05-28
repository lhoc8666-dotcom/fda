// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

/**
 * Track Google Ads conversion event for lead form submission
 * Conversion ID: AW-11529025982
 * Conversion Label: AqIiCN_ZpLIcEL7zu_kq
 */
export const trackConversion = () => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    // Google Ads Conversion Event
    window.gtag("event", "conversion", {
      send_to: "AW-11529025982/AqIiCN_ZpLIcEL7zu_kq"
    })
  }
}
