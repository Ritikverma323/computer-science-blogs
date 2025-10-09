// src/app/privacy-policy/page.tsx

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Computer Science Blogs website.',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="mb-4">
        Your privacy is important to us. It is Computer Science Blogs' policy to respect your privacy regarding any information we may collect from you across our website.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">1. Information We Collect</h2>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. For example, our visitor counter tracks non-identifiable metrics to gauge site traffic.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">2. How We Use Your Information</h2>
        <p>
          We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">3. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience. You have the option to accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">4. Links to Other Sites</h2>
        <p>
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>
      </section>

      <p className="mt-8 text-gray-500">
        This policy is effective as of 9 October 2025.
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;