import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";

export async function generateMetadata({ params }) {
	const {slug} = await params;
	// Convert slug to city name (reverse the slug logic)
	const city = locations.find(
		(loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
	);
	const cityName = city || "Location";
	const url = `https://eazy-tax.in/in/${slug}`;
	return {
		title: `Company Registration Services in ${cityName} | Eazy Tax`,
		description: `Need Company Registration Services in ${cityName} Call Eazy Tax, Expert In Private Limited Company Registration Services in ${cityName}, India.`,
		keywords: [
			`CA Services ${cityName}`,
			`Chartered Accountant ${cityName}`,
			`Company Registration Services in ${cityName}`,
			`GST Consultant Services in ${cityName}`,
			`Private Limited Company Registration Services in ${cityName}`,
			`Partnership Firm Registration Services in ${cityName}`
		],
		openGraph: {
			title: `Company Registration Services in ${cityName} | Eazy Tax`,
			description: `Find expert CA services in ${cityName}. Company registration, GST, bookkeeping, and more for businesses in ${cityName}.`,
			url,
			siteName: "Eazy Tax India",
			images: [
				{
					url: "/banner1.jpg",
					width: 1200,
					height: 630,
					alt: `Eazy Tax CA Services ${cityName}`
				}
			],
			locale: "en_US",
			type: "website"
		},
		twitter: {
			card: "summary_large_image",
			title: `${cityName} | Best CA Services in India | Eazy Tax`,
			description: `Find expert CA services in ${cityName}. Company registration, GST, bookkeeping, and more for businesses in ${cityName}.`,
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

export default async function LocationPage({ params }) {
	const {slug} = await params;
	const city = locations.find(
		(loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
	);
	if (!city) {
		return <main className="max-w-2xl mx-auto py-10 px-4"><h1 className="text-2xl font-bold">Location Not Found</h1></main>;
	}
  return (

    <div className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        <div className="relative flex-1 bg-white px-4 sm:px-8 md:pl-24 py-8 md:py-10 overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#195DF3] leading-tight w-full break-words">
            Company Registration Services in {city}
          </h1>
          <p className="text-base sm:text-lg text-black mt-3 max-w-2xl">
            At Eazy Tax, led by CA Avish Jain and under the next-generation leadership of CA Adishwar Jain and CA Nidhi Jain, we bring 30+ years of trusted expertise in delivering <strong>Company Registration Services in {city}</strong>. Our mission is to provide entrepreneurs, startups, and businesses with seamless compliance, clarity, and growth solutions in a constantly evolving financial landscape.
            <br /><br />
            We specialize in <strong>Company Registration Services in {city}</strong>, LLP Registration, Partnership Firm Registration, Sole Proprietorship Registration, MSME Registration, Startup India Registration, Society Registration, Trust Registration, Import Export Code Registration, GST Registration, GST Return Filing, and Bookkeeping Services. With decades of experience, we ensure that your business not only complies with legal requirements but also enjoys tax efficiency, smooth operations, and strategic growth opportunities.
          </p>
         
          
        </div>
        <div
          className="flex-1 px-4 sm:px-8 py-8 md:py-20 md:pr-11 flex flex-col items-center justify-center min-w-[300px]"
          style={{ borderTopLeftRadius: "1.5rem", borderBottomLeftRadius: "1.5rem" }}
        >
          <ContactForm />
        </div>
      </div>
    <div className="w-full h-0.5 bg-black my-4"></div>
      <div className="bg-white text-gray-900 font-sans w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:space-x-8 w-full">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 bg-blue-50 rounded-lg p-4 sm:p-6 mb-8 md:mb-0">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Related Services
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700 text-sm leading-tight">
                <li>
                  <a className="hover:underline" href="#">
                    LLP Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Partnership Firm Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Sole Proprietorship Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    MSME Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Startup India Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Society Registration
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Import Export Code Registration (IEC)
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    GST Registration & GST Return Filing
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Sole Proprietorship Registration Services
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Bookkeeping & Accounting Services
                  </a>
                </li>
              </ul>
            </aside>


            {/* Main Content */}
            <main className="w-full md:w-3/4 mt-6 md:mt-0">
              {/* Steps */}
              <div className="flex flex-col sm:flex-row justify-between items-center text-center space-y-8 sm:space-y-0 sm:space-x-8 mb-10 w-full">
                {/* Step 1 */}
                <div className="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a computer screen with a user profile and a checkmark" className="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/2bb12f25-3192-4808-23fd-9b23c4331a44.jpg" width="48" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Step 1
                  </h3>
                  <p className="text-sm text-gray-700 max-w-[180px]">
                    Fill the inquiry form, providing your contact details and particulars of your query.
                  </p>
                  <div className="h-0.5 w-full bg-black m-2"></div>
                  <p>Visit Our Website for More Information : <a href="https://eazy-tax.in">Eazy-tax.in</a></p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a document with a plus sign" className="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/7e47cebc-8cb1-4af8-50da-ce6be506a733.jpg" width="48" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Step 2
                  </h3>
                  <p className="text-sm text-gray-700 max-w-[180px]">
                    An expert consultant will contact you to discuss your requirements and prepare necessary docs.
                  </p>
                    <div className="h-0.5 w-full bg-black m-2"></div>
                  <p>Call Now : 9971669475</p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center max-w-xs">
                  <img alt="Icon showing a certificate document with a seal" className="mb-2" height="48" src="https://storage.googleapis.com/a1aa/image/5e8faee7-9372-457a-26a1-bfbf8406b335.jpg" width="48" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Step 3
                  </h3>
                  <p className="text-sm text-gray-700 max-w-[180px]">
                    Once the documents are ready, we will proceed with delivering the required solution.
                  </p>
                    <div className="h-0.5 w-full bg-black m-2"></div>
                  <p>Email: contact@eazy-tax.in</p>
                </div>
              </div>

			  <div className="w-full h-1 bg-black "></div>
              {/* Heading */}
              <h2 className="text-2xl mt-3 font-semibold mb-4">Types of Companies/Businesses You Can Register in {city}</h2>
          <p className="mb-4">
            When you choose our <a href="https://www.justdial.com/Delhi/Company-Registration-Consultants/nct-10919031">Company Registration Services in {city}</a>, you can register different forms of businesses depending on your goals:
          </p>
      
            </main>
          </div>
        </div>
      </div>

  <div className="bg-white text-gray-900 font-sans px-4 sm:px-8 md:px-12 py-6 w-full">
       
       
           <p className="mb-2">
          <span className="font-bold">1. Private Limited Company Registration Services in {city}</span>
        </p>
        <p className="mb-4">
          A Private Limited Company is the most preferred structure for businesses that aim to grow and attract investments. It is recognized as a separate legal entity, meaning the company has its own identity apart from its owners. This structure gives businesses greater credibility with investors, banks, and stakeholders. <strong>Private Limited Company Registration Services in {city}</strong> are particularly attractive for startups looking to raise venture capital or angel investment, as they provide a transparent and structured governance model. With perpetual succession, the company continues its existence even if ownership or directors change, making it highly reliable for businesses with long-term ambitions.
           
        </p>
        <p className="mb-2">
          <span className="font-bold">2. <a href="https://eazy-tax.in/services?name=Partnership%20Firm%20Registration" className="font-semibold ">Limited Liability Partnership Registration Services in {city} (LLP)</a></span>
        </p>
        <p className="mb-4">
        
            A <strong>Limited Liability Partnership Registration Services in {city}</strong> offers the flexibility of a partnership while protecting the personal assets of the partners. Unlike traditional partnerships, an LLP is considered a separate legal entity, which makes it easier to manage risks and liabilities. Many professionals, consultants, and service-based businesses in {city} prefer this structure because it combines low-cost compliance with the security of limited liability. LLPs are widely recognized for their simplicity and suitability for businesses that may not need large-scale funding but still want a professional and protected structure.
        </p>
        <p className="mb-2">
          <span className="font-bold">3. Partnership Firm Registration Services in {city}</span>
        </p>
        <p>
          
            A <strong>Partnership Firm Registration Services in {city}</strong> is one of the oldest and simplest forms of business organizations in India. It is governed by a partnership agreement that defines the roles, responsibilities, and profit-sharing ratio among the partners. Although not considered a separate legal entity from its partners, it is still a popular choice for small and medium-sized businesses in {city} that rely on shared ownership and collective decision-making. Many family-run businesses and trading companies prefer this model due to its ease of formation and low cost of management.
        </p>
        <p className="mb-2">
          <span className="font-bold">4. Sole Proprietorship Registration Services in {city}</span>
        </p>
        <p>
        
            A Sole Proprietorship is the simplest way to start a business, where a single individual owns, manages, and controls the entire enterprise. It is not legally separate from its owner, which means the business and the individual are considered one and the same for taxation and liability purposes. <strong>Sole Proprietorship Registration Services in {city}</strong>, Many small shop owners, traders, freelancers, and self-employed professionals in {city} begin with this structure because of its simplicity and minimal compliance requirements. However, while easy to start, it does not provide much scope for large-scale expansion or investment opportunities.
        </p>
        <p className="mb-2">
          <span className="font-bold">5.One Person Company Registration Services in {city} (OPC)</span>
        </p>
        <p>
   
            A <strong>One Person Company Registration Services in {city}</strong> is an innovative structure introduced to encourage entrepreneurship among individuals. It allows a single person to enjoy the benefits of a corporate entity without needing multiple directors or shareholders. Unlike sole proprietorships, OPCs are recognized as separate legal entities, which provides the owner with limited liability protection. In {city}, OPCs have gained popularity among solo entrepreneurs who want to start small but plan to expand their businesses into Private Limited Companies in the future. This makes it an excellent stepping stone for growth-oriented individuals.
        </p>
        <p className="mb-2">
          <span className="font-bold">6. Society Registration Services in {city}</span>
        </p>
        <p>
          A Society is usually formed by a group of individuals who come together for non-profit purposes such as education, culture, art, or social welfare. Registered under the Societies Registration Act, it provides legal recognition to organizations that aim to serve society rather than earn profits. Many educational institutions, cultural associations, and charitable groups in {city} prefer <strong> Society Society Registration Services in {city}</strong> as it allows them to function transparently and receive grants or donations. It is an effective way to organize like-minded individuals around a common cause with proper legal standing.
        </p>
        <p className="mb-2">
          <span className="font-bold">7.Trust Registration Services in {city}</span>
        </p>
        <p>
          
            A Trust is another form of non-profit organization, typically established for charitable, religious, or educational purposes. Trusts are governed by trustees, who are responsible for managing the property and assets of the trust in accordance with its objectives. In {city}, trusts are widely set up by philanthropists, social workers, and community leaders to work for the welfare of society. <strong>Trust Registration Services in {city}</strong>, not only ensures legal protection but also helps in securing credibility when seeking donations or financial support for social projects.
        </p>
      </div>

  <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-10 py-4 w-full">
        
  <div className="flex flex-col md:flex-row mt-10 shadow-lg rounded-2xl overflow-hidden w-full">
        {/* Left Section: Criteria */}
  <div className="flex-1 bg-white px-4 sm:px-8 md:px-16 py-8 md:py-20 overflow-hidden flex flex-col justify-center min-w-[280px]">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Criteria for Company Registration in {city}</h2>
          <ul className="list-disc list-inside text-base text-gray-800 mb-8 space-y-2">
            <li>Minimum 2 directors and 2 shareholders (for Pvt Ltd Company)</li>
            <li>At least one director must be an Indian resident</li>
            <li>A registered office address in {city}</li>
            <li>Authorized and paid-up share capital as per company structure</li>
            <li>Digital Signature Certificate (DSC) and Director Identification Number (DIN) for directors</li>
          </ul>
        </div>
        {/* Right Section: Benefits */}
  <div className="flex-1 bg-[#c9e4ff] px-4 sm:px-8 md:px-16 py-5 md:py-10 flex flex-col justify-center items-center min-w-[280px]" style={{ borderTopLeftRadius: "1.5rem", borderBottomLeftRadius: "1.5rem" }}>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Benefits of Private Limited Company Registration</h2>
          <ul className="list-disc list-inside text-base text-gray-800 space-y-2">
            <li>Limited Liability Protection – Personal assets of directors are protected</li>
            <li>Better Funding Opportunities – Attract investors and venture capital</li>
            <li>Separate Legal Entity – Company exists independent of its owners</li>
            <li>Perpetual Succession – Business continues even after directors change</li>
            <li>Tax Benefits – Optimized tax structures for higher savings</li>
            <li>Enhanced Credibility – Builds trust with clients, banks, and stakeholders</li>
          </ul>
        </div>
</div>
 
	  <h2 className="text-4xl font-bold mt-6 text-center text-blue-900 mx-auto ">Clients Testimonials</h2>
  <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-2 sm:px-4 md:px-8 mt-5">

		
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full">
        
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div className="text-2xl mb-2">⭐</div>
            <p className="italic text-gray-700 mb-2">"Eazy Tax made my company registration simple and hassle-free. Highly professional and reliable service."</p>
            <div className="mt-2 text-blue-900 font-semibold">— Rohit Sharma</div>
            <div className="text-xs text-gray-500">TechSpark Solutions Pvt. Ltd.</div>
          </div>
       
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div className="text-2xl mb-2">⭐</div>
            <p className="italic text-gray-700 mb-2">"Very supportive team! They guided us step by step in LLP registration. Smooth experience overall."</p>
            <div className="mt-2 text-blue-900 font-semibold">— Priya Malhotra</div>
            <div className="text-xs text-gray-500">GreenEdge Consulting LLP</div>
          </div>
         
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
            <div className="text-2xl mb-2">⭐</div>
            <p className="italic text-gray-700 mb-2">"Quick, transparent, and trustworthy. I recommend them for all business compliance needs."</p>
            <div className="mt-2 text-blue-900 font-semibold">— Amit Verma</div>
            <div className="text-xs text-gray-500">Startup Founder</div>
          </div>
        </div>
      </div>

      </div>

	  
    
      <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-2 sm:px-4 md:px-8 mt-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 w-full">
        
          <div className="flex-1 bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col mb-6 md:mb-0 min-w-[280px]">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Required Documents for Company Registration</h2>
            <p className="mb-3 text-gray-800">To proceed with registration, you need the following documents:</p>
            <h3 className="font-semibold text-blue-800 mb-2 mt-4">For Directors & Shareholders:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>PAN Card</li>
              <li>Aadhaar Card / Passport / Driving License / Voter ID</li>
              <li>Passport-size photographs</li>
              <li>Latest Bank Statement / Utility Bill</li>
            </ul>
            <h3 className="font-semibold text-blue-800 mb-2 mt-4">For Registered Office:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Electricity Bill / Property Tax Receipt (not older than 2 months)</li>
              <li>Rent Agreement (if rented premises)</li>
              <li>No Objection Certificate (NOC) from landlord</li>
            </ul>
          </div>
          {/* Right: Step-by-Step Process */}
          <div className="flex-1 bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col min-w-[280px]">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Step-by-Step Process of Company Registration in {city}</h2>
            <p className="mb-3 text-gray-800">Our streamlined process ensures quick and hassle-free company registration:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><span className="font-semibold">Consultation &amp; Planning</span> – Selecting the best business structure based on your needs.</li>
              <li><span className="font-semibold">Obtaining DSC &amp; DIN</span> – Mandatory for all company directors.</li>
              <li><span className="font-semibold">Company Name Approval</span> – Filing application with MCA for unique company name.</li>
              <li><span className="font-semibold">Drafting MOA &amp; AOA</span> – Defining company objectives, rights, and rules.</li>
              <li><span className="font-semibold">Filing Incorporation Documents</span> – Submission of SPICe+ form with MCA.</li>
              <li><span className="font-semibold">Issuance of Certificate of Incorporation (COI)</span> – Official proof of company existence.</li>
              <li><span className="font-semibold">PAN &amp; TAN Allotment</span> – For taxation and compliance.</li>
              <li><span className="font-semibold">Bank Account Opening</span> – Registering corporate bank account.</li>
            </ol>
          </div>
        </div>
      </div>
    

    <div className="w-full flex flex-col lg:flex-row py-8 px-4 sm:px-8 md:px-16 gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions (FAQs) About Company Registration in {city}</h2>
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-blue-800">Q1. How long does it take to register a company in {city}?</p>
            <p className="text-gray-800">It usually takes 7–10 working days, depending on documentation and MCA approvals.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800">Q2. Can I register a company in {city} if I don’t own office space?</p>
            <p className="text-gray-800">Yes, you can register with a rented property, provided you have a rent agreement and landlord’s NOC.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800">Q3. What is the minimum capital required for Pvt Ltd registration?</p>
            <p className="text-gray-800">There is currently no minimum paid-up capital requirement.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800">Q4. Can foreigners be directors in an Indian company?</p>
            <p className="text-gray-800">Yes, but at least one Indian resident director is mandatory.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-800">Q5. What’s the difference between LLP and Pvt Ltd Company?</p>
            <div className="text-gray-800 mt-1">
              <div><span className="font-semibold">LLP</span> – Flexible, low-cost, ideal for small firms and professionals.</div>
              <div><span className="font-semibold">Pvt Ltd Company</span> – Best for scalable startups seeking investors and funding.</div>
            </div>
          </div>
        </div>
      </div>
    <div className="flex-1 flex justify-center items-center mt-6 lg:mt-3.5">
      <img src="/FAQ.jpg" alt={`Company Registration Services in ${city}`} className="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
    </div>
    </div>

	   
  <section className="w-full pb-8 px-4 sm:px-8 md:px-12" aria-labelledby="conclusion-heading">
      <div className="px-3">
        <h2 id="conclusion-heading" className="text-2xl font-bold text-blue-900 mb-4">Conclusion – <span>Build Your Business Future with <strong>Eazy Tax</strong></span></h2>
        <p className="text-gray-800 mb-4">
          At <strong>Eazy Tax</strong>, we don’t just register your company—we guide you through the entire journey of business incorporation, compliance, and financial management. With a legacy of <strong>30+ years</strong>, we are a trusted partner for <strong>Company Registration Services in {city}</strong>.
        </p>
        <p className="text-gray-800 mb-4">
          Whether you are a budding entrepreneur, a startup looking for investors, or an established business wanting structured compliance, our team of expert Chartered Accountants ensures your success with clarity, compliance, and confidence.
        </p>
        <p className="text-gray-800 font-semibold">
          Take the first step today and let us simplify your <strong>Business Registration in {city}</strong>.
        </p>
      </div>
    </section>

	   </div>
  );
}
