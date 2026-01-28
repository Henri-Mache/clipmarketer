import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Privacy Policy | ClipMarketer',
  description: 'Learn how ClipMarketer collects, uses, and protects your personal data. Our privacy policy explains your rights and our data protection practices.',
  alternates: {
    canonical: 'https://clipmarketer.com/privacy-policy',
    languages: {
      'en': 'https://clipmarketer.com/privacy-policy',
      'de': 'https://clipmarketer.com/de/datenschutzerklaerung',
    },
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-newsreader font-semibold text-slate-900 mb-8 tracking-tight">
            Privacy Policy
          </h1>
        </AnimateOnScroll>

        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="text-slate-600 leading-relaxed">
            <AnimateOnScroll delay="delay-75">
              <h2 className="text-2xl text-slate-900 font-newsreader font-medium mb-4 mt-8 first:mt-0">
                1. An overview of data protection
              </h2>
              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                General information
              </h3>
              <p className="mb-6">
                The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term &quot;personal data&quot; comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
              </p>

              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                Data recording on this website
              </h3>
              <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
                Who is the responsible party for the recording of data on this website (i.e., the &quot;controller&quot;)?
              </h4>
              <p className="mb-4">
                The data on this website is processed by the operator of the website, whose contact information is available under section &quot;Information about the responsible party (referred to as the &quot;controller&quot; in the GDPR)&quot; in this Privacy Policy.
              </p>

              <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
                How do we record your data?
              </h4>
              <p className="mb-4">
                We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.
              </p>
              <p className="mb-4">
                Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
              </p>

              <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
                What are the purposes we use your data for?
              </h4>
              <p className="mb-4">
                A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other order enquiries.
              </p>

              <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
                What rights do you have as far as your information is concerned?
              </h4>
              <p className="mb-4">
                You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
              </p>
              <p className="mb-4">
                Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
              </p>

              <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
                Analysis tools and tools provided by third parties
              </h4>
              <p className="mb-6">
                There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs. For detailed information about these analysis programs please consult our Data Protection Declaration below.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="delay-150">
              <h2 className="text-2xl text-slate-900 font-newsreader font-medium mb-4 mt-12">
                2. Hosting
              </h2>
              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                Hetzner
              </h3>
              <p className="mb-4">
                We are hosting the content of our website at the following provider:
              </p>
              <p className="mb-4">
                The provider is the Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany (hereinafter referred to as Hetzner).
              </p>
              <p className="mb-4">
                For details, please view the data privacy policy of Hetzner:{' '}
                <a href="https://www.hetzner.com/de/legal/privacy-policy/" className="text-indigo-600 hover:text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                  https://www.hetzner.com/de/legal/privacy-policy/
                </a>
              </p>
              <p className="mb-6">
                We use Hetzner on the basis of Art. 6(1)(f) GDPR. We have a legitimate interest in the most reliable depiction of our website possible. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TDDDG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="delay-225">
              <h2 className="text-2xl text-slate-900 font-newsreader font-medium mb-4 mt-12">
                3. General information and mandatory information
              </h2>
              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                Data protection
              </h3>
              <p className="mb-4">
                The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
              </p>
              <p className="mb-4">
                Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.
              </p>
              <p className="mb-6">
                We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.
              </p>

              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                Information about the responsible party (referred to as the &quot;controller&quot; in the GDPR)
              </h3>
              <p className="mb-4">
                The data processing controller on this website is:
              </p>
              <p className="mb-2">Henri Matteo Mache</p>
              <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
              <p className="mb-2">23562 Lübeck</p>
              <p className="mb-4">Germany</p>
              <p className="mb-2">Phone: +4915164327820</p>
              <p className="mb-6">
                E-mail:{' '}
                <a href="mailto:hello@clipmarketer.com" className="text-indigo-600 hover:text-indigo-500 underline">
                  hello@clipmarketer.com
                </a>
              </p>
              <p className="mb-6">
                The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).
              </p>

              <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6">
                Storage duration
              </h3>
              <p className="mb-6">
                Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="delay-300">
              <h2 className="text-2xl text-slate-900 font-newsreader font-medium mb-4 mt-12">
                4. Cookies and similar technologies
              </h2>
              <p className="mb-6">
                Below you will find an overview of all cookies and similar technologies used on this website:
              </p>
              <div
                className="ccm-cookie-declaration bg-slate-50 border border-slate-200 rounded-xl p-6"
                data-lang="en_EN"
              >
                Please enable JavaScript to see the list of all declared cookies and similar technologies.
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}
