import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";

export async function generateMetadata({ params }) {
    const slug = params.location;
    // Convert slug to city name (reverse the slug logic)
    const city = locations.find(
        (loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
    );
    const cityName = city || "Location";
    const url = `https://eazy-tax.in/import-export-code-registration/${slug}`;
    return {
        title: `Import Export Code Registration Services in ${cityName} | Eazy Tax`,
        description: `Need Import Export Code Registration Services in ${cityName} Call Eazy Tax, Best Import Export Code Registration in ${cityName}, Startup India Registration in ${cityName}.`,
        keywords: [
           `Import Export Code (IEC) Registration Services in ${cityName}`,
            `Startup India Registration Services in ${cityName}`,
            `Company Registration Services in ${cityName}`,
            
            `Bookkeeping Accounting Serivces in ${cityName}`,
            `Partnership Registration Services in ${cityName}`,
            `Chartered Accountant ${cityName}`,
            `CA Services ${cityName}`,
            `Business Registration ${cityName}`,
            `Eazy-Tax Bookkeeping Services ${cityName}`,
            `Import Export Code (IEC) Registration Services in ${cityName}`,
            `MSME Registration Services in ${cityName}`,
            ` LLP Registration Services in ${cityName}`,
            `Eazy-Tax Bookkeeping Services ${cityName}`,
            `GST Registration Services in ${cityName}`


        ],
      
        alternates: {
            canonical: url
        },
        robots: {
            index: true,
            follow: true
        }
    };
}

export default function LocationPage({ params }) {
    const location = params.location; // Ensure consistent usage of 'location'
    const locationName = locations.find(
        (loc) => loc.toLowerCase().replace(/\s+/g, '-') === location
    );
    console.log("Debugging Location:", location);
    console.log("Available Locations:", locations);

    if (!locationName) {
        return (
            <main className="max-w-2xl mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold">Location Not Found</h1>
            </main>
        );
    }

    return (
      <>
      
      
      

  


    <main className="w-full ">
     



<div className="relative bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 w-full h-[220px] xs:h-[3=200px] sm:h-[300px] md:h-[380px] lg:h-[400px] xl:h-[400px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      Import Export Code Registration Services in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://eazy-tax.in/">Eazy Tax</a>. If you are looking for <strong>Import Export Code Registration Services in {locationName}</strong>, we are your trusted partner. We provide <strong>Best Import Export Code Registration Services in {locationName},</strong> <strong>Startup India Registration Services in {locationName}, India.</strong>
    </p>
    <button
      className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white text-[10px] xs:t ext-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://eazy-tax.in/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          Import Export Code Registration Services in {locationName}
          <br />
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Expanding a business into global markets requires expert guidance, clear documentation, and seamless compliance. With a legacy of over 30 years in the field of finance, taxation, and regulatory advisory, our Chartered Accountancy firm offers best-in-class <strong>Import Export Code Registration Services in {locationName}</strong> to help businesses enter the global trade ecosystem confidently and compliantly.
          As a trusted CA firm based in New Friends Colony, New Delhi, founded by CA Avish Jain—a highly experienced Chartered Accountant with over 35+ years of hands-on expertise—we ensure that every importer, <a href="https://en.wikipedia.org/wiki/Import_certificates">exporter</a>, manufacturer, trader, and service provider receives accurate guidance, swift processing, and reliable documentation support.
          <br /><br />
          Whether you are a startup, MSME, entrepreneur, established trader, or corporate business, our <strong>Import Export Code Registration Services in {locationName}</strong> are designed to simplify your international trade journey and help you unlock new business opportunities across borders.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Import Export Code Registration Services in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/import.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
      Why Do You Need These Services?
      <br className="hidden xs:block" />
          </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      Businesses today operate in an environment where legal compliance, global expansion, and government recognition play a crucial role in sustainable growth. Companies and entrepreneurs need <strong>Import Export Code Registration Services in {locationName}</strong> to legally enter international markets, import quality materials, export products seamlessly, and receive foreign payments without restrictions. Without IEC, no business can clear customs, claim export incentives, or participate in global trade.<br /><br />
      Similarly, services like <strong>Startup India Registration Services in {locationName}</strong>, GST registration, and company incorporation are essential for building credibility, accessing government benefits, reducing tax burdens, and operating with full transparency. These professional compliance services not only help businesses avoid penalties and legal issues but also ensure smooth operations, proper documentation, and long-term financial stability.
    </p>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>








<div className="w-full mx-auto  py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black ">
    Our Comprehensive Service Range in {locationName}
  </h2>
  <p className="text-xs xs:text-sm sm:text-base mt-2  px-12 sm:mt-3 leading-[1.6] mx-auto">
    With over three decades of experience, our Chartered Accountancy firm offers an extensive portfolio of professional, compliance, and advisory solutions designed to support businesses at every stage right from inception to global expansion. <strong>Import Export Code Registration Services in {locationName}</strong>, Our services combine precision, expertise, and a deep understanding of Indian and international regulatory frameworks. Below is our complete and expanded service range, crafted to reflect trust, professionalism, and long-term commitment.
  </p>
  <div className="flex flex-col md:flex-row gap-6 px-12 md:gap-10">
    <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-6 leading-[1.6] list-none px-4 w-full md:w-1/2">
      <li>
        <span className="font-bold">⭐ 1. Import Export Code Registration Services in {locationName}</span><br />
        Our flagship offering, <strong>Import Export Code Registration Services in {locationName}</strong>, is designed for individuals, startups, MSMEs, and established companies planning to import goods, export products, or provide international services. We handle end-to-end DGFT documentation, compliances, digital signatures, and application filing to ensure a smooth and error-free IEC approval. From understanding your business type to successful issuance of your 10-digit IEC code, we provide full support and post-registration guidance including IEC modification, linking with PAN, annual updates, and DGFT compliance.
      </li>
      <li>
        <span className="font-bold">⭐ 2. Startup India Registration Services in {locationName}</span><br />
        We provide professional assistance for Startup India Registration, helping new entrepreneurs gain government recognition, tax exemptions, fundraising opportunities, and access to national-level startup support schemes. Our team ensures eligibility assessment, document preparation, online application, DPIIT recognition, compliance guidance, and handholding throughout the registration journey.
      </li>
      <li>
        <span className="font-bold">⭐ 3. Company Formation & Business Setup Services in {locationName}</span><br />
        We offer complete business setup solutions such as:<br />
        <ul className="list-disc pl-4">
          <li>Private Limited Company Registration</li>
          <li>LLP (Limited Liability Partnership) Formation</li>
          <li>Partnership Firm Registration</li>
          <li>One Person Company (OPC) Registration</li>
          <li>Sole Proprietorship Setup</li>
          <li>Section 8 Company Registration (NGOs & Non-profit entities)</li>
        </ul>
        Our experts guide you through compliance requirements, documentation, name approvals, filings, digital signature creation, and legal frameworks—ensuring your business is correctly structured from day one.
      </li>
      <li>
        <span className="font-bold">⭐ 4. GST Registration & Full GST Compliance Services in {locationName}</span><br />
        Our GST services help businesses stay compliant in a dynamic taxation environment. We provide:<br />
        <ul className="list-disc pl-4">
          <li>GST Registration</li>
          <li>Monthly GST Returns (GSTR-1, GSTR-3B)</li>
          <li>Annual GST Filing</li>
          <li>GST Audit</li>
          <li>Input Tax Credit Management</li>
          <li>E-invoicing and E-way Bill Support</li>
          <li>Advisory on GST Notices & Litigation</li>
        </ul>
      </li>
      <li>
        <span className="font-bold">⭐ 5. MSME/Udyam Registration Services in {locationName}</span><br />
        We help micro, small, and medium enterprises obtain their official Udyam Registration to unlock government incentives, subsidies, lower interest loans, credit facilities, and many more MSME benefits.
      </li>
    </ul>
    <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-6 leading-[1.6] list-none px-4 w-full md:w-1/2">
      <li>
        <span className="font-bold">⭐ 6. Accounting & Bookkeeping Services in {locationName}</span><br />
        Accurate financial records are essential for smooth operations. We deliver:<br />
        <ul className="list-disc pl-4">
          <li>Monthly bookkeeping</li>
          <li>Accounts preparation</li>
          <li>Ledger maintenance</li>
          <li>Bank reconciliation</li>
          <li>Inventory & expense tracking</li>
          <li>Financial statement preparation</li>
        </ul>
        Our accounting experts ensure transparency, clarity, and accuracy at every step.
      </li>
      <li>
        <span className="font-bold">⭐ 7. Income Tax Filing & Tax Planning Services in {locationName}</span><br />
        With 35+ years of taxation experience, we offer:<br />
        <ul className="list-disc pl-4">
          <li>Individual and Corporate Income Tax Filing</li>
          <li>Tax Audit</li>
          <li>TDS Filing & Compliance</li>
          <li>Advance Tax Planning</li>
          <li>Representation for Tax Notices</li>
          <li>Capital Gains Advisory</li>
          <li>International Taxation Support</li>
        </ul>
      </li>
      <li>
        <span className="font-bold">⭐ 8. ROC Compliance & Annual Filings Services in {locationName}</span><br />
        For companies and LLPs, we manage mandatory MCA/ROC filings such as:<br />
        <ul className="list-disc pl-4">
          <li>AOC-4, MGT-7, LLP-8, LLP-11</li>
          <li>Director KYC</li>
          <li>Shareholder/Director changes</li>
          <li>Charge creation</li>
          <li>DIN applications</li>
          <li>Annual compliance advisory</li>
        </ul>
      </li>
      <li>
        <span className="font-bold">⭐ 9. Digital Signature Certificate Services in {locationName}</span><br />
        We assist with the issuance, renewal, and management of Class 3 Digital Signatures required for GST filings, DGFT processes, MCA filings, e-tenders, and online verifications.
      </li>
      <li>
        <span className="font-bold">⭐ 10. Financial Advisory & Business Consultancy Services in {locationName}</span><br />
        We provide in-depth advisory services including:<br />
        <ul className="list-disc pl-4">
          <li>Business financial planning</li>
          <li>Investment guidance</li>
          <li>Working capital management</li>
          <li>Risk assessment</li>
          <li>Profitability improvement strategies</li>
          <li>Cash flow management</li>
        </ul>
        These services help businesses make informed decisions and accelerate growth.
      </li>
      
    </ul>
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Best Import Export Code Registration Services in {locationName}</strong>? Eazy Tax is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-9971669475</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://eazy-tax.in/">www.eazy-tax.in</a></li>
      <li>👉 <strong>Our Email Address</strong> – 
contact@eazy-tax.in </li>
    </ul>
  </div>
</div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Our Import Export Code Registration Services in {locationName}?
  </h2>
  <div className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    <p>With decades of experience and thousands of satisfied clients, we bring unmatched credibility and accuracy to the registration process.</p>
    <ul className="list-disc pl-4">
      <li><strong>✔ 30+ Years of Professional Legacy</strong><br />Our firm has been serving businesses for over three decades, offering expert advisory in taxation, compliance, registrations, and global trade documentation.</li>
      <li><strong>✔ Guided by CA Avish Jain (35+ Years of Expertise)</strong><br />Every IEC application is reviewed and processed under the supervision of a seasoned Chartered Accountant ensuring 100% accuracy and compliance.</li>
      <li><strong>✔ Fast & Smooth Online Registration</strong><br />We simplify the DGFT portal process and ensure error-free submission, minimizing delays.</li>
      <li><strong>✔ Affordable & Transparent Pricing</strong><br />No hidden charges — complete clarity and professional handling at every step.</li>
      <li><strong>✔ Support for Individuals, Startups & Corporates</strong><br />Whether you're a first-time exporter or a large company, our <strong>Import Export Code Registration Services in {locationName}</strong> are customized to your needs.</li>
      <li><strong>✔ Post-Registration Guidance</strong><br />We assist with:<ul className="list-disc pl-6"><li>IEC modification</li><li>Annual updates</li><li>DGFT compliance</li><li>Linking IEC with PAN and bank accounts</li><li>Export incentives and schemes</li></ul></li>
    </ul>
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mt-4">⭐ Benefits of Getting IEC with Us</h3>
    <ul className="list-disc pl-4">
      <li>✔ Start international trade legally and instantly</li>
      <li>✔ Receive foreign payments smoothly</li>
      <li>✔ Avail government export incentives</li>
      <li>✔ Expand business globally</li>
      <li>✔ No renewal required — IEC is issued for lifetime</li>
      <li>✔ Professional advisory throughout the journey</li>
    </ul>
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mt-4">⭐ Documents Required for IEC Registration</h3>
    <p>Our team helps you collect and prepare all required documents:</p>
    <ul className="list-disc pl-4">
      <li>PAN of Individual / Company</li>
      <li>Aadhaar of the applicant</li>
      <li>Business address proof</li>
      <li>Cancelled cheque / bank details</li>
      <li>Passport-size photograph</li>
    </ul>
    <p>We make the entire process effortless with our <strong>Import Export Code Registration Services in {locationName}</strong>.</p>
  </div>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
Choosing the right financial and compliance partner is essential for any business aiming for stability, growth, and global expansion. With over three decades of expertise, our firm stands committed to delivering trusted, accurate, and end-to-end professional services that empower businesses at every stage. From <strong>Import Export Code Registration Services in {locationName}</strong> to <strong>Startup India recognition Services in {locationName}</strong>, GST compliance, business registration, and financial advisory, we ensure your company remains fully compliant, future-ready, and positioned for success. Our customer-focused approach, deep domain knowledge, and commitment to transparency make us the preferred choice for entrepreneurs, MSMEs, exporters, importers, and established organizations across India. Partner with us to simplify your compliance journey and build a strong, secure foundation for long-term business growth.
  </p>
</div>

    </main>
      
      </>
    );
}





