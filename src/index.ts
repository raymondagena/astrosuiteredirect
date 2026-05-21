export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/astrosuite')) {
      // Remove /astrosuite from the path
      let newPath = url.pathname.replace(/^\/astrosuite/, '');

      // Ensure empty path becomes /
      if (newPath === '') {
        newPath = '/';
      }

      const targetUrl =
        `https://astrosuite.agenaastro.com${newPath}${url.search}`;

      // Clone request while changing URL
      const proxyRequest = new Request(targetUrl, request);

      return fetch(proxyRequest);
    }

    // Default: continue to normal origin
    return fetch(request);
  }
};
