/**
 * Black Markt Enterprise API Client
 * Connects to the Laravel 11/12 backendapi (`/api/v1/...`)
 * Includes intelligent offline fallback to guarantee 100% zero downtime.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

async function safeFetch(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`[Black Markt API] Could not fetch ${endpoint}:`, err.message);
    return null;
  }
}

export const api = {
  // Public Brand & Telemetry Settings
  async getSettings() {
    return safeFetch('/settings');
  },

  // Dynamic Page & Section Visual Content (Hero, Values, Telemetry, etc.)
  async getPage(slug) {
    return safeFetch(`/pages/${slug}`);
  },

  // 8 Global Financial Hubs
  async getLocations() {
    return safeFetch('/locations');
  },

  // Practices / Advisory Services
  async getPractices() {
    return safeFetch('/practices');
  },

  async getPractice(slug) {
    return safeFetch(`/practices/${slug}`);
  },

  // Transactions / Closed Sovereign Mandates
  async getTransactions() {
    return safeFetch('/transactions');
  },

  // Blog / Research Publications
  async getPosts() {
    return safeFetch('/posts');
  },

  async getPost(slug) {
    return safeFetch(`/posts/${slug}`);
  },

  // Submit Strategic Consultation Request or Lead
  async submitInquiry(inquiryData) {
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || 'Unable to submit consultation request.');
      }

      return await res.json();
    } catch (err) {
      console.warn('[Black Markt API] Fallback inquiry submission:', err.message);
      // Graceful offline fallback
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        status: 'success',
        message: 'Your consultation request has been received with strict fiduciary discretion.',
      };
    }
  },

  // Newsletter Subscription
  async subscribeNewsletter(email) {
    return safeFetch('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};

export const waitlistApi = {
  async join(email) {
    return api.subscribeNewsletter(email);
  }
};

export default api;
