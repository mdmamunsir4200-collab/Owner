export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.',
    });
  }

  try {
    const upstreamRes = await fetch('https://server-host-chi.vercel.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data: any = await upstreamRes.json().catch(() => ({}));
    if (!upstreamRes.ok || (data && data.success === false)) {
      return res.status(upstreamRes.status || 500).json({
        success: false,
        message: data?.message || 'Upstream contact service returned an error.',
      });
    }

    return res.json({
      success: true,
      message: 'Email sent successfully!',
      sentFrom: data.sentFrom,
    });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return res.status(500).json({
      success: false,
      message: err?.message || 'Failed to dispatch email.',
    });
  }
}
