export default `<?xml version="1.0" encoding="utf-8"?>
<xs:schema elementFormDefault="qualified" xmlns="http://schemas.gov.sk/doc/eform/00603481.dopravneZnacenie.sk/0.2" xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http://schemas.gov.sk/doc/eform/00603481.dopravneZnacenie.sk/0.2">
  <xs:element name="E-form">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="Meta" type="E-formMetaType"/>
        <xs:element name="Body">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="ZoznamPriloh" type="ZoznamPrilohType" />
              <xs:element name="Ziadatel" type="ZiadatelType"/>
              <xs:element name="DopravneZnacenie" type="DopravneZnacenieType"/>
              <xs:element name="Uzavierka" type="UzavierkaType" minOccurs="0" />
              <xs:element name="KontaktnaOsobaRovnakaAkoZiadatel" type="xs:boolean"/>

              <!-- required when KontaktnaOsobaRovnakaAkoZiadatel false -->
              <xs:element name="KontaktnaOsoba" type="KontaktneUdajeType" minOccurs="0"/>

              <xs:element name="ZodpovednyProjektant" type="ZodpovednyProjektantType"/>

              <xs:element name="Dorucenie" type="DorucenieType"/>

              <xs:element name="ZakladneVyhlasenie" type="ZakladneVyhlasenieType"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>

  <xs:complexType name="UzavierkaType">
    <xs:annotation>
      <xs:documentation>Uzávierka</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="Typ" type="UzavierkaEnumType" />
      <!-- required when Ciastocna -->
      <xs:element name="SirkaVolnehoJazdnehoPruhu" type="xs:string" minOccurs="0" />

      <xs:element name="UliceOd" type="xs:string" />
      <xs:element name="UliceDo" type="xs:string" />
      <xs:element name="DlzkaVMetroch" type="xs:string" />
      <xs:element name="SirkaVMetroch" type="xs:string" />
      <xs:element name="DatumACasOd" type="xs:dateTime" />
      <xs:element name="DatumACasDo" type="xs:dateTime" />
      <xs:element name="Popis" type="xs:string" />
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="UzavierkaEnumType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Ciastocna"/>
      <xs:enumeration value="Uplna"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="ZoznamPrilohType">
    <xs:annotation>
      <xs:documentation>Zoznam priložených príloh</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="ProjektOrganizacieDopravy" type="ProjektOrganizacieDopravyPrilohaType" maxOccurs="unbounded" />
      <xs:element name="ZavazneStanoviskoKrajskehoDopravnehoInspektoratu" type="ZavazneStanoviskoKrajskehoDopravnehoInspektoratuPrilohaType" maxOccurs="unbounded" />
      <xs:element name="SituaciaSirsichVztahov" type="SituaciaSirsichVztahovPrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="StanoviskaSpravcovCiest" type="StanoviskaSpravcovCiestPrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="KopiaPovoleniaStavebnehoUradu" type="KopiaPovoleniaStavebnehoUraduPrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="StanoviskoDopravnehoPodnikuBratislava" type="StanoviskoDopravnehoPodnikuBratislavaPrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="VyhradenehoParkovanieVztahKPrevadzke" type="VyhradenehoParkovanieVztahKPrevadzkePrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="VyhradenehoParkovaniePreukazTZP" type="VyhradenehoParkovaniePreukazTZPPrilohaType" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="SplnomocnenieNaZastupovanie" type="SplnomocnenieNaZastupovaniePrilohaType" minOccurs="0" maxOccurs="unbounded" />
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="SplnomocnenieNaZastupovaniePrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="ProjektOrganizacieDopravyPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="ZavazneStanoviskoKrajskehoDopravnehoInspektoratuPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="SituaciaSirsichVztahovPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="StanoviskaSpravcovCiestPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="KopiaPovoleniaStavebnehoUraduPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="StanoviskoDopravnehoPodnikuBratislavaPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="VyhradenehoParkovanieVztahKPrevadzkePrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="VyhradenehoParkovaniePreukazTZPPrilohaType">
    <xs:complexContent>
      <xs:extension base="PrilohaType" />
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="PrilohaType" abstract="true">
    <xs:annotation>
      <xs:documentation>Priložená príloha</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="Nazov" type="xs:string">
        <xs:annotation>
          <xs:documentation>Názov</xs:documentation>
        </xs:annotation>
      </xs:element>
      <xs:element name="Prilozena" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>Indikátor či bola príloha priložená</xs:documentation>
        </xs:annotation>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="E-formMetaType">
    <xs:annotation>
      <xs:documentation>Metaúdaje elektronického formulára</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="ID" type="xs:string"/>
      <xs:element name="Name" type="xs:string"/>
      <xs:element name="Description" type="xs:string" minOccurs="0"/>
      <xs:element name="Gestor" type="xs:string"/>
      <xs:element name="RecipientId" type="xs:string"/>
      <xs:element name="Version" type="xs:string"/>
      <xs:element name="ZepRequired" type="xs:boolean"/>
      <xs:element name="EformUuid" type="xs:string"/>
      <xs:element name="SenderID" type="xs:string" default="mailto:"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="EnumerationType" abstract="true">
    <xs:annotation>
      <xs:documentation>Položka číselníka</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="Code" type="xs:string">
        <xs:annotation>
          <xs:documentation>Kód</xs:documentation>
        </xs:annotation>
      </xs:element>
      <xs:element name="Name" type="xs:string">
        <xs:annotation>
          <xs:documentation>Názov</xs:documentation>
        </xs:annotation>
      </xs:element>
      <xs:element name="WsEnumCode" type="xs:string">
        <xs:annotation>
          <xs:documentation>Kod ciselnika WS sluzby</xs:documentation>
        </xs:annotation>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="AdresaType">
    <xs:sequence>
      <xs:element name="Meno" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="Priezvisko" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="ObchodneMenoNazov" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="UlicaACislo" type="UlicaACisloType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="POBOX" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="PoschodieACisloBytu" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="PSC" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="Obec" type="ObecEnumType"/>
      <xs:element name="CastObce" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="Stat" type="StatEnumType" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="UlicaACisloType">
    <xs:sequence>
      <xs:element name="Ulica" type="xs:string"/>
      <xs:element name="SupisneCislo" type="xs:integer" minOccurs="0" maxOccurs="1"/>
      <xs:element name="OrientacneCislo" type="xs:string" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="DorucenieType">
    <xs:sequence>
      <xs:element name="AdresatPodania" type="AdresatPodaniaType"/>
      <xs:element name="Checkbox" type="CheckboxType" minOccurs="0"/>
      <xs:element name="FormaOdoslaniaZiadosti" type="FormaOdoslaniaZiadostiEnumType"/>
      <xs:element name="FormaDoruceniaRozhodnutia" type="FormaDoruceniaRozhodnutiaType" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="AdresatPodaniaType">
    <xs:sequence>
      <xs:element name="AdresatPodania" type="AdresatPodaniaEnumType"/>
      <xs:element name="MestskaCast" type="MestskaCastEnumType" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="CheckboxType">
    <xs:sequence>
      <xs:element name="Notifikacia" type="xs:boolean" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="FormaOdoslaniaZiadostiEnumType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Elektronicky"/>
      <xs:enumeration value="Listinne"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="FormaDoruceniaRozhodnutiaType">
    <xs:sequence>
      <xs:element name="TypSposobuDorucenia" type="FormaDoruceniaRozhodnutiaEnumType"/>
      <xs:element name="AdresaDoruceniaRozhodnutia" type="AdresaType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="AdresatPodania" type="AdresatPodaniaEnumType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="MestskaCast" type="MestskaCastEnumType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="FaxPreDorucenie" type="TelefonneCisloType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="TelefonPreDorucenie" type="TelefonneCisloType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="EmailPreDorucenie" type="EMailType" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="FormaDoruceniaRozhodnutiaEnumType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Pošta"/>
      <xs:enumeration value="Elektronická schránka"/>
      <xs:enumeration value="Osobne"/>
      <xs:enumeration value="Fax"/>
      <xs:enumeration value="Telefonicky"/>
      <xs:enumeration value="E-mail"/>
      <xs:enumeration value="Bez odpovede"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:simpleType name="AdresatPodaniaEnumType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Mesto"/>
      <xs:enumeration value="Mestská časť"/>
    </xs:restriction>
  </xs:simpleType>


  <xs:simpleType name="KodKrajinyType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[0-9]{3}"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="ZiadatelType">
    <xs:annotation>
      <xs:documentation>Žiadateľ</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="VoSvojomMene" type="xs:boolean" />
      <xs:element name="TypOsoby" type="TypOsobyEnumType"/>
      <xs:element name="Kontakt" type="KontaktneUdajeType"/>
      <xs:element name="Adresa" type="AdresaType"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="DopravneZnacenieType">
    <xs:annotation>
      <xs:documentation>Detaily o dopravnom značení</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="NazvyUlic" type="xs:string"/>
      <xs:element name="DovodZmenyVDopravnomZnaceni" type="DovodZmenyVDopravnomZnaceniType"/>

      <!-- required when VyhradeneParkovanie -->
      <xs:element name="VyhradeneParkovanie" type="VyhradeneParkovanieType" minOccurs="0" />

      <!-- required when StavebnePrace -->
      <xs:element name="NazovStavby" type="xs:string" minOccurs="0"/>

      <!-- required when KulturneAleboSportovePodujatie -->
      <xs:element name="NazovPodujatia" type="xs:string" minOccurs="0"/>

      <!-- required when Ine -->
      <xs:element name="IneOdpoved" type="xs:string" minOccurs="0"/>

      <xs:element name="TrvacnostDopravnehoZnacenia" type="TrvacnostDopravnehoZnaceniaEnumType"/>

      <!-- both required when TypDopravnehoZnacenia Docasne -->
      <xs:element name="DatumUmiestneniaDopravnehoZnacenia" type="xs:date" minOccurs="0"/>
      <xs:element name="DatumOdstraneniaDopravnehoZnacenia" type="xs:date" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="VyhradeneParkovanieType">
    <xs:annotation>
      <xs:documentation>Vyhradené parkovanie</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="Typ" type="VyhradeneParkovanieEnumType" />

      <!-- when Nove -->
      <xs:element name="PocetParkovacichMiest" type="xs:integer" minOccurs="0" />
      <xs:element name="UzivanaPlochaJednehoMiestaDlzka" type="xs:string" minOccurs="0" />
      <xs:element name="UzivanaPlochaJednehoMiestaSirka" type="xs:string" minOccurs="0" />
      <xs:element name="TerminVyhradeniaMiestaOd" type="xs:date" minOccurs="0" />
      <xs:element name="TerminVyhradeniaMiestaDo" type="xs:date" minOccurs="0" />
      <!-- + plus 2 prilohy -->

      <!-- when Predlzenie -->
      <xs:element name="TerminPredlzeniaDo" type="xs:date" minOccurs="0" />
      <xs:element name="Prehlasenie" type="xs:string" minOccurs="0" />
      <xs:element name="PrehlasenieSuhlas" type="xs:boolean" minOccurs="0" />

      <!-- when Zmena -->
      <xs:element name="ZmenaECV" type="xs:string" minOccurs="0" />
      <xs:element name="InaZmena" type="xs:string" minOccurs="0" />

      <!-- when Predlzenie or Zrusenie -->
      <xs:element name="CisloPlatnehoPovolenia" type="xs:string" minOccurs="0" />

      <!-- when Zrusenie -->
      <xs:element name="TerminZruseniaMiestaOd" type="xs:date" minOccurs="0" />
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="VyhradeneParkovanieEnumType">
    <xs:annotation>
      <xs:documentation>Žiadosť k vyhradeného parkovaniu</xs:documentation>
    </xs:annotation>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Nove"/>
      <xs:enumeration value="Predlzenie"/>
      <xs:enumeration value="Zmena"/>
      <xs:enumeration value="Zrusenie"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="ZodpovednyProjektantType">
    <xs:annotation>
      <xs:documentation>Zodpovedny Projektant za projekt organizacie dopravy (POD)</xs:documentation>
    </xs:annotation>
    <xs:sequence>
      <xs:element name="ObchodneMeno" type="xs:string"/>
      <xs:element name="ICO" type="xs:string"/>
      <xs:element name="Kontakt" type="KontaktneUdajeType"/>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="KontaktnaOsobaType">
    <xs:sequence>
      <xs:element name="Meno" type="xs:string"/>
      <xs:element name="Priezvisko" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
  <xs:complexType name="KontaktneUdajeType">
    <xs:sequence>
      <xs:element name="TelefonneCislo" type="TelefonneCisloType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="TelefonneCisloCele" type="xs:string" minOccurs="0" maxOccurs="1"/>
      <xs:element name="Email" type="EMailType" minOccurs="0" maxOccurs="1"/>
      <xs:element name="KontaktnaOsoba" type="KontaktnaOsobaType" minOccurs="0" maxOccurs="1"/>
    </xs:sequence>
  </xs:complexType>

  <!-- ciselnik  bud "FO" alebo "podnikatel/PO" https://www.slovensko.sk/static/util/filler/lookup.aspx?id=UPVSIAM_001 -->
  <xs:complexType name="TypOsobyEnumType">
    <xs:annotation>
      <xs:documentation>Číselník UPVSIAM_001 - Typ identity</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="EnumerationType" />
    </xs:complexContent>
  </xs:complexType>

  <!-- https://www.slovensko.sk/static/util/filler/lookup.aspx?id=SUSR_0025 -->
  <xs:complexType name="ObecEnumType">
    <xs:annotation>
      <xs:documentation>Číselník SUSR_0025 - Obce SR</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="EnumerationType" />
    </xs:complexContent>
  </xs:complexType>

  <!-- https://www.slovensko.sk/static/util/filler/lookup.aspx?id=SUSR_0024 -->
  <xs:complexType name="MestskaCastEnumType">
    <xs:annotation>
      <xs:documentation>Číselník SUSR_0024 - Okresy SR</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="EnumerationType" />
    </xs:complexContent>
  </xs:complexType>

  <!-- https://www.slovensko.sk/static/util/filler/lookup.aspx?id=SUSR_0086 -->
  <xs:complexType name="StatEnumType">
    <xs:annotation>
      <xs:documentation>Číselník SUSR_0086 - Krajiny OSN</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:restriction base="EnumerationType">
        <xs:sequence>
          <xs:element name="Code" type="KodKrajinyType"/>
          <xs:element name="Name" type="xs:string"/>
          <xs:element name="WsEnumCode" type="xs:string"/>
        </xs:sequence>
      </xs:restriction>
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="ZakladneVyhlasenieType">
    <xs:sequence>
      <xs:element name="SpravnostUdajovText" type="xs:string"/>
      <xs:element name="SuhlasSoSpracovanimText" type="xs:string"/>
      <xs:element name="PoskytujemSuhlas" type="xs:boolean" default="false"/>
      <xs:element name="PoskytujemSuhlasText" type="xs:string"/>
      <xs:element name="NeposkytujemSuhlas" type="xs:boolean" default="false"/>
      <xs:element name="NeposkytujemSuhlasText" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="EMailType">
    <xs:restriction base="xs:string">
      <xs:pattern
              value="(([a-zA-Z0-9_]|[.]|[-])+)@(([0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.])|((([a-zA-Z0-9]|[-])+[.])+))([a-zA-Z]{2,6}|[0-9]{1,3})"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="TelefonneCisloType">
    <xs:sequence>
      <xs:element name="MedzinarodneVolacieCislo">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="((([+][1-9])|([+][1-9][0-9]{1,8}))|((00[1-9])|(00[1-9][0-9]{1,7})))"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="Predvolba">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[1-9][0-9]*"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="Cislo">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]*"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="DovodZmenyVDopravnomZnaceniType">
    <xs:annotation>
      <xs:documentation>Dôvod zmeny v dopravnom značení</xs:documentation>
    </xs:annotation>
    <xs:restriction base="xs:string">
      <xs:enumeration value="RozkopavkovePrace"/>
      <xs:enumeration value="StavebnePrace"/>
      <xs:enumeration value="KulturneAleboSportovePodujatia"/>
      <xs:enumeration value="VyhradeneParkovanie"/>
      <xs:enumeration value="Ine"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:simpleType name="TrvacnostDopravnehoZnaceniaEnumType">
    <xs:annotation>
      <xs:documentation>Typ dopravného značenia</xs:documentation>
    </xs:annotation>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Trvale"/>
      <xs:enumeration value="Docasne"/>
    </xs:restriction>
  </xs:simpleType>
</xs:schema>`
