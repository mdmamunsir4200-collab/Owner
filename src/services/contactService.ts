export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  projectType?: string;
  timeline?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  sentFrom?: string;
}

const PRIMARY_API_URL = 'https://server-host-chi.vercel.app/api/contact';
const LOCAL_PROXY_URL = '/api/contact';

/**
 * Sends a contact message using the multi-account rotating Nodemailer Vercel service,
 * with automatic fallback to the local server proxy.
 */
export async function sendContactEmail(payload: ContactPayload): Promise<ContactResponse> {
  const fullSubject = payload.subject?.trim()
    ? `${payload.subject.trim()} [${payload.projectType || 'General'}]`
    : `[Portfolio Inquiry] ${payload.projectType || 'General'} ${payload.timeline ? `(${payload.timeline})` : ''}`.trim();

  const formattedMessage = [
    payload.projectType ? `Domain / Interest: ${payload.projectType}` : null,
    payload.timeline ? `Timeline / Scope: ${payload.timeline}` : null,
    payload.projectType || payload.timeline ? '----------------------------------------' : null,
    payload.message.trim(),
  ]
    .filter(Boolean)
    .join('\n');

  const bodyData = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    subject: fullSubject,
    message: formattedMessage,
  };

  // Try direct deployed Vercel service first
  try {
    const res = await fetch(PRIMARY_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok && data.success !== false) {
      return {
        success: true,
        message: 'Your message was successfully emailed to Asraful!',
        sentFrom: data.sentFrom,
      };
    }
    if (data.message) {
      throw new Error(data.message);
    }
    throw new Error(`Server returned status ${res.status}`);
  } catch (primaryErr: any) {
    // Fallback: try local server endpoint if primary direct call fails
    try {
      const res = await fetch(LOCAL_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        return {
          success: true,
          message: 'Your message was successfully emailed to Asraful!',
          sentFrom: data.sentFrom,
        };
      }
      throw new Error(data?.message || `Proxy server returned status ${res.status}`);
    } catch (fallbackErr: any) {
      throw new Error(
        fallbackErr?.message || primaryErr?.message || 'Unable to connect to contact service.'
      );
    }
  }
}
