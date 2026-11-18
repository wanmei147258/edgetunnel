export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // 只要不是通过您的自定义域名访问，直接返回 403 拒绝，不执行后续代码
  if (!url.hostname.endsWith('zhengchao666888.ccwu.cc')) {
    return new Response('Access Denied', { status: 403 });
  }

  return await context.next();
}
