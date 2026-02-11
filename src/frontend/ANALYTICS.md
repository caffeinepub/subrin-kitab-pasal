# Google Analytics 4 Setup

This website includes Google Analytics 4 (GA4) tracking to help you understand visitor behavior and traffic patterns.

## How to Enable Analytics

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use an existing one)
3. Navigate to **Admin** → **Data Streams** → Select your web stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Set the following environment variables before building your site:

**For local development:**
Create a `.env` file in the `frontend` directory:

