"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";
import Image from "next/image";
import Gallery from "../components/Gallery/Gallery";

const tabs = ["Apps", "Games"];

export default function AppStoreTabs() {
  const [active, setActive] = useState("Apps");

  return (
    <div className={styles.experience}>
      <h1>Impressum</h1>
      <p className={styles.first}>Angaben gemäß § 5 DDG</p>
      <h2>Gianluca Jahn</h2>

      <p>Edmund-Weber-Straße 200</p>
      <p>44651 Herne</p>

      <p>
        <strong>Vertreten durch:</strong>
      </p>
      <p>Gianluca Jahn</p>

      <p>
        <strong>Kontakt:</strong>
      </p>
      <p>Telefon: 0155-63252373</p>
      <p>E-Mail: contact@soulmadeof.ink</p>

      <p>
        <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong>
      </p>
      <p>Gianluca Jahn</p>
      <p>Edmund-Weber-Straße 200</p>
      <p>44651 Herne</p>

      <p>
        <strong>Haftungsausschluss:</strong>
      </p>
      <p>
        <strong>Haftung für Inhalte</strong>
      </p>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>

      <p>
        <strong>Urheberrecht</strong>
      </p>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>

      <p>
        <strong>Datenschutz</strong>
      </p>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
        der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und
        Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </p>

      <p>
        <strong>Google Analytics</strong>
      </p>
      <p>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der
        Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
        Cookie erzeugten Informationen über Ihre Benutzung dieser Website
        (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den
        USA übertragen und dort gespeichert. Google wird diese Informationen
        benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
        weitere mit der Websitenutzung und der Internetnutzung verbundene
        Dienstleistungen zu erbringen. Auch wird Google diese Informationen
        gegebenenfalls an Dritte übertragen, sofern dies gesetzlich
        vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
        verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
        Daten der Google in Verbindung bringen. Sie können die Installation der
        Cookies durch eine entsprechende Einstellung Ihrer Browser Software
        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich
        nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit
        der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
        beschriebenen Art und Weise und zu dem zuvor benannten Zweck
        einverstanden.
      </p>

      <p>Impressum von Impressum-Generator.de. Powered by Franziska Hasselbach, Bonn.</p>
    </div>
  );
}
