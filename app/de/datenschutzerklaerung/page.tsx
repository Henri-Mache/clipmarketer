import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | ClipMarketer',
  description: 'Erfahren Sie, wie ClipMarketer Ihre personenbezogenen Daten erhebt, verwendet und schützt. Unsere Datenschutzerklärung informiert Sie über Ihre Rechte und unsere Datenschutzpraktiken.',
  alternates: {
    canonical: 'https://clipmarketer.com/de/datenschutzerklaerung',
    languages: {
      'en': 'https://clipmarketer.com/privacy-policy',
      'de': 'https://clipmarketer.com/de/datenschutzerklaerung',
    },
  },
}

export default function DatenschutzerklaerungPage() {
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
            Datenschutzerklärung
          </h1>
        </AnimateOnScroll>

        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="text-slate-600 leading-relaxed">
          <AnimateOnScroll delay="delay-75">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Allgemeine Hinweise
            </h3>
            <p className="mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Datenerfassung auf dieser Website
            </h3>
            <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
              Wie erfassen wir Ihre Daten?
            </h4>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
              Wofür nutzen wir Ihre Daten?
            </h4>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>

            <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="mb-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h4 className="text-lg text-slate-900 font-medium mb-2 mt-4">
              Analyse-Tools und Tools von Drittanbietern
            </h4>
            <p className="mb-6">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-150">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              2. Hosting
            </h2>
            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Hetzner
            </h3>
            <p className="mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mb-4">
              Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (nachfolgend Hetzner).
            </p>
            <p className="mb-4">
              Details entnehmen Sie der Datenschutzerklärung von Hetzner:{' '}
              <a href="https://www.hetzner.com/de/legal/privacy-policy/" className="text-indigo-600 hover:text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                https://www.hetzner.com/de/legal/privacy-policy/
              </a>
            </p>
            <p className="mb-6">
              Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-225">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Datenschutz
            </h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-6">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-2">Henri Matteo Mache</p>
            <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
            <p className="mb-2">23562 Lübeck</p>
            <p className="mb-4">Deutschland</p>
            <p className="mb-2">Telefon: +4915164327820</p>
            <p className="mb-6">
              E-Mail:{' '}
              <a href="mailto:hello@clipmarketer.com" className="text-indigo-600 hover:text-indigo-500 underline">
                hello@clipmarketer.com
              </a>
            </p>
            <p className="mb-6">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl text-slate-900 font-medium mb-3 mt-6 font-newsreader">
              Speicherdauer
            </h3>
            <p className="mb-6">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              4. Cookies und ähnliche Technologien
            </h2>
            <p className="mb-6">
              Nachfolgend finden Sie eine Übersicht über alle auf dieser Website verwendeten Cookies und ähnlichen Technologien:
            </p>
            <div
              className="ccm-cookie-declaration bg-slate-50 border border-slate-200 rounded-xl p-6"
              data-lang="de_DE"
            >
              Bitte aktivieren Sie Javascript, um die Liste aller deklarierten Cookies und ähnlicher Techniken zu sehen.
            </div>
          </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}
