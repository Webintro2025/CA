import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";

export async function generateMetadata({ params }) {
    const slug = params.location;
    // Convert slug to city name (reverse the slug logic)
    const city = locations.find(
        (loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
    );
    const cityName = city || "Location";
    const url = `https://eazy-tax.in/bookkeeping-accounting-services-in/${slug}`;
    return {
        title: `Bookkeeping Accounting Services in ${cityName} | Eazy Tax`,
        description: `Need Bookkeeping Accounting Services in ${cityName} Call Eazy Tax, Best Bookkeeping Accounting Services in ${cityName}, Startup India Registration in ${cityName}.`,
        keywords: [
         
            
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
     Bookkeeping Accounting Services in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://eazy-tax.in/">Eazy Tax</a>, If You Are Looking For <strong>Bookkeeping Accounting Services in {locationName}</strong>, We Are The Best Option For You. We Provide Best GST Registration Services in {locationName}, Bookkeeping Accounting Services in {locationName}, Import Export Code (IEC) Registration Services in {locationName}, India.
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
          Bookkeeping Accounting Services in {locationName}
          <br />
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Bookkeeping Accounting Services in {locationName} – Trusted, Accurate & Professional Financial Support for Every Business<br />
          With a legacy of over 30 years, our Chartered Accountancy firm in New Friends Colony, New Delhi, has been a beacon of trust, precision, and financial excellence. As one of India’s most reliable CA firms, we offer end-to-end <strong>Bookkeeping Accounting Services in {locationName}</strong>, backed by deep industry knowledge, unmatched professionalism, and a commitment to helping businesses stay compliant, structured, and financially strong.<br /><br />
          Our expert team supports startups, MSMEs, large corporations, LLPs, and global businesses with a comprehensive suite of financial and registration services. Whether you need day-to-day <strong>Bookkeeping Accounting Services in {locationName}</strong>, GST advisory, business registrations, or compliance management, we serve as your dependable financial partner.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Import Export Code Registration Services in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/account.png"
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
      Why Bookkeeping Accounting Services in {locationName} Are Essential for Modern Businesses
      <br className="hidden xs:block" />
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      <strong>Strong Financials, Stronger Decisions</strong><br />
      In today’s fast-paced and highly regulated business environment, maintaining accurate and up-to-date books of accounts is not optional—it is the foundation for sustainable growth. Our <strong>Bookkeeping Accounting Services in {locationName}</strong> ensure that businesses operate smoothly with real-time financial insights, error-free accounting, and complete statutory compliance.<br /><br />
      A professionally managed bookkeeping system helps you track your finances with clarity, avoid tax penalties and legal risks, improve cash flow, strengthen decision-making, boost investor and lender confidence, and prepare for audits effortlessly.<br /><br />
      With our firm managing your accounts, you can focus entirely on scaling your business while we safeguard your financial backbone.
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
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] px-4 mx-auto">
    We offer an extensive and fully integrated range of financial, compliance, and business registration services tailored to meet the diverse needs of startups, MSMEs, corporations, and growing enterprises across India. With over 30 years of expertise, our firm provides end-to-end support that ensures your business remains compliant, structured, and financially strong. From accurate <strong>Bookkeeping Accounting Services in {locationName}</strong> to seamless GST handling and from LLP registrations to securing your Import Export Code, our services are designed to simplify your operations, reduce risks, and empower your business with clarity and confidence.
  </p>
  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
    <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-6 leading-[1.6] list-none px-4 w-full md:w-1/2">
      <li>
        <span className="font-bold">1. Bookkeeping Accounting Services in {locationName}</span><br />
        Our Bookkeeping Accounting Services in {locationName} form the backbone of your financial system. We handle everything from daily accounting entries to advanced financial statement preparation, including general ledger maintenance, payables and receivables tracking, reconciliations, monthly closures, and detailed financial reporting.
      </li>
      <li>
        <span className="font-bold">2. GST Registration Services in {locationName}</span><br />
        Our GST Registration Services in {locationName} simplify the entire GST onboarding process—from documentation and application filing to responding to departmental queries and guiding you on post-registration compliance so your business runs smoothly without penalties.
      </li>
      <li>
        <span className="font-bold">3. LLP Registration Services in {locationName}</span><br />
        Through our LLP Registration Services in {locationName}, we manage name reservation, DSC and DIN, incorporation filing, and LLP agreement drafting to ensure your Limited Liability Partnership is registered quickly, correctly, and in full compliance with MCA regulations.
      </li>
      <li>
        <span className="font-bold">4. MSME Registration Services in {locationName}</span><br />
        With our MSME Registration Services in {locationName}, we help you register on the Udyam portal so you can access government schemes, subsidies, priority lending, and other benefits designed specifically for micro, small, and medium enterprises.
      </li>
      <li>
        <span className="font-bold">5. Import Export Code (IEC) Registration Services in {locationName}</span><br />
        Our Import Export Code Registration Services in {locationName} cover the complete DGFT process—from application preparation and document verification to final IEC issuance—so you can confidently start or expand your import-export operations.
      </li>
    </ul>
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Best Bookkeeping Accounting Services in {locationName}</strong>? Eazy Tax is your trusted partner.</p> <br/> 
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
    Why We Are the Preferred Partner for Bookkeeping Accounting Services in {locationName}
  </h2>
  <div className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    <ul className="list-disc pl-4">
      <li><strong>Decades of Experience, One Trusted Name:</strong> With 30+ years of distinguished expertise, we have built a reputation as one of the most dependable firms offering Bookkeeping Accounting Services in {locationName}. Our team consists of seasoned Chartered Accountants, tax experts, and compliance professionals.</li>
      <li><strong>Highly Customized Solutions:</strong> Every business is unique. We analyze your workflow and offer tailor-made accounting solutions that simplify financial oversight and enhance organizational efficiency.</li>
      <li><strong>Accuracy, Compliance & Transparency:</strong> We follow strict accounting protocols and ensure error-free books, 100% statutory compliance, and transparent processes so you always stay audit-ready.</li>
      <li><strong>Latest Tools & Software:</strong> We use advanced and secure accounting software to deliver faster, more accurate, and highly reliable financial statements.</li>
      <li><strong>End-to-End Financial Support Under One Roof:</strong> From bookkeeping to GST, business registrations, tax planning, ROC compliance, and advisory services everything you need is available with us.</li>
      <li><strong>Cost-Effective & Scalable:</strong> Our services are affordable, especially for startups and MSMEs. As your business grows, we adapt and scale our services accordingly.</li>
    </ul>
  </div>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
    Our expert-driven Bookkeeping Accounting Services in Rajkot are designed to strengthen your financial foundation, enhance compliance, and support long-term business growth. With decades of experience and a complete suite of registration and advisory services, we ensure your business operates with clarity, accuracy, and confidence. Partner with us to simplify your accounting process and take your business to the next level.
  </p>
</div>

    </main>
      
      </>
    );
}





