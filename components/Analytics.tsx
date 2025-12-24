'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function Analytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Check if analytics cookies are accepted
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      if (consent) {
        try {
          const preferences: CookiePreferences = JSON.parse(consent)
          setAnalyticsEnabled(preferences.analytics)
        } catch (error) {
          console.error('Error parsing cookie consent:', error)
        }
      }
    }

    // Check on mount
    checkCookieConsent()

    // Listen for cookie acceptance events
    const handleCookieAccepted = () => {
      checkCookieConsent()
    }

    window.addEventListener('cookieAccepted', handleCookieAccepted)
    
    return () => {
      window.removeEventListener('cookieAccepted', handleCookieAccepted)
    }
  }, [])

  // Don't render scripts if analytics not enabled
  if (!analyticsEnabled || !process.env.NEXT_PUBLIC_GA_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });

          // Track phone clicks
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href^="tel:"]')) {
              gtag('event', 'phone_call', {
                event_category: 'contact',
                event_label: 'header_phone'
              });
            }
          });

          // Track scroll depth
          let scrollTracked = false;
          window.addEventListener('scroll', function() {
            if (!scrollTracked && (window.scrollY / document.body.scrollHeight) > 0.5) {
              gtag('event', 'scroll_depth', {
                event_category: 'engagement',
                event_label: '50_percent'
              });
              scrollTracked = true;
            }
          });
        `}
      </Script>

      {/* Facebook Pixel (if marketing cookies accepted) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}