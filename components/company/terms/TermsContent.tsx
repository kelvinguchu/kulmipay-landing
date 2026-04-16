import Link from "next/link";

const tocItems = [
  "1. Introduction",
  "2. The KulmiPay Service",
  "3. Prohibition",
  "4. Transactions & Disputes",
  "5. Responsibilities to Customers",
  "6. Security & Fraud Controls",
  "7. Settlement & Payout",
  "8. Card Network Rules",
  "9. Charges",
  "10. Payment Processor",
  "11. Disclaimer by Users",
  "12. Compliance with Law",
  "13. Termination",
  "14. Disclaimer by KulmiPay",
  "15. Indemnification",
  "16. Privacy & Security",
  "17. Proprietary Rights",
  "18. General",
];

export function TermsContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
              Terms &amp; Conditions
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              This KulmiPay Limited User Agreement (the &quot;Agreement&quot;)
              is a contract between you (the &quot;User&quot;) and KulmiPay
              Limited, a Kenyan incorporated corporation, with its principal
              place of business in Nairobi, Kenya. You must read, agree with and
              accept all of the terms in this Agreement in order to use our
              Payment Services.
            </p>
            <p className='text-sm text-muted-foreground mt-4'>
              Last updated: April 2025
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className='border-b border-border'>
        <div className='w-full px-6 md:px-12 py-6'>
          <h2 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
            Table of Contents
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            {tocItems.map((title) => (
              <Link
                key={title}
                href={`#${title.toLowerCase().replaceAll(/[^a-z0-9]/g, "-")}`}
                className='text-sm text-brand hover:underline'>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='py-6 md:py-10'>
        <div className='w-full px-6 md:px-12 max-w-4xl'>
          <div className='space-y-12'>
            {/* 1. Introduction */}
            <div className='scroll-mt-24' id='1--introduction'>
              <h2 className='text-2xl font-bold mb-4'>1. Introduction</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Your access to and use of the service is also governed by
                  information, guidelines, and policies made available on the
                  Site, including but not limited to the KulmiPay Privacy
                  Policy. To the extent that there are any conflicts between the
                  terms and conditions of this Agreement and the Site, the terms
                  and conditions of this Agreement will govern.
                </p>
                <p className='text-muted-foreground leading-relaxed font-semibold'>
                  YOU UNDERSTAND THAT BY USING THE KULMIPAY SERVICE, YOU ARE
                  AGREEING TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT ACCEPT
                  THIS AGREEMENT IN ITS ENTIRETY, YOU MAY NOT ACCESS OR USE THE
                  KULMIPAY SERVICE. IF YOU AGREE TO THIS AGREEMENT ON BEHALF OF
                  AN ENTITY, YOU REPRESENT AND WARRANT THAT YOU HAVE THE
                  AUTHORITY TO BIND THAT ENTITY TO THIS AGREEMENT.
                </p>
              </div>
            </div>

            {/* 2. The KulmiPay Service */}
            <div className='scroll-mt-24' id='2--the-kulmipay-service'>
              <h2 className='text-2xl font-bold mb-4'>
                2. The KulmiPay Service
              </h2>

              <h3 className='text-lg font-semibold mb-3'>
                2.1 Descriptions and Illustrations
              </h3>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                Any descriptions or illustrations on the Site are published for
                the sole purpose of giving an approximate idea of the services
                described in them. They will not form part of the Contract or
                have any contractual force.
              </p>

              <h3 className='text-lg font-semibold mb-3'>
                2.2 Account, Registration, and KYC
              </h3>
              <div className='space-y-4 mb-6'>
                <p className='text-muted-foreground leading-relaxed'>
                  You are required to provide certain information including your
                  contact details, description of your product or service, your
                  company name, business registration certificate, tax
                  registration certification, national identification document,
                  etc. (&quot;Account Information&quot;) as part of the
                  registration process. You agree that any registration
                  information you give to KulmiPay will always be accurate and
                  up to date.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You cannot transfer your account to anyone else without our
                  prior written approval. The KulmiPay Service is available only
                  to legal entities and persons who are at least eighteen (18)
                  years old and are otherwise capable of forming legally binding
                  contracts under applicable law.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You are responsible for:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    Maintaining the confidentiality of your username and
                    password
                  </li>
                  <li>
                    Any and all transactions by persons that you give access to
                    or that otherwise use such username or password
                  </li>
                  <li>
                    Any and all consequences of use or misuse of your username
                    and password
                  </li>
                </ul>
              </div>

              <h3 className='text-lg font-semibold mb-3'>
                2.3 Changes to Services
              </h3>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay may make modifications, deletions and/or additions to
                  this Agreement (&quot;Changes&quot;) at any time. Changes will
                  be effective: (i) thirty (30) days after KulmiPay provides
                  notice; (ii) when you opt-in or otherwise expressly agree to
                  the Changes; or (iii) immediately, if required due to legal or
                  regulatory requirements.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You may choose to reject the changes and KulmiPay may issue a
                  notice to immediately terminate the services or enter into
                  discussions to reach an amicable solution.
                </p>
              </div>
            </div>

            {/* 3. Prohibition */}
            <div className='scroll-mt-24' id='3--prohibition'>
              <h2 className='text-2xl font-bold mb-4'>3. Prohibition</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  You represent, warrant, and agree that you will not contribute
                  any data or use the Services in a manner that:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    Infringes or violates any intellectual property or other
                    rights
                  </li>
                  <li>
                    Violates any law or regulation, including export control
                    laws
                  </li>
                  <li>
                    Is harmful, fraudulent, deceptive, threatening, harassing,
                    defamatory, or obscene
                  </li>
                  <li>
                    Jeopardises the security of your or anyone else&apos;s
                    KulmiPay account
                  </li>
                  <li>
                    Violates the security of any computer network, or cracks
                    passwords or security encryption codes
                  </li>
                  <li>
                    Runs auto-responders, &quot;spam&quot;, or any processes
                    that interfere with the proper working of the Services
                  </li>
                  <li>
                    &quot;Crawls&quot;, &quot;scrapes&quot;, or
                    &quot;spiders&quot; any page or data relating to the
                    Services
                  </li>
                  <li>
                    Decompiles, reverse engineers or otherwise attempts to
                    obtain the source code of the Services
                  </li>
                </ul>

                <h3 className='text-lg font-semibold mb-3 mt-8'>
                  3.1 Restricted Businesses
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  By registering with us, you confirm that you will not use the
                  Service to accept payments in connection with restricted
                  business categories. It is prohibited to use the Service for
                  any dealings with jurisdictions KulmiPay has deemed high risk
                  including Cuba, Iran, North Korea, Crimea Region, Somalia, and
                  Syria. Restricted categories include but are not limited to:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    Investment and credit services: securities brokers, credit
                    repair, lending instruments
                  </li>
                  <li>
                    Money and legal services: money transmitters, crowdfunding,
                    insurance agencies
                  </li>
                  <li>
                    Virtual currency or stored value: Bitcoin sales, digital
                    wallets not issued by the seller
                  </li>
                  <li>
                    IP infringement, regulated or illegal products: counterfeit
                    goods, illegal pharmaceuticals, weapons, adult content,
                    gambling
                  </li>
                  <li>
                    High-risk businesses: telemarketing, psychic services,
                    extended warranties, timeshares
                  </li>
                  <li>
                    Social media manipulation: sale of fake likes, followers
                  </li>
                </ul>

                <h3 className='text-lg font-semibold mb-3 mt-8'>
                  3.2 Consequences of Violations
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Violating these terms can lead to immediate suspension or
                  termination of services, freezing or withholding of funds,
                  financial penalties for violating card scheme rules, and legal
                  consequences, including referral to authorities.
                </p>
              </div>
            </div>

            {/* 4. Transactions & Disputes */}
            <div className='scroll-mt-24' id='4--transactions---disputes'>
              <h2 className='text-2xl font-bold mb-4'>
                4. Processing Transactions; Disputes, Refunds, Reversals,
                Reserves
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  4.1 You may only submit Charges through the KulmiPay Payment
                  Processing Services that are authorised by your customers.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.2 To enable us to process Transactions for you, you
                  authorise and direct us, our affiliates, the Payment Method
                  Providers and Acquirers to receive and settle any payment
                  processing proceeds owed to you. You appoint KulmiPay as the
                  payment service provider for the limited purpose of directing,
                  receiving, holding and settling such proceeds.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.3 Except where KulmiPay and a Customer have otherwise
                  agreed, you maintain the direct relationship with your
                  customers and are responsible for: acquiring appropriate
                  consent, providing confirmation or receipts, verifying
                  identities, and determining eligibility for Transactions.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.4 KulmiPay is not responsible or liable for authorised and
                  completed Charges that are later the subject of a Dispute,
                  Refund, or Reversal, or that are submitted without
                  authorisation or in error, or that violate any Laws.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.5 You are immediately responsible to us for all Disputes,
                  Refunds, Reversals, Returns, or Fines regardless of reason or
                  timing. We may decline to act upon a Refund instruction if it
                  would cause a negative balance, you are the subject of
                  Bankruptcy Proceedings, or we believe there is a risk you will
                  not meet your liabilities.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.6 You may be able to challenge a Dispute by submitting
                  evidence through the API, Email, or Dashboard. We cannot
                  guarantee that your challenge will be successful.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.7–4.8 You may not submit duplicate Charges for disputed
                  Transactions. You are liable for all losses when lost or
                  stolen payment credentials are used. KulmiPay does not insure
                  against losses caused by fraud.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  4.9–4.13 Reversals may be issued for unauthorised charges,
                  restricted business charges, or Payment Method Rule
                  violations. KulmiPay&apos;s processing fees are not
                  reversible. You shall bear all chargeback charges and
                  reimburse KulmiPay for any default charges imposed by Payment
                  Method Providers. We may place a reserve on funds collected if
                  your business is deemed high-risk.
                </p>
              </div>
            </div>

            {/* 5. Responsibilities to Customers */}
            <div className='scroll-mt-24' id='5--responsibilities-to-customers'>
              <h2 className='text-2xl font-bold mb-4'>
                5. Responsibilities and Disclosures to Your Customers
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  When using the KulmiPay Payment Processing Services you agree
                  to:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    Accurately communicate the nature and amount of each
                    Transaction prior to submitting it
                  </li>
                  <li>
                    Provide a receipt that accurately describes each Transaction
                  </li>
                  <li>
                    Provide Customers a meaningful way to contact you if a
                    product or service is not provided as described
                  </li>
                  <li>
                    Not use Services to sell in a manner that is unfair,
                    deceptive, or does not disclose material terms in advance
                  </li>
                  <li>
                    Inform Customers that KulmiPay processes Transactions for
                    you
                  </li>
                  <li>
                    Maintain and make available a fair return, refund,
                    cancellation, or adjustment policy
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  If you submit recurring or subscription Charges, you agree to
                  comply with applicable Laws and Payment Method Rules, clearly
                  inform Customers in advance of ongoing charges, and explain
                  the method for unsubscribing. If you issue invoices, you are
                  responsible for ensuring compliance with applicable Laws.
                </p>
              </div>
            </div>

            {/* 6. Security & Fraud */}
            <div className='scroll-mt-24' id='6--security---fraud-controls'>
              <h2 className='text-2xl font-bold mb-4'>
                6. Security and Fraud Controls
              </h2>
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold'>
                  6.1 KulmiPay&apos;s Security
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay is responsible for protecting the security of Data in
                  our possession. We will maintain commercially reasonable
                  administrative, technical, and physical procedures to protect
                  User Data and Personal Data from unauthorised access,
                  accidental loss, modification, or breach, and we will comply
                  with applicable Laws and Payment Method Rules. However, we
                  cannot guarantee complete security.
                </p>

                <h3 className='text-lg font-semibold mt-6'>
                  6.2 User&apos;s Security
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  You are solely responsible for the security of any Data on
                  your website, servers, or devices. You must comply with
                  applicable Laws and Payment Method Rules, and provide proof of
                  compliance if requested. Failure to do so may result in
                  suspension or termination.
                </p>

                <h3 className='text-lg font-semibold mt-6'>
                  6.3–6.5 Security Controls, Fraud Risk &amp; 2FA
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  You are responsible for implementing appropriate Security
                  Controls. We cannot guarantee fraud will never occur. If you
                  disable or fail to implement proper Security Controls, the
                  likelihood of fraud increases. You are solely responsible for
                  all fraud-related losses. We encourage use of two-factor
                  authentication (2FA). If you disable this feature, KulmiPay
                  shall not be liable for any resulting loss or damages.
                </p>
              </div>
            </div>

            {/* 7. Settlement & Payout */}
            <div className='scroll-mt-24' id='7--settlement---payout'>
              <h2 className='text-2xl font-bold mb-4'>
                7. Settlement and Payout Schedule
              </h2>
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold'>
                  7.1 Your Settlement Account
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay will, with its banking partners, settle funds to your
                  designated bank or financial institution account
                  (&quot;Settlement Account&quot;). You affirm that you are
                  authorised to initiate settlements, the account is owned by
                  you or a duly authorised agent, and the account is managed by
                  a financial institution in Kenya.
                </p>

                <h3 className='text-lg font-semibold mt-6'>
                  7.2–7.3 Settlement &amp; B2C Disbursement
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Only a positive balance results in settlement. We may deduct
                  Fees, Fines, or other owed amounts from settlement funds. You
                  may use our B2C disbursement feature to settle funds to third
                  parties. You are responsible for providing accurate
                  beneficiary details.
                </p>

                <h3 className='text-lg font-semibold mt-6'>
                  7.4 Multi-Currency Processing
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  We may allow settlement in a different currency from the
                  payment accepted. The conversion rate is shown at the time of
                  Charge. Refunds use the rate at the time of Refund. You may
                  opt-out or change settings anytime.
                </p>

                <h3 className='text-lg font-semibold mt-6'>
                  7.5–7.6 Payout Schedule &amp; Incorrect Settlement
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  A holding period may apply before initial settlement.
                  Institutions involved may delay funds. We are not responsible
                  for external delays. We may suspend payouts due to legal
                  orders, suspicious activity, excessive Disputes, or business
                  risk. Providing inaccurate account details may result in
                  irreversible losses. You are solely liable for any funds
                  settled to incorrect accounts.
                </p>
              </div>
            </div>

            {/* 8. Card Network Rules */}
            <div className='scroll-mt-24' id='8--card-network-rules'>
              <h2 className='text-2xl font-bold mb-4'>
                8. Card Association Rules
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                &quot;Card Payment Network Rules&quot; include all binding
                guidelines set by card networks (e.g., MasterCard, Visa,
                American Express). You must comply with all applicable rules,
                updates, and programme requirements. Any rule changes will bind
                you immediately. You are responsible for understanding and
                complying with these rules. If your non-compliance results in
                penalties for KulmiPay, you must reimburse us fully, and
                KulmiPay may suspend or terminate services.
              </p>
            </div>

            {/* 9. Charges */}
            <div className='scroll-mt-24' id='9--charges'>
              <h2 className='text-2xl font-bold mb-4'>9. Charges</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  9.1 You must pay all Charges related to your use of our
                  Services. Charges are quoted on our platform or by our team.
                  Charges may be increased or decreased at any time. Charges are
                  exclusive of VAT or other applicable taxes.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  9.2 You agree to pay VAT or other applicable taxes at the same
                  time you pay Charges.
                </p>
              </div>
            </div>

            {/* 10. Payment Processor */}
            <div className='scroll-mt-24' id='10--payment-processor'>
              <h2 className='text-2xl font-bold mb-4'>10. Payment Processor</h2>
              <p className='text-muted-foreground leading-relaxed'>
                KulmiPay uses third-party Payment Processors. Payments or
                credits made via our Services are subject to the Payment
                Processor&apos;s terms and privacy policies. KulmiPay is not
                responsible for Payment Processor errors.
              </p>
            </div>

            {/* 11. Disclaimer by Users */}
            <div className='scroll-mt-24' id='11--disclaimer-by-users'>
              <h2 className='text-2xl font-bold mb-4'>
                11. Disclaimer by Users
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Any information or content shared through the Services is the
                  sole responsibility of the person who originated it. You
                  access such content at your own risk. We are not liable for
                  any errors, omissions, damages, or losses related to such
                  content.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You are responsible for all data you contribute to the
                  Services, ensuring you have the right to share such data,
                  keeping registration information accurate, and your activity
                  related to the Services.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  Our Services may contain links to third-party websites. You
                  acknowledge that these links come with risks and that KulmiPay
                  is not responsible for those risks or their consequences. Your
                  dealings with third-party organisations, including
                  transactions, warranties, or disputes, are strictly between
                  you and them.
                </p>
              </div>
            </div>

            {/* 12. Compliance with Law */}
            <div className='scroll-mt-24' id='12--compliance-with-law'>
              <h2 className='text-2xl font-bold mb-4'>
                12. Compliance with Law
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                You agree to use KulmiPay APIs and Services legally. This
                includes observing import/export, privacy, and local laws, not
                promoting illegal or dangerous activity, and requiring your End
                Users to comply with laws and these Terms. You will not enable
                End Users to violate applicable laws or these Terms.
              </p>
            </div>

            {/* 13. Termination */}
            <div className='scroll-mt-24' id='13--termination'>
              <h2 className='text-2xl font-bold mb-4'>13. Termination</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  13.1 Either party may terminate this Agreement with 14
                  days&apos; notice.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  13.2 Termination may lead to the deletion of all associated
                  data. Where possible, we may offer you the chance to retrieve
                  it — unless doing so would be illegal or harmful.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  13.3 Post-termination, your data will be handled in accordance
                  with our Privacy Policy. Clause 14 shall survive termination.
                </p>
              </div>
            </div>

            {/* 14. Disclaimer by KulmiPay */}
            <div className='scroll-mt-24' id='14--disclaimer-by-kulmipay'>
              <h2 className='text-2xl font-bold mb-4'>
                14. Disclaimer by KulmiPay
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay makes no guarantees as to: timeliness, reliability,
                  security, or quality of services; that services will meet your
                  expectations; that data will be accurate or secure; that
                  services will be error-free or uninterrupted; or that KulmiPay
                  is virus-free.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay is not responsible for: delays due to internet or
                  communication issues; third-party harm or unauthorised access;
                  bugs, service interruptions, or content errors. This Agreement
                  does not establish an employer/employee relationship.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You must design and test your applications to avoid harm or
                  injury. You are solely responsible for any loss caused by your
                  use of our services or content.
                </p>
              </div>
            </div>

            {/* 15. Indemnification */}
            <div className='scroll-mt-24' id='15--indemnification'>
              <h2 className='text-2xl font-bold mb-4'>15. Indemnification</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  You agree to defend, indemnify, and hold harmless KulmiPay and
                  its subsidiaries, agents, licensors, managers, affiliates, and
                  their employees, contractors, agents, officers, and directors
                  from and against any claims, damages, obligations, losses,
                  liabilities, costs or debt, and expenses (including
                  attorney&apos;s fees) arising from or related to:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>Your use of and access to the KulmiPay Service</li>
                  <li>Your violation of any term of these Terms</li>
                  <li>
                    Your violation of any third-party rights, including privacy
                    or intellectual property rights
                  </li>
                  <li>Your violation of any applicable law or regulation</li>
                  <li>Customer Data transmitted via your account</li>
                  <li>
                    Personal injury or property damage from your use of KulmiPay
                    Services
                  </li>
                  <li>
                    Any other party&apos;s use of your credentials or access
                    codes
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  This clause shall survive termination of this Agreement.
                </p>
              </div>
            </div>

            {/* 16. Privacy & Security */}
            <div className='scroll-mt-24' id='16--privacy---security'>
              <h2 className='text-2xl font-bold mb-4'>
                16. Privacy and Security
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  &quot;Customer Data&quot; means all information you provide to
                  or generate via the Website, KulmiPay Content, or KulmiPay
                  Service, including Account Information and End User Data.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You are solely responsible for: obtaining lawful consent from
                  End Users for data collection and processing; notifying End
                  Users about data use; complying with all data protection and
                  privacy laws; and maintaining a privacy policy that is legally
                  compliant, clearly displayed, and accurate.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  You consent to KulmiPay&apos;s collection and use of data
                  under our{" "}
                  <Link
                    href='/privacy-policy'
                    className='text-brand hover:underline'>
                    Privacy Policy
                  </Link>
                  . You acknowledge you are solely responsible for injury, harm,
                  or damage arising from your use or misuse of data.
                </p>
              </div>
            </div>

            {/* 17. Proprietary Rights */}
            <div className='scroll-mt-24' id='17--proprietary-rights'>
              <h2 className='text-2xl font-bold mb-4'>
                17. Proprietary Rights
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay (and its licensors) retain all rights, title, and
                  interest in KulmiPay Services, suggestions, ideas, feedback,
                  enhancements provided by you, and intellectual property such
                  as trademarks, logos, and product names.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  This Agreement does not transfer ownership rights to you. It
                  only grants rights necessary to fulfil your obligations. You
                  are forbidden from framing, mirroring, or linking KulmiPay
                  content without permission. KulmiPay may change, expand, or
                  withdraw services at its sole discretion.
                </p>
              </div>
            </div>

            {/* 18. General */}
            <div className='scroll-mt-24' id='18--general'>
              <h2 className='text-2xl font-bold mb-4'>18. General</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.1 Entire Agreement:</span>{" "}
                  This Agreement supersedes all prior understandings and
                  agreements.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>
                    18.2 Electronic Notices:
                  </span>{" "}
                  You consent to electronic notifications via email, site
                  announcements, and support inbox.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.3 Modifications:</span>{" "}
                  Changes must be in writing and signed by KulmiPay&apos;s
                  authorised representative.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.4 No Waiver:</span> Failure
                  to enforce any right does not waive it.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.5 Assignability:</span> You
                  may not assign this Agreement without KulmiPay&apos;s written
                  consent. KulmiPay may assign freely.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.6 Severability:</span> If
                  any clause is found invalid, it shall be modified or severed
                  without affecting the rest.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.7 Choice of Law:</span>{" "}
                  This Agreement is governed by the laws of Kenya. Disputes will
                  be handled in Kenyan courts.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>
                    18.8 Independent Legal Advice:
                  </span>{" "}
                  You acknowledge that KulmiPay does not provide legal advice
                  and that you had the opportunity to seek independent legal
                  counsel.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.9 Language:</span> This
                  Agreement is drafted in English and shall prevail in the event
                  of translation disputes.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>18.10 Good Faith:</span>{" "}
                  Parties agree to act in good faith and work together to fulfil
                  the Agreement&apos;s objectives.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  <span className='font-semibold'>
                    18.11 Dispute Resolution:
                  </span>{" "}
                  Parties shall attempt to resolve disputes amicably. If
                  unresolved within 14 days, disputes shall be referred to
                  Kenyan courts.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className='mt-12 rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8'>
            <h2 className='text-lg font-semibold mb-1'>
              Questions About These Terms?
            </h2>
            <p className='text-sm text-muted-foreground mb-4'>
              If you have any questions regarding these Terms and Conditions,
              please contact our team.
            </p>
            <Link
              href='mailto:onboarding@kulmipay.com'
              className='text-sm font-semibold text-brand hover:underline'>
              onboarding@kulmipay.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
