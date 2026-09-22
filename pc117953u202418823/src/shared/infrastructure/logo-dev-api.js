const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

/**
 * Infrastructure adapter for building Logo.dev image URLs.
 *
 * @summary Encapsulates the logic required to resolve brand logo images
 * from the Logo.dev external service for a given domain.
 * @author Andy Pillaca Gonzales
 */
export class LogoDevApi {
    /**
     * Builds a logo URL for the given domain.
     *
     * @param {string} domain - The bare domain name (e.g. 'wikipedia.org').
     * @returns {string} The fully qualified URL to the domain's logo image.
     */
    getUrlToLogoForDomain = domain => `${logoApiUrl}/${domain}?token=${apiKey}`;
}
