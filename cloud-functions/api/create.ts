const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequestPost(context: any) {
  const pin = Math.floor(Math.random() * 9000) + 1000;
  return new Response(JSON.stringify({ pin: String(pin) }), {
    status: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

export async function onRequestOptions(context: any) {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function onRequest(context: any) {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: CORS_HEADERS,
  });
}
