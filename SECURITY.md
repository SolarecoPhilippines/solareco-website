# Security Notes

This first version is a static website foundation with no customer accounts, no database, no file upload feature, and no connected quote-form backend.

## Rules for Future Updates

- Never commit secrets, API keys, passwords, private certificates, or production credentials.
- Review all public PDF downloads before publishing them to confirm they are approved, current, and safe to share.
- Add server-side validation, spam protection, and rate limiting before enabling quote-form submission.
- Store future email API credentials in environment variables, not in source code.
- Enable two-factor authentication for GitHub, Vercel, and GoDaddy accounts.
- Protect Vercel preview deployments before approval when unpublished business or product material is included.

