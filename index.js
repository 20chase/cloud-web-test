export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const target = "http://imz410.ust.hk:1180" + url.pathname + url.search;

    const modifiedRequest = new Request(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });

    return fetch(modifiedRequest);
  }
}