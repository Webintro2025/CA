import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";

export async function generateMetadata({ params }) {
    const slug = params.location;
    // Convert slug to city name (reverse the slug logic)
    const city = locations.find(
        (loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
    );
    const cityName = city || "Location";
    const url = `https://eazy-tax.in/partnership-firm-registration-in/${slug}`;
    return {
        title: `Partnership Firm Registration Services in ${cityName} | Eazy Tax`,
        description: `Need Partnership Firm Registration Services in ${cityName} Call Eazy Tax, Expert In Private Limited Partnership Firm Registration Services in ${cityName}, India.`,
        keywords: [
            `Partnership Firm Registration ${cityName}`,
            `Partnership Registration Services in ${cityName}`,
            `Chartered Accountant ${cityName}`,
            `CA Services ${cityName}`,
            `Business Registration ${cityName}`,
            `Eazy-Tax Partnership Services ${cityName}`
        ],
        openGraph: {
            title: `Partnership Firm Registration Services in ${cityName} | Eazy Tax`,
            description: `Get your partnership firm registered in ${cityName} with Eazy-Tax. We provide end-to-end assistance for legal compliance and smooth business operations.`,
            url,
            siteName: "Eazy Tax India",
            images: [
                {
                    url: "/banner1.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Eazy Tax Partnership Firm Registration ${cityName}`
                }
            ],
            locale: "en_US",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: `Partnership Firm Registration Services in ${cityName} | Eazy Tax`,
            description: `Eazy-Tax: Your trusted partner for Partnership Firm Registration in ${cityName}. Expert guidance for legal compliance and business success.`,
            site: "@eazytaxdelhi",
            images: [
                "/banner1.jpg"
            ]
        },
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
    const city = locations.find(
        (loc) => loc.toLowerCase().replace(/\s+/g, '-') === location
    );
    console.log("Debugging Location:", location);
    console.log("Available Locations:", locations);

    if (!city) {
        return (
            <main className="max-w-2xl mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold">Location Not Found</h1>
            </main>
        );
    }

    return (
      <>
      
      
      

  


    <div class="w-full">
      <div class="flex flex-col md:flex-row w-full">
        <div class="relative flex-1 bg-white px-4 sm:px-8 md:pl-24 py-8 md:py-10 overflow-hidden">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#195DF3] leading-tight w-full break-words">
            Partnership Firm Registration Services in {city}
          </h1>
          <p>
            <br />
            Eazy-Tax, with over 30 years of experience in Chartered Accountancy, is the trusted name for <strong>Partnership Firm Registration Services in {city}</strong>. Setting up a partnership firm in {city} requires a clear understanding of legal frameworks, compliance mandates, and registration processes. We provide end-to-end assistance to ensure that your partnership firm is established smoothly, legally compliant, and ready for business operations without any hurdles.
            </p>
            <br /><br />
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#195DF3] leading-tight w-full break-words">What is a Partnership Firm Registration in {city}?</h2>
            <br />
            <p>
            A Partnership Firm is a business entity where two or more individuals come together to run a business with shared responsibilities, profits, and losses. Governed by the Indian Partnership Act, 1932, partnerships are one of the most preferred forms of business in India due to ease of formation, flexibility, and minimal compliance requirements compared to other business structures like private limited companies or LLPs.

By choosing Eazy-Tax for <strong>Partnership Firm Registration Services in {city}</strong>, you ensure that your partnership is legally recognized, and all statutory obligations are fulfilled with precision.
          </p>
         
          
        </div>
        <div
          class="flex-1 px-4 sm:px-8 py-8 md:py-20 md:pr-11 flex flex-col items-center justify-center min-w-[300px]"
        
        >
          <ContactForm />
        </div>
      </div>
    <div class="w-full h-0.5 bg-black my-4"></div>
      <div class="bg-white text-gray-900 font-sans w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div class="flex flex-col md:flex-row md:space-x-8 w-full">
            {/* Left Sidebar */}
            <aside class="w-full md:w-1/4 bg-blue-50 rounded-lg p-4 sm:p-6 mb-8 md:mb-0">
              <h2 class="text-xl font-semibold text-blue-900 mb-4">
                Related Services
              </h2>
              <ul class="list-disc list-inside space-y-2 text-blue-700 text-sm leading-tight">
                <li>
                  <a class="hover:underline" href="#">
                    LLP Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Partnership Firm Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Sole Proprietorship Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    MSME Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Startup India Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Society Registration in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Import Export Code Registration (IEC) in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    GST Registration & GST Return Filing in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Sole Proprietorship Registration Services in {city}
                  </a>
                </li>
                <li>
                  <a class="hover:underline" href="#">
                    Bookkeeping & Accounting Services in {city}
                  </a>
                </li>
              </ul>
            </aside>


            {/* Main Content */}
            <main class="w-full md:w-3/4 mt-6 md:mt-0">
              {/* Steps */}
              <div class="flex flex-col sm:flex-row justify-between items-center text-center space-y-8 sm:space-y-0 sm:space-x-8 mb-10 w-full">
                {/* Step 1 */}
                <div class="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a computer screen with a user profile and a checkmark" class="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/2bb12f25-3192-4808-23fd-9b23c4331a44.jpg" width="48" />
                  <h3 class="font-semibold text-lg text-gray-900 mb-2">
                    Step 1
                  </h3>
                  <p class="text-sm text-gray-700 max-w-[180px]">
                    Fill the inquiry form, providing your contact details and particulars of your query.
                  </p>
                  <div class="h-0.5 w-full bg-black m-2"></div>
                  <p>Visit Our Website for More Information : <a href="https://eazy-tax.in">Eazy-tax.in</a></p>
                </div>
                {/* Step 2 */}
                <div class="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a document with a plus sign" class="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/7e47cebc-8cb1-4af8-50da-ce6be506a733.jpg" width="48" />
                  <h3 class="font-semibold text-lg text-gray-900 mb-2">
                    Step 2
                  </h3>
                  <p class="text-sm text-gray-700 max-w-[180px]">
                    An expert consultant will contact you to discuss your requirements and prepare necessary docs.
                  </p>
                    <div class="h-0.5 w-full bg-black m-2"></div>
                  <p>Call Now : 9971669475</p>
                </div>
                {/* Step 3 */}
                <div class="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a certificate document with a seal" class="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/5e8faee7-9372-457a-26a1-bfbf8406b335.jpg" width="48" />
                  <h3 class="font-semibold text-lg text-gray-900 mb-2">
                    Step 3
                  </h3>
                  <p class="text-sm text-gray-700 max-w-[180px]">
                    Once the documents are ready, we will proceed with delivering the required solution.
                  </p>
                    <div class="h-0.5 w-full bg-black m-2"></div>
                  <p>Email: contact@eazy-tax.in</p>
                </div>
              </div>

			  <div class="w-full h-1 bg-black "></div>
              {/* Heading */}
              <h2 class="text-2xl mt-3 font-semibold mb-4">Our Specialized Partnership Firm Registration Services in {city}</h2>
          <p class="mb-4">
            When you choose our <a href="https://en.wikipedia.org/wiki/Partnership"><strong>Partnership Firm Registration Services in {city}</strong></a>, you can register different forms of businesses depending on your goals:
          </p>
      
            </main>
          </div>
        </div>
      </div>

  <div class="bg-white text-gray-900 font-sans px-4 sm:px-8 md:px-12 py-6 w-full">
       
       
           <p class="mb-2">
          <span class="font-bold">1. Partnership Agreement Drafting</span>
        </p>
        <p class="mb-4">
          A well-drafted partnership agreement is critical for defining roles, responsibilities, profit-sharing ratios, dispute resolution mechanisms, and exit strategies. We ensure your agreement is legally sound and customized to your business requirements.
           
        </p>
        <p class="mb-2">
          <span class="font-bold">2. <a href="https://eazy-tax.in/services?name=Partnership%20Firm%20Registration" class="font-semibold ">Name Approval and Verification</a></span>
        </p>
        <p class="mb-4">
        
            We assist in choosing a unique name for your partnership firm, verifying it against the Registrar of Firms (RoF) database, and ensuring compliance with naming conventions.
        </p>
        <p class="mb-2">
          <span class="font-bold">3. Filing for Registration</span>
        </p>
        <p>
          
            Our team prepares and submits the <strong>Partnership Registration</strong> Application with all necessary documents, including:

Partnership deed

ID and address proofs of partners

Proof of registered office

NOC from property owner (if applicable)

We handle the entire process, ensuring accuracy and timely submission to avoid delays.
        </p>
        <p class="mb-2">
          <span class="font-bold">4. Compliance with Legal and Tax Requirements</span>
        </p>
        <p>
        
            We guide you through post-registration compliance, including:

PAN and TAN registration

GST registration (if applicable)

Shops and Establishment Act registration

Accounting and bookkeeping setup

This ensures that your partnership firm is fully compliant with Indian laws and can operate without any legal issues.
        </p>
        <p class="mb-2">
          <span class="font-bold">5.Expert Advisory for Partnership Structuring</span>
        </p>
        <p>
   
            Every business is unique, and so are its partnership needs. We provide strategic advisory services to structure your partnership in a way that maximizes profits, minimizes disputes, and ensures long-term sustainability.
        </p>
      </div>

  <div class="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-10 py-4 w-full">
        
  <div class="flex flex-col md:flex-row mt-10 shadow-lg rounded-2xl overflow-hidden w-full">
        {/* Left Section: Criteria */}
  <div class="flex-1 bg-white px-4 sm:px-8 md:px-16 py-8 md:py-20 overflow-hidden flex flex-col justify-center min-w-[280px]">
          <h2 class="text-2xl font-bold text-blue-900 mb-6">Why Choose Eazy-Tax for Partnership Firm Registration Services in {city}</h2>
          <ul class="list-disc list-inside text-base text-gray-800 mb-8 space-y-2">
            <li>Decades of Experience: Over 30 years of expertise in Chartered Accountancy and business registrations.</li>
            <li>End-to-End Service: From drafting agreements to final registration and tax compliance, we handle everything.</li>
            <li>Expert Team: Skilled Chartered Accountants who understand the nuances of Indian business law.</li>
            <li>Time-Efficient Process: We streamline procedures to ensure quick and hassle-free registration.</li>
            <li>Transparent Pricing: No hidden costs; complete clarity on service charges from day one.</li>
            <br />
            Our approach ensures that your <strong>partnership firm</strong> is not just registered but ready for growth, legally protected, and tax-efficient.
          </ul>
        </div>
        {/* Right Section: Benefits */}
  <div class="flex-1 bg-[#c9e4ff] px-4 sm:px-8 md:px-16 py-5 md:py-10 flex flex-col justify-center items-center min-w-[280px]" >
          <h2 class="text-2xl font-bold text-blue-900 mb-6">Step-by-Step Process for Partnership Firm Registration Services in {city}</h2>
          <ul class="list-disc list-inside text-base text-gray-800 space-y-2">
            <li>Drafting Partnership Deed – The first step involves preparing a comprehensive partnership deed outlining profit-sharing ratios, roles, and responsibilities.</li>
            <li>Document Collection – We collect all necessary documents from partners, including identity proofs, address proofs, and office premises details.</li>
            <li>Name Verification and Approval – We ensure the chosen firm name is unique, compliant, and approved by the Registrar of Firms.</li>
            <li>Submission of Registration Application – All documents are submitted to the Registrar of Firms, followed by payment of registration fees.</li>
            <li>Receipt of Registration Certificate – Upon approval, you receive a <strong>Partnership Firm Registration Services in {city}</strong>, officially recognizing your business.</li>
            <li>Post-Registration Compliance – We assist with PAN, TAN, GST, and other mandatory registrations for smooth business operations.</li>
          </ul>
        </div>
</div>
 
	  <h2 class="text-4xl font-bold mt-6 text-center text-blue-900 mx-auto ">Clients Testimonials</h2>
  <div class="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-2 sm:px-4 md:px-8 mt-5">

		
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full">
        
          <div class="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div class="text-2xl mb-2">⭐</div>
            <p class="italic text-gray-700 mb-2">"Eazy Tax made my company registration simple and hassle-free. Highly professional and reliable service."</p>
            <div class="mt-2 text-blue-900 font-semibold">— Rohit Sharma</div>
            <div class="text-xs text-gray-500">TechSpark Solutions Pvt. Ltd.</div>
          </div>
       
          <div class="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div class="text-2xl mb-2">⭐</div>
            <p class="italic text-gray-700 mb-2">"Very supportive team! They guided us step by step in LLP registration. Smooth experience overall."</p>
            <div class="mt-2 text-blue-900 font-semibold">— Priya Malhotra</div>
            <div class="text-xs text-gray-500">GreenEdge Consulting LLP</div>
          </div>
         
          <div class="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div class="text-2xl mb-2">⭐</div>
            <p class="italic text-gray-700 mb-2">"Quick, transparent, and trustworthy. I recommend them for all business compliance needs."</p>
            <div class="mt-2 text-blue-900 font-semibold">— Amit Verma</div>
            <div class="text-xs text-gray-500">Startup Founder</div>
          </div>
        </div>
      </div>

      </div>

	  
    
      <div class="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-2 sm:px-4 md:px-8 mt-10">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 w-full">
        
          <div class="flex-1 bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col mb-6 md:mb-0 min-w-[280px]">
            <h2 class="text-xl font-bold text-blue-900 mb-4">Documents Required for Partnership Firm Registration Services in {city} </h2>
            <p class="mb-3 text-gray-800">To proceed with registration, you need the following documents:</p>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Partnership Deed (duly signed by all partners)</li>
              <li>Identity Proof (Aadhar, PAN, Passport, Voter ID)</li>
              <li>Address Proof (Utility bills, Rent agreement, or NOC from property owner)</li>
              <li>Passport-size photographs of partners</li>
              <li>Business premises proof (Office ownership or rental agreement)</li>
            </ul>
          </div>
          {/* Right: Step-by-Step Process */}
          <div class="flex-1 bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col min-w-[280px]">
            <h2 class="text-xl font-bold text-blue-900 mb-4">Key Benefits of Partnership Firm Registration Services in {city}</h2>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li><span class="font-semibold">Legal Recognition</span> – Registration grants your firm a legal identity, allowing it to open bank accounts, enter contracts, and secure loans.</li>
              <li><span class="font-semibold">Limited Legal Disputes</span> – Registered firms have clear partnership agreements, reducing potential conflicts among partners.</li>
              <li><span class="font-semibold">Tax Compliance</span> – Registered firms comply with the Income Tax Act and other applicable regulations.</li>
              <li><span class="font-semibold">Business Credibility</span> – Customers, suppliers, and financial institutions view a registered firm as reliable and trustworthy.</li>
            </ul>
          </div>
        </div>
      </div>
    

    <div class="w-full flex flex-col lg:flex-row py-8 px-4 sm:px-8 md:px-16 gap-8">
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions (FAQs) About Partnership Firm Registration Services in {city}</h2>
        <div class="space-y-6">
          <div>
            <p class="font-semibold text-blue-800">Q1. Is registration mandatory for a partnership firm?</p>
            <p class="text-gray-800">While optional, registration provides legal protection and credibility for your business.</p>
          </div>
          <div>
            <p class="font-semibold text-blue-800">Q2. How long does the registration process take?</p>
            <p class="text-gray-800">Typically, 2–4 weeks, depending on the completeness of documents and state regulations.</p>
          </div>
          <div>
            <p class="font-semibold text-blue-800">Q3. Can we modify the partnership deed after registration?</p>
            <p class="text-gray-800">Yes, amendments can be made with the consent of all partners and filed with the Registrar.</p>
          </div>
          <div>
            <p class="font-semibold text-blue-800">Q4. What are the tax implications of a registered partnership firm?
</p>
            <p class="text-gray-800">Partnership firms are taxed separately under the Income Tax Act, and registered firms enjoy full compliance advantages.</p>
          </div>
          <div>
            </div>
          </div>
        </div>
          <div class="flex-1 flex justify-center items-center mt-6 lg:mt-3.5">
      <img src="/FAQ.jpg" alt={`Company Registration Services in ${city}`} class="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
    </div>
      </div>
  
 

	   
  <section class="w-full pb-8 px-4 sm:px-8 md:px-12" aria-labelledby="conclusion-heading">
      <div class="px-3">
        <h2 id="conclusion-heading" class="text-2xl font-bold text-blue-900 mb-4">Conclusion – <span>Build Your Business Future with <strong>Eazy Tax</strong></span></h2>
        <p class="text-gray-800 mb-4">
          Choosing Eazy-Tax for <strong>Partnership Firm Registration Services in {city}</strong> means opting for reliability, precision, and expertise. With over three decades of experience, we ensure your partnership firm is legally compliant, strategically structured, and ready for seamless operations. Our end-to-end services, personalized advisory, and commitment to client satisfaction make us the most trusted partner for entrepreneurs across India.

Secure your business future today by registering your partnership firm with Eazy-Tax and gain the peace of mind and credibility your business deserves.
        </p>
      </div>
    </section>
    </div>
      
      </>
    );
}





