import React from 'react';
import NewsLetter from '../components/NewsLetter';
import Blog from '../components/Blog';

const PrivacyPolicy = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}></div>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
        Privacy Policy
      </h1>
      <p
        style={{
          fontSize: '0.9rem',
          marginBottom: '50px',
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        NCON (we, our, us) is committed to protecting the privacy of our customers and website
        visitors. This Privacy Policy outlines the types of information we collect, how we use it,
        how we protect it, and the choices you have regarding your personal information. By using
        our website ([Your Website Address]) or our services, you consent to the data practices
        described in this Privacy Policy.
      </p>

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'sans-serif',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
        {/* Section 1 */}
        <div style={{ marginBottom: '20px' }}>
          <h2
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'rgb(249 115 22)',
              marginBottom: '10px',
            }}
          >
            1. Information We Collect
          </h2>
          <p>We collect information to provide and improve our services, and to communicate with you. This may include:</p>
          <p><strong>a. Personal Information:</strong> Name, email address, phone number, physical address, company details, and transaction/financial data (securely processed).</p>
          <p><strong>b. Non-Personal Information:</strong> Website usage data (IP address, browser type, OS, referral source, pages viewed, date/time) and cookies/tracking data.</p>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            2. How We Use Your Information
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>To provide and manage cargo container shipping services.</li>
            <li>To process transactions and send confirmations/invoices.</li>
            <li>To communicate about your account, services, and updates.</li>
            <li>To improve our website and services.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>To detect and prevent fraud or illegal activities.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            3. Data Sharing and Disclosure
          </h2>
          <p>We do not sell, rent, or lease your Personal Information. We may share data with:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><strong>Service Providers:</strong> For payment processing, data analysis, email delivery, etc.</li>
            <li><strong>Legal Requirements:</strong> If required by law, court, or to protect rights/safety.</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            4. Data Security
          </h2>
          <p>
            We use physical, technical, and administrative safeguards to protect your information. However, no transmission over the internet or storage method is 100% secure.
          </p>
        </div>

        {/* Section 5 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            5. Cookies and Other Tracking Technologies
          </h2>
          <p>We use cookies to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Remember preferences and settings.</li>
            <li>Analyze website traffic and patterns.</li>
            <li>Provide a personalized experience.</li>
          </ul>
          <p>You can disable cookies via your browser, but some website features may not work properly.</p>
        </div>

        {/* Section 6 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your Personal Information. You may also object to processing or request restriction. To exercise these rights, use the details in our “Contact Us” section.
          </p>
        </div>

        {/* Section 7 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            7. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies.
          </p>
        </div>

        {/* Section 8 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            8. Children’s Privacy
          </h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect information from them. If you believe a child has provided us with data, please contact us immediately.
          </p>
        </div>

        {/* Section 9 */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted here with an updated “Last Updated” date. Please review periodically.
          </p>
        </div>
      </div>

      <NewsLetter />
      <div style={{ marginBottom: '70px' }}></div>
    </div>
  );
};

export default PrivacyPolicy;