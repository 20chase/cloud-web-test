export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "http://imz410.ust.hk:1180" + url.pathname + url.search;

    const proxyRequest = new Request(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual'
    });

    const response = await fetch(proxyRequest);

    // 复制响应（包括 401 challenge）
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
}