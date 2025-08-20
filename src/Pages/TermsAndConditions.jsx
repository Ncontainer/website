import React from 'react';
import NewsLetter from '../components/NewsLetter';
import Blog from '../components/Blog';

const TermsAndConditions = () => {
  return (
  
    <div style={{   }}>
        <div style={{marginBottom: '20px'}} >
            
        </div>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Terms & Conditions</h1>
      <p style={{ fontSize: '0.9rem', marginBottom: '50px' ,maxWidth: '800px',textAlign:'center',margin:'0 auto'}}>
        These Terms and Conditions (Agreement) govern the use of the [Your Website Address] website and the provision of cargo container shipping services by NCON (the Company) to its customers (the Customer). By accessing this website or by booking, confirming, or engaging in any services provided by the Company, the Customer agrees to be bound by these Terms and Conditions.
      </p>

      {/* Section 1: Definitions */}
      <div style={{ maxWidth: '800px',margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333'}}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>1. Definitions</h2>
        <p><strong>Company:</strong> NCON, its employees, agents, and representatives.</p>
        <p><strong>Customer:</strong> Any party using the Company's services, including their agents, employees, or representatives.</p>
        <p><strong>Goods:</strong> The cargo, packages, or items tendered to the Company for transportation under this Agreement.</p>
        <p><strong>Services:</strong> All operations undertaken by the Company in relation to the Goods, including but not limited to transportation, storage, handling, and documentation.</p>
        <p><strong>Bill of Lading:</strong> The document issued by the Company evidencing the receipt of the Goods for shipment and the terms of carriage.</p>
      </div>

      {/* Section 2: Scope of Services */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>2. Scope of Services</h2>
        <p>
          The Company agrees to provide the Services as specified in the Bill of Lading or a mutually agreed-upon service contract. The Company acts as a carrier and is responsible for transporting the Goods and issuing a Bill of Lading upon the origin to the designated destination, subject to the terms herein. Unless otherwise agreed in writing, the Services do not include packing, crating, loading, or unloading of the Goods.
        </p>
      </div>

      {/* Section 3: Customer's Responsibilities */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>3. Customer's Responsibilities</h2>
        <p>The Customer warrants that:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>All information provided regarding the Goods, including weight, dimensions, content, and classification, is accurate, complete, and legally compliant.</li>
          <li>The Goods are properly and safely packed, marked, and labeled for international transportation.</li>
          <li>The Goods do not contain any illegal, dangerous, or prohibited items, as per applicable local and international laws.</li>
          <li>The Customer will furnish all necessary permits, licenses, and documentation required for customs clearance and transportation.</li>
          <li>The Customer will indemnify the Company against any loss, damage, or expense arising from a breach of these warranties.</li>
        </ul>
      </div>

      {/* Section 4: NCON's Liability */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>4. NCON's Liability</h2>
        <p>
          The Company's liability for any loss or damage to the Goods shall be limited as per standard international conventions, such as [Reference a specific convention, e.g., the Hague-Visby Rules] or a specific monetary value per package as stated in the Bill of Lading. The Company shall not be liable for:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Loss or damage caused by acts of God, public enemies, war, civil commotion, or government authority.</li>
          <li>Loss or damage caused by the inherent vice or nature of the Goods, including spoilage or natural decay.</li>
          <li>Loss or damage caused by improper or insufficient packing, marking, or labeling by the Customer.</li>
          <li>Indirect, consequential, or incidental loss, including loss of profit or revenue.</li>
          <li>Any loss or damage occurring before the Goods are received by the Company or after they are delivered at the destination.</li>
        </ul>
      </div>

      {/* Section 5: Freight and Charges */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>5. Freight and Charges</h2>
        <p>a. All freight and other charges are payable by the Customer in full, without deduction or set-off, as per the payment terms specified in the invoice.</p>
        <p>b. The Company reserves the right to hold a lien on the Goods for all outstanding charges. The Company may, at its sole discretion and without prior notice, sell or dispose of the Goods to recover any unpaid charges.</p>
        <p>c. The Customer shall be responsible for all costs associated with customs duties, taxes, and other governmental charges.</p>
      </div>

      {/* Section 6: Claims */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>6. Claims</h2>
        <p>
          a. Any claim for loss or damage to the Goods must be submitted in writing to the Company within [Specify a time frame, e.g., 7 days] of the Goods' delivery. Failure to do so will be deemed as a waiver of the claim.
        </p>
        <p>
          b. Legal proceedings against the Company must be initiated within [Specify a time frame, e.g., 1 year] from the date of delivery or from the date the Goods should have been delivered.
        </p>
      </div>

      {/* Section 7: Governing Law and Jurisdiction */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>7. Governing Law and Jurisdiction</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts in [Your City/State].
        </p>
      </div>

      {/* Section 8: Force Majeure */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>8. Force Majeure</h2>
        <p>
          The Company shall not be liable for any delay or failure in performing its obligations under this Agreement if such delay or failure is caused by an event beyond its reasonable control, including but not limited to natural disasters, acts of war, strikes, and government regulations.
        </p>
      </div>

      {/* Section 9: General Provisions */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgb(249 115 22)', marginBottom: '10px' }}>9. General Provisions</h2>
        <p>a. This Agreement constitutes the entire understanding between the parties.</p>
        <p>b. If any provision of this Agreement is found to be invalid, the remaining provisions shall continue in full force and effect.</p>
        <p>c. The Company reserves the right to amend these Terms and Conditions from time to time. The current version will be available on the Company's website.</p>
      </div>
      
    </div>
    <NewsLetter/>
      <div style={{marginBottom: '70px'}} >
            
        </div>
  </div>
  );
};

export default TermsAndConditions;