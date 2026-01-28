import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | ClipMarketer',
  description: 'Lesen Sie die Allgemeinen Geschäftsbedingungen für die Nutzung der ClipMarketer-Dienste. Informieren Sie sich über Ihre Rechte und Pflichten bei der Nutzung unserer Video-Clipping- und Content-Distribution-Plattform.',
  alternates: {
    canonical: 'https://www.clipmarketer.com/de/agb',
    languages: {
      'en': 'https://www.clipmarketer.com/terms-of-service',
      'de': 'https://www.clipmarketer.com/de/agb',
    },
  },
}

export default function AGBPage() {
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
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
        </AnimateOnScroll>

        <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="text-slate-600 leading-relaxed">
          <AnimateOnScroll delay="delay-75">
            <p className="mb-4">
              für die Erbringung von Dienstleistungen durch
            </p>
            <p className="mb-2 text-slate-900">Henri Matteo Mache</p>
            <p className="mb-2">Dorothea-Erxleben-Straße 56</p>
            <p className="mb-2">23562 Lübeck</p>
            <p className="mb-4">Deutschland</p>
            <p className="mb-6">
              E-Mail:{' '}
              <a href="mailto:hello@clipmarketer.com" className="text-indigo-600 hover:text-indigo-500 underline">
                hello@clipmarketer.com
              </a>
            </p>
            <p className="mb-6">(nachfolgend &quot;Auftragnehmer&quot;)</p>
            <p className="mb-6">gegenüber seinen Kunden (nachfolgend &quot;Auftraggeber&quot;)</p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-150">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              1. Allgemeines
            </h2>
            <p className="mb-4">
              1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Erbringung von Dienstleistungen zwischen dem Auftraggeber und dem Auftragnehmer, die unter Einbeziehung dieser AGB geschlossen werden.
            </p>
            <p className="mb-4">
              1.2 Der Auftragnehmer ist berechtigt, zur Erfüllung seiner vertraglichen Pflichten in eigenem Namen und auf eigene Rechnung Subunternehmer einzusetzen. Subunternehmer können ihrerseits weitere Subunternehmer beauftragen. Der Auftragnehmer bleibt in jedem Fall alleiniger Vertragspartner des Auftraggebers. Der Einsatz von Subunternehmern erfolgt nicht, sofern für den Auftragnehmer erkennbar ist, dass deren Einsatz berechtigten Interessen des Auftraggebers widerspricht.
            </p>
            <p className="mb-4">
              1.3 Soweit neben diesen AGB weitere Vertragsdokumente, Leistungsbeschreibungen oder individuelle Vereinbarungen Vertragsbestandteil geworden sind, haben diese im Falle eines Widerspruchs Vorrang vor diesen AGB.
            </p>
            <p className="mb-6">
              1.4 Abweichende Allgemeine Geschäftsbedingungen des Auftraggebers finden keine Anwendung, es sei denn, ihrer Geltung wird durch den Auftragnehmer ausdrücklich schriftlich zugestimmt.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-225">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              2. Vertragsgegenstand und Leistungsumfang
            </h2>
            <p className="mb-4">
              2.1 Der Auftragnehmer erbringt als selbständiger Unternehmer insbesondere folgende Leistungen gegenüber dem Auftraggeber: Bereitstellung von Dienstleistungen und digitalen Funktionen im Bereich <span className="text-slate-900">Clip Marketing, Content Clipping, Kurzvideo-Erstellung, Content-Repurposing, Distribution und Analyse von Kurzform-Content</span>, insbesondere über die Online-Plattform <span className="text-slate-900">ClipMarketer.com</span>.
            </p>
            <p className="mb-4">
              2.2 ClipMarketer.com dient der Analyse, Aufbereitung, Bearbeitung und Verteilung von Kurzvideo-Inhalten, die aus vom Auftraggeber bereitgestelltem Long-Form-Content (z. B. Podcasts, Interviews, Videos) abgeleitet werden. Eine Veröffentlichung oder Weiterverwertung erfolgt ausschließlich im Rahmen der vom Auftraggeber beauftragten Leistungen.
            </p>
            <p className="mb-4">
              2.3 Der konkrete Leistungsumfang ergibt sich aus individuellen Vereinbarungen, gebuchten Paketen, Abonnementplänen sowie aus der jeweils aktuellen Leistungsbeschreibung auf ClipMarketer.com.
            </p>
            <p className="mb-4">
              2.4 Der Auftragnehmer erbringt die vertraglich geschuldeten Leistungen mit größtmöglicher Sorgfalt und nach dem jeweils anerkannten Stand der Technik.
            </p>
            <p className="mb-4">
              2.5 Der Auftragnehmer schuldet keinen bestimmten wirtschaftlichen oder marketingbezogenen Erfolg. Insbesondere wird keine Garantie für Reichweite, Engagement, Umsatz, Follower-Wachstum oder virale Verbreitung übernommen.
            </p>
            <p className="mb-6">
              2.6 Der Auftragnehmer ist in der Durchführung seiner Leistungen frei und nicht an Weisungen hinsichtlich Art, Ort oder Zeit der Leistungserbringung gebunden. Die Leistungserbringung erfolgt lediglich in Abstimmung mit dem Auftraggeber.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              3. Mitwirkungspflichten des Auftraggebers
            </h2>
            <p className="mb-4">
              3.1 Der Auftraggeber stellt sicher, dass sämtliche bereitgestellten Inhalte (z. B. Videos, Audiodateien, Texte, Marken, Logos) rechtmäßig genutzt werden dürfen und keine Rechte Dritter verletzen.
            </p>
            <p className="mb-4">
              3.2 Der Auftraggeber ist allein verantwortlich für die rechtliche Zulässigkeit der Inhalte, insbesondere im Hinblick auf Urheber-, Leistungsschutz-, Marken-, Persönlichkeits- und Datenschutzrechte.
            </p>
            <p className="mb-6">
              3.3 Der Auftragnehmer haftet nicht für Verzögerungen, Einschränkungen oder Mängel der Leistungserbringung, die auf unvollständige, fehlerhafte oder unzulässige Inhalte des Auftraggebers zurückzuführen sind. Die Regelungen zur Haftung bleiben unberührt.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-375">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              4. Vergütung
            </h2>
            <p className="mb-4">
              4.1 Die Vergütung richtet sich nach den individuell vereinbarten Preisen oder der jeweils gültigen Preisübersicht auf ClipMarketer.com.
            </p>
            <p className="mb-4">
              4.2 Die Vergütung ist nach Leistungserbringung bzw. bei Abonnementmodellen nach Ablauf des jeweiligen Abrechnungszeitraums fällig (§ 614 BGB).
            </p>
            <p className="mb-6">
              4.3 Rechnungen werden elektronisch per E-Mail bereitgestellt. Der Rechnungsbetrag ist innerhalb von 14 Tagen nach Zugang der Rechnung ohne Abzug zu zahlen.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-450">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              5. Haftung / Freistellung
            </h2>
            <p className="mb-4">
              5.1 Der Auftragnehmer haftet uneingeschränkt bei Vorsatz oder grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit und bei zwingender gesetzlicher Haftung.
            </p>
            <p className="mb-4">
              5.2 Bei fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="mb-4">
              5.3 Eine Haftung für wirtschaftlichen Erfolg, Marketingwirkung, Reichweite, Plattform-Algorithmen oder dauerhafte Verfügbarkeit externer Plattformen (z. B. TikTok, Instagram, YouTube) ist ausgeschlossen.
            </p>
            <p className="mb-6">
              5.4 Der Auftraggeber stellt den Auftragnehmer von sämtlichen Ansprüchen Dritter frei, die aufgrund der Nutzung der Leistungen oder bereitgestellter Inhalte durch den Auftraggeber entstehen.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-525">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              6. Vertragsdauer und Kündigung
            </h2>
            <p className="mb-4">
              6.1 Vertragslaufzeiten und Kündigungsfristen ergeben sich aus der individuellen Vereinbarung oder dem gebuchten Abonnement.
            </p>
            <p className="mb-4">
              6.2 Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p className="mb-6">
              6.3 Nach Vertragsende werden vom Auftraggeber bereitgestellte Inhalte nach Wahl des Auftraggebers gelöscht oder zurückgegeben, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-600">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              7. Vertraulichkeit und Datenschutz
            </h2>
            <p className="mb-4">
              7.1 Der Auftragnehmer verpflichtet sich, alle im Rahmen der Vertragsdurchführung bekannt gewordenen Informationen vertraulich zu behandeln. Diese Verpflichtung gilt zeitlich unbegrenzt.
            </p>
            <p className="mb-6">
              7.2 Der Auftragnehmer verpflichtet sich zur Einhaltung der geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO und des Bundesdatenschutzgesetzes.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-675">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              8. Besondere Bestimmungen für ClipMarketer.com
            </h2>
            <p className="mb-4">
              8.1 ClipMarketer.com ist kein Hosting-, Streaming- oder Download-Dienst für Inhalte Dritter.
            </p>
            <p className="mb-4">
              8.2 Die Nutzung der Plattform dient ausschließlich der Content-Bearbeitung, Analyse, Planung und Distribution im Rahmen von Social-Media-Marketing.
            </p>
            <p className="mb-4">
              8.3 Eine missbräuchliche, automatisierte oder übermäßige Nutzung, insbesondere Scraping, Reverse Engineering oder Umgehung technischer Schutzmaßnahmen, ist untersagt.
            </p>
            <p className="mb-4">
              8.4 Der Auftragnehmer übernimmt keine Gewähr für eine jederzeitige, unterbrechungsfreie Verfügbarkeit der Plattform.
            </p>
            <p className="mb-6">
              8.5 Der Auftragnehmer ist berechtigt, den Betrieb von ClipMarketer.com ganz oder teilweise einzustellen, sofern wirtschaftliche, technische oder rechtliche Gründe dies erfordern. Bereits erworbene Nutzungsrechte bestehen ausschließlich für die Dauer des tatsächlichen Betriebs.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-750">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              9. Schlussbestimmungen
            </h2>
            <p className="mb-4">
              9.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p className="mb-4">
              9.2 Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p className="mb-6">
              9.3 Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz des Auftragnehmers.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-825">
            <h2 className="text-2xl text-slate-900 font-medium mb-4 mt-12 font-newsreader">
              10. Online-Streitbeilegung
            </h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" className="text-indigo-600 hover:text-indigo-500 underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mb-6">
              Der Auftragnehmer ist weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren teilzunehmen.
            </p>
          </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}
