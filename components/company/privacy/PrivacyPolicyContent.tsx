import Link from "next/link";

export function PrivacyPolicyContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-[#0A0A0B] dark:via-[#0F0D0B] dark:to-[#1A1510]' />
        <div className='absolute top-20 -right-40 w-100 h-100 rounded-full bg-brand/8 blur-[100px] pointer-events-none' />
        <div className='relative w-full px-6 md:px-12 pt-28 pb-6 md:pt-36 md:pb-10'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4'>
              Privacy Policy
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed'>
              KulmiPay (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
              operates https://www.kulmipay.com (the &quot;Site&quot;). This
              page informs you of our policies regarding the collection, use,
              and disclosure of Personal Information we receive from users of
              the Site and other KulmiPay services, including the API,
              Documentation sites, and Web Widgets.
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
            {[
              "1. Overview",
              "2. Updates & Amendments",
              "3. Age Restriction",
              "4. Information Collection",
              "5. Cookies",
              "6. How We Protect Your Information",
              "7. How We Share Information",
              "8. Transfer of Personal Information",
              "9. Grounds for Processing",
              "10. Your Choices & Rights",
              "11. Data Retention",
              "12. Data Protection Officer",
              "13. Security",
              "14. Changes to This Policy",
            ].map((title) => (
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
            {/* 1. Overview */}
            <div className='scroll-mt-24' id='1--overview'>
              <h2 className='text-2xl font-bold mb-4'>1. Overview</h2>
              <p className='text-muted-foreground leading-relaxed'>
                KulmiPay offers an online payment platform that makes it easy
                for merchants to accept electronic payments from customers.
                KulmiPay obtains Personal Data about you from various sources to
                provide our Services and to manage our Sites. You may be a
                visitor to one of our websites, a user of one or more of our
                Services, or a customer of a KulmiPay Client. This Privacy
                Policy is intended to set certain standards across the
                operations of KulmiPay Limited.
              </p>
            </div>

            {/* 2. Updates & Amendments */}
            <div className='scroll-mt-24' id='2--updates---amendments'>
              <h2 className='text-2xl font-bold mb-4'>
                2. Updates, Modifications &amp; Amendments
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  We may need to update, modify, or amend our Privacy Policy as
                  our technology evolves and as required by law. We reserve the
                  right to make changes to this Privacy Policy from time to time
                  and notify Users of material changes. The Privacy Policy will
                  apply from the effective date provided on our website.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  We advise that you check this page often, referring to the
                  date of the last modification on the page. If a User objects
                  to any of the changes to this Privacy Policy, the User must
                  cease using this Site, or terminate their account in the event
                  an account has been created.
                </p>
              </div>
            </div>

            {/* 3. Age Restriction */}
            <div className='scroll-mt-24' id='3--age-restriction'>
              <h2 className='text-2xl font-bold mb-4'>3. Age Restriction</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Our website and services are not directed to children under 18.
                We do not knowingly collect information from children under 18.
                If as a parent or guardian, you become aware that your child or
                ward has provided us with any information without your consent,
                please contact us through the details provided in this Privacy
                Policy.
              </p>
            </div>

            {/* 4. Information Collection */}
            <div className='scroll-mt-24' id='4--information-collection'>
              <h2 className='text-2xl font-bold mb-4'>
                4. Information Collection and Use
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                While using our Site, we may ask you to provide us with certain
                personally identifiable information that can be used to contact
                or identify you. Personally identifiable information may
                include, but is not limited to, your name (&quot;Personal
                Information&quot;).
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.1 Personal Information
              </h3>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  As part of our operations, KulmiPay collects and processes
                  certain types of information (such as name, telephone numbers,
                  address, etc.) of individuals that make them easily
                  identifiable. These individuals include current, past, and
                  prospective employees, merchants, suppliers/vendors, customers
                  of merchants, Users, and other individuals whom KulmiPay
                  communicates or deals with (&quot;Data Subject(s)&quot;).
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay is firmly committed to complying with applicable data
                  protection laws, regulations, rules, and principles to ensure
                  the security of Personal Information handled by the Company.
                  To gain full access to our website and services, you must
                  register for a KulmiPay account. When you register, we collect
                  Personal Information that you voluntarily provide to us.
                  Personal Information refers to information relating to an
                  identified person or information that can be used to identify
                  you (e.g., email address, bank details, name, telephone
                  number). It may also include anonymous information that may be
                  linked to you specifically (e.g., IP address).
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  We use your Personal Information to:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>Provide you with the required services</li>
                  <li>Respond to your questions or requests</li>
                  <li>
                    Improve features, website content and analyse data to
                    develop products and services
                  </li>
                  <li>Address inappropriate use of our website</li>
                  <li>
                    Prevent, detect and manage risk against fraud and illegal
                    activities using internal and third-party screening tools
                  </li>
                  <li>
                    Send you marketing content, newsletters, and service updates
                    (with an option to unsubscribe)
                  </li>
                  <li>
                    Verify your identity and the information you provide in line
                    with KulmiPay&apos;s statutory obligations
                  </li>
                  <li>Maintain up-to-date records</li>
                  <li>
                    Resolve disputes that may arise, including investigations by
                    law enforcement or regulatory bodies
                  </li>
                  <li>
                    Any other purpose that we disclose to you in the course of
                    providing KulmiPay services
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  We may retrieve additional Personal Information about you from
                  third parties and other identification/verification services
                  such as your financial institution and payment processor. With
                  your consent, we may also collect additional Personal
                  Information through emails, surveys, and other forms of
                  communication. We will not share or disclose your Personal
                  Information with a third party without your consent except as
                  may be required for providing our services or under applicable
                  legislation.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  In providing you with the services, we may rely on third-party
                  servers located in foreign jurisdictions, which may require
                  the transfer or maintenance of your personally identifiable
                  information on computers or servers in foreign jurisdictions.
                  We will endeavour to ensure that such foreign jurisdictions
                  have data protection legislation that is no less than the
                  existing data protection regulations in force in Kenya.
                </p>
              </div>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.2 Information from Website Visitors
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                We do not collect your Personal Information when you visit the
                website. However, to monitor and improve our website and
                services, we may collect non-personally-identifiable
                information. We will not share or disclose this information with
                third parties except as a necessary part of providing our
                website and services.
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.3 Information from Test Users
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                When you test our services using the &quot;Sandbox&quot; part of
                our website, we collect both non-personally identifiable and
                personally identifiable information including your IP address,
                information about your computer, and other standard web log
                information. We also collect and store your email address and
                card information for test transactions. In compliance with the
                Payment Card Industry Data Security Standard (PCI DSS), we
                implement access control measures, security protocols, and
                encryption to ensure your card information is safe and secure.
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.4 Information from Checkout Users
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                When you checkout with KulmiPay on a merchant&apos;s website, we
                collect your card information, email address, mobile phone
                number, and billing and shipping address. We implement access
                control measures, security protocols, and encryption in
                compliance with PCI DSS. We may share your contact information
                with merchants as part of purchase details for record purposes.
                We do not share your card information with merchants.
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.5 Purpose Limitation
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                KulmiPay collects Personal Information only for identified
                purposes and for which consent has been obtained. Such Personal
                Information cannot be reused for another purpose that is
                incompatible with the original purpose, except where consent is
                obtained.
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-8'>
                4.6 Data Minimisation
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                KulmiPay limits Personal Information collection and usage to
                data that is relevant, adequate, and absolutely necessary for
                carrying out the purpose for which the data is processed. Where
                the purpose allows, anonymised data will be used.
              </p>
            </div>

            {/* 5. Cookies */}
            <div className='scroll-mt-24' id='5--cookies'>
              <h2 className='text-2xl font-bold mb-4'>5. Cookies</h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Cookies are files with a small amount of data, which may
                  include an anonymous unique identifier. Like many sites, we
                  use &quot;cookies&quot; to collect information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our Site.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  We use cookies to identify you as a User, customise our
                  services, content, and advertising, help ensure your account
                  security, mitigate risk and prevent fraud, and promote trust
                  and safety on our website. Our cookies never store personal or
                  sensitive information; they simply hold a unique random
                  reference to you.
                </p>
              </div>
            </div>

            {/* 6. How We Protect Your Information */}
            <div
              className='scroll-mt-24'
              id='6--how-we-protect-your-information'>
              <h2 className='text-2xl font-bold mb-4'>
                6. How We Protect Your Information
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay shall establish adequate controls in order to protect
                  the integrity and confidentiality of Personal Information,
                  both in digital and physical format, and to prevent Personal
                  Information from being accidentally or deliberately
                  compromised.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay is committed to managing your Personal Information in
                  line with global industry best practices. We protect your
                  Personal Information using physical, technical, and
                  administrative security measures to reduce the risks of loss,
                  misuse, unauthorised access, disclosure, and alteration. We
                  also use industry-recommended security protocols including
                  data encryption, firewalls, and physical access controls.
                  Access to Personal Information is granted only to employees
                  who require it to fulfil their job responsibilities.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  Any Personal Information processing undertaken by an employee
                  who has not been authorised to do so as part of their
                  legitimate duties is unauthorised. Employees are forbidden to
                  use Personal Information for private or commercial purposes or
                  to disclose them to unauthorised persons.
                </p>
              </div>
            </div>

            {/* 7. How We Share Information */}
            <div className='scroll-mt-24' id='7--how-we-share-information'>
              <h2 className='text-2xl font-bold mb-4'>
                7. How We Share the Personal Information You Provide
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay does not sell, trade, or rent personal information to
                  anyone. However, to enable us to render our services, we may
                  share your information with trusted third parties such as
                  financial institutions, payment processors, verification
                  services, sanctions screening, and identity verification
                  services, as well as any third parties that you have directly
                  authorised to receive your Personal Information.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  We may disclose your Personal Information in compliance with
                  applicable law or a legal obligation to which we are bound.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  In the event that we enter into a transaction that alters the
                  structure of our business, such as a merger, sale, joint
                  venture, or other disposition, we may share Personal Data with
                  third parties in connection with such transaction. Any entity
                  which buys us or part of our business will have the right to
                  continue to use your Personal Data, but only in the manner set
                  out in this Privacy Policy unless you agree otherwise.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  Please note that merchants and other Users you buy from or
                  contract with have their own privacy policies. Although our
                  Terms of Use do not allow other transacting parties to use
                  your information beyond what you authorise, KulmiPay is not
                  responsible for their actions, including their information
                  protection practices.
                </p>
              </div>
            </div>

            {/* 8. Transfer of Personal Information */}
            <div
              className='scroll-mt-24'
              id='8--transfer-of-personal-information'>
              <h2 className='text-2xl font-bold mb-4'>
                8. Transfer of Personal Information
              </h2>

              <h3 className='text-lg font-semibold mb-3 mt-6'>
                8.1 Third-Party Processor within Kenya
              </h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                KulmiPay may engage the services of third parties in order to
                process Personal Information. The processing by such third
                parties shall be governed by a written contract with KulmiPay to
                ensure adequate protection and security measures are put in
                place.
              </p>

              <h3 className='text-lg font-semibold mb-3 mt-6'>
                8.2 Transfer to a Foreign Country
              </h3>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Where Personal Information is to be transferred to a country
                  outside Kenya, KulmiPay shall put adequate measures in place
                  to ensure the security of such Personal Information. This will
                  be done under the following conditions:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>The consent of the Data Subject has been obtained</li>
                  <li>
                    The transfer is necessary for the performance of a contract
                    between KulmiPay and the Data Subject
                  </li>
                  <li>
                    The transfer is necessary to conclude a contract between
                    KulmiPay and a third party in the interest of the Data
                    Subject
                  </li>
                  <li>
                    The transfer is for the establishment, exercise, or defence
                    of legal claims
                  </li>
                  <li>
                    The transfer is necessary to protect the vital interests of
                    the Data Subject or other persons
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay will take all necessary steps to ensure that Personal
                  Information is transmitted in a safe and secure manner.
                  Details of the protection given when your Personal Information
                  is transferred outside Kenya shall be provided to you upon
                  request.
                </p>
              </div>
            </div>

            {/* 9. Grounds for Processing */}
            <div className='scroll-mt-24' id='9--grounds-for-processing'>
              <h2 className='text-2xl font-bold mb-4'>
                9. Grounds for Processing of Personal Information
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Processing of Personal Information by KulmiPay shall be lawful
                  if at least one of the following applies:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    The Data Subject has given consent for one or more specific
                    purposes
                  </li>
                  <li>
                    Processing is necessary for the performance of a contract to
                    which the Data Subject is a party
                  </li>
                  <li>
                    Processing is necessary for compliance with a legal
                    obligation to which KulmiPay is subject
                  </li>
                  <li>
                    Processing is necessary to protect the vital interests of
                    the Data Subject or another natural person
                  </li>
                  <li>
                    Processing is necessary for the performance of a task
                    carried out in the public interest
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  For the purpose of this Privacy Policy, consent means any
                  freely given, specific, informed, and unambiguous indication
                  of the Data Subject&apos;s wishes by which they, through a
                  statement or a clear affirmative action, signify their
                  agreement to the processing of Personal Information relating
                  to them.
                </p>
              </div>
            </div>

            {/* 10. Choices & Rights */}
            <div className='scroll-mt-24' id='10--your-choices---rights'>
              <h2 className='text-2xl font-bold mb-4'>
                10. Your Choices &amp; Rights
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  Individuals who have Personal Information held by KulmiPay are
                  entitled to exercise the following rights:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                  <li>
                    Right to request for and access their Personal Information
                    collected and stored, including receiving data in a common
                    electronic format
                  </li>
                  <li>
                    Right to information on their personal information collected
                    and stored
                  </li>
                  <li>Right to objection or request for restriction</li>
                  <li>Right to object to automated decision making</li>
                  <li>
                    Right to request rectification and modification of Personal
                    Information
                  </li>
                  <li>Right to request deletion of their data</li>
                  <li>
                    Right to request movement of data from KulmiPay to a third
                    party (portability)
                  </li>
                  <li>
                    Right to object to, and request that KulmiPay restricts the
                    processing of their information
                  </li>
                </ul>
                <p className='text-muted-foreground leading-relaxed'>
                  Your request will be reviewed by KulmiPay&apos;s Data
                  Protection Officer and carried out except as restricted by law
                  or statutory obligations. You may decline to provide your
                  personal information when requested; however, certain or all
                  services may be unavailable to you.
                </p>
              </div>
            </div>

            {/* 11. Data Retention */}
            <div className='scroll-mt-24' id='11--data-retention'>
              <h2 className='text-2xl font-bold mb-4'>
                11. The Data that We Retain
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  We will retain your information for as long as your account is
                  active or as needed to provide our services to you, comply
                  with our legal and statutory obligations, or verify your
                  information with a financial institution.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay is statutorily obligated to retain data you provide
                  in order to process transactions, ensure settlements, make
                  refunds, identify fraud, and comply with laws and regulatory
                  guidelines applicable to us, our banking providers, and card
                  processors. Therefore, even after closing your account, we
                  will retain certain Personal Information and transaction data
                  to comply with these obligations.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  The length of storage shall be determined by: the contract
                  terms agreed between KulmiPay and the Data Subject; whether
                  the transaction has a statutory retention period; whether
                  there is an express request for deletion (provided no
                  subsisting investigation or contractual arrangement exists);
                  or whether KulmiPay has another lawful basis for retaining the
                  information.
                </p>
              </div>
            </div>

            {/* 12. DPO */}
            <div className='scroll-mt-24' id='12--data-protection-officer'>
              <h2 className='text-2xl font-bold mb-4'>
                12. Contact KulmiPay&apos;s Data Protection Officer (DPO)
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  If you have any questions relating to this Privacy Policy or
                  would like to find out more about exercising your data
                  protection rights, please reach out to our DPO via email at{" "}
                  <Link
                    href='mailto:dpo@kulmipay.com'
                    className='text-brand hover:underline'>
                    dpo@kulmipay.com
                  </Link>
                  .
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  KulmiPay maintains a data breach procedure in order to deal
                  with incidents concerning Personal Information. You may
                  contact our DPO upon becoming aware of any breach of Personal
                  Information or if your access credentials have been
                  compromised, to enable us to take the necessary steps towards
                  ensuring the security of your Personal Information or account.
                </p>
              </div>
            </div>

            {/* 13. Security */}
            <div className='scroll-mt-24' id='13--security'>
              <h2 className='text-2xl font-bold mb-4'>13. Security</h2>
              <p className='text-muted-foreground leading-relaxed'>
                We make reasonable efforts to ensure a level of security
                appropriate to the risk associated with the processing of
                Personal Data. We maintain organisational, technical, and
                administrative measures designed to protect Personal Data within
                our organisation against unauthorised access, destruction, loss,
                alteration, or misuse. Your Personal Data is only accessible to
                a limited number of personnel who need access to the information
                to perform their duties. While we strive to use commercially
                acceptable means to protect your Personal Information, we cannot
                guarantee its absolute security. If you have reason to believe
                that the security of your account has been compromised, please
                contact us immediately.
              </p>
            </div>

            {/* 14. Changes */}
            <div className='scroll-mt-24' id='14--changes-to-this-policy'>
              <h2 className='text-2xl font-bold mb-4'>
                14. Changes to This Privacy Policy
              </h2>
              <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  We reserve the right to update or change our Privacy Policy at
                  any time and you should check this Privacy Policy
                  periodically. Your continued use of the Service after we post
                  any modifications to the Privacy Policy on this page will
                  constitute your acknowledgment of the modifications and your
                  consent to abide and be bound by the modified Privacy Policy.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  If we make any material changes to this Privacy Policy, we
                  will notify you either through the email address you have
                  provided us or by placing a prominent notice on our website.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className='mt-12 rounded-xl border border-border dark:border-white/10 bg-linear-to-br from-brand-50 to-white dark:from-brand/5 dark:to-white/2 p-6 md:p-8'>
            <h2 className='text-lg font-semibold mb-1'>
              Questions About Your Privacy?
            </h2>
            <p className='text-sm text-muted-foreground mb-4'>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us.
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
