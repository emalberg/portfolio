# Security Headers Configuration

This document explains the security headers implemented in the portfolio and their purpose.

## Overview

Security headers are HTTP response headers that instruct browsers on how to handle your website securely. They provide protection against various web attacks and improve overall security posture.

## Implemented Security Headers

### 1. X-Frame-Options: DENY
**Purpose:** Prevents clickjacking attacks
**Value:** `DENY`
**Protection:** Stops malicious websites from embedding your portfolio in iframes to trick users

### 2. X-Content-Type-Options: nosniff
**Purpose:** Prevents MIME type sniffing
**Value:** `nosniff`
**Protection:** Stops browsers from guessing file types, preventing MIME confusion attacks

### 3. Referrer-Policy: origin-when-cross-origin
**Purpose:** Controls referrer information sharing
**Value:** `origin-when-cross-origin`
**Protection:** Balances privacy with functionality - sends full referrer for same-origin requests, limited info for cross-origin

### 4. X-XSS-Protection: 1; mode=block
**Purpose:** Enables browser XSS filtering
**Value:** `1; mode=block`
**Protection:** Additional layer of protection against cross-site scripting attacks

### 5. Permissions-Policy
**Purpose:** Controls browser feature access
**Value:** `camera=(), microphone=(), geolocation=(), payment=(), usb=()`
**Protection:** Prevents unauthorized access to sensitive browser features

### 6. Content-Security-Policy (CSP)
**Purpose:** Controls resource loading
**Value:** Comprehensive policy allowing necessary resources
**Protection:** Prevents code injection attacks by controlling which resources can be loaded

#### CSP Breakdown:
- `default-src 'self'`: Only allow resources from same origin by default
- `script-src 'self' 'unsafe-inline' 'unsafe-eval'`: Allow scripts from same origin and inline scripts (required for Next.js)
- `style-src 'self' 'unsafe-inline'`: Allow styles from same origin and inline styles (required for Tailwind)
- `img-src 'self' data: blob: https: http:`: Allow images from various sources (needed for Strapi images)
- `font-src 'self' data:`: Allow fonts from same origin and data URIs
- `connect-src 'self' https: http:`: Allow API calls to Strapi
- `frame-ancestors 'none'`: Prevent embedding in frames
- `base-uri 'self'`: Restrict base tag usage
- `form-action 'self'`: Restrict form submissions to same origin

### 7. Strict-Transport-Security (HSTS)
**Purpose:** Enforces HTTPS connections
**Value:** `max-age=31536000; includeSubDomains; preload`
**Protection:** Forces HTTPS connections and prevents downgrade attacks

### 8. X-DNS-Prefetch-Control: off
**Purpose:** Prevents DNS prefetching
**Value:** `off`
**Protection:** Prevents information disclosure through DNS prefetching

## Testing Security Headers

### Method 1: Browser Developer Tools
1. Open your portfolio in a browser
2. Open Developer Tools (F12)
3. Go to Network tab
4. Refresh the page
5. Click on any request
6. Check Response Headers section

### Method 2: Online Security Scanner
- Use tools like [SecurityHeaders.com](https://securityheaders.com)
- Enter your portfolio URL
- Get a security score and recommendations

### Method 3: Command Line
```bash
# Test with curl
curl -I https://your-portfolio-url.com

# Test with httpie
http HEAD https://your-portfolio-url.com
```

### Method 4: Test Endpoint
Visit `/api/security-test` to see headers in action.

## Customization

### For Development
The current configuration works for both development and production. For development with Strapi on localhost, the CSP allows HTTP connections.

### For Production
Update the `next.config.ts` file to:
1. Replace `your-strapi-domain.com` with your actual Strapi production URL
2. Consider tightening CSP for production-only features

### Adding Analytics
When you add analytics (Google Analytics, PostHog), update the CSP:
```typescript
"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://app.posthog.com",
"connect-src 'self' https: http: https://www.google-analytics.com https://app.posthog.com",
```

## Security Benefits

### Attack Prevention
- **Clickjacking**: Prevented by X-Frame-Options
- **XSS**: Mitigated by CSP and X-XSS-Protection
- **MIME Confusion**: Prevented by X-Content-Type-Options
- **Data Leakage**: Reduced by Referrer-Policy

### Privacy Protection
- **Referrer Control**: Limits information shared with external sites
- **Feature Access**: Prevents unauthorized access to browser features
- **DNS Leakage**: Prevents DNS prefetching

### Compliance
- **Security Standards**: Meets modern web security best practices
- **Browser Compatibility**: Works with all modern browsers
- **Performance**: Minimal impact on site performance

## Monitoring

### Security Score
Monitor your security score using:
- [SecurityHeaders.com](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)

### Regular Audits
- Test headers after major updates
- Verify CSP doesn't break functionality
- Check for new security header recommendations

## Troubleshooting

### Common Issues

1. **CSP Blocking Resources**
   - Check browser console for CSP violations
   - Add necessary sources to CSP policy
   - Test in development first

2. **Analytics Not Working**
   - Add analytics domains to CSP
   - Check script-src and connect-src directives

3. **Images Not Loading**
   - Verify img-src allows your image sources
   - Check Strapi domain is included

### Debug Mode
Enable CSP reporting in development:
```typescript
"report-uri /api/csp-report",
"report-to csp-endpoint",
```

## Future Enhancements

### Advanced CSP
- Implement nonce-based CSP for better security
- Add CSP reporting for monitoring violations
- Use strict-dynamic for better compatibility

### Additional Headers
- Cross-Origin-Embedder-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Resource-Policy

### Monitoring
- Set up CSP violation reporting
- Monitor security header compliance
- Regular security audits
