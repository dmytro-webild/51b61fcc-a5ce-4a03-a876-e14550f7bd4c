"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Hjem",          id: "hero"},
        {
          name: "Om Os",          id: "about"},
        {
          name: "Ydelser",          id: "services"},
        {
          name: "Projekter",          id: "gallery"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="Martin Henrik Hansen"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Tømrermester Martin Henrik Hansen"
      description="Håndværk med hjerte. Kvalitet uden kompromis."
      testimonials={[
        {
          name: "Lone Birgit",          handle: "Google Reviews",          testimonial: "En rigtig dygtig tømrer",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woodworking-professional-using-sandpaper-sanding-wooden-surface_482257-97482.jpg"},
        {
          name: "Audrone C.",          handle: "Google Reviews",          testimonial: "Super service og rigtig god kundeservice.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-artisan-doing-woodcutting_23-2150104839.jpg"},
        {
          name: "Jens Jensen",          handle: "Google Reviews",          testimonial: "Hurtig respons og fantastisk resultat.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mid-adult-carpenter-his-workshop_637285-11693.jpg"},
        {
          name: "Mette M.",          handle: "Google Reviews",          testimonial: "Professionel hele vejen igennem.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-sinks-screws-into-wooden-surfaces-with-power-drill-close-up_482257-84364.jpg"},
        {
          name: "Peter H.",          handle: "Google Reviews",          testimonial: "Vi er meget tilfredse med vores nye tag.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-male-carpenter-work-workshop_23-2147944925.jpg"},
      ]}
      buttons={[
        {
          text: "Få et uforpligtende tilbud",          href: "#contact"},
        {
          text: "Se vores arbejde",          href: "#gallery"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-image-professional-stainless-coffee-pot_613910-8830.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/male-carpenter-standing-workbench-using-mobile-phone_23-2147944903.jpg",          alt: "Kunde 1"},
        {
          src: "http://img.b2bpic.net/free-photo/professional-carpenter-checking-smoothness-wood-product-workshop_342744-828.jpg",          alt: "Kunde 2"},
        {
          src: "http://img.b2bpic.net/free-photo/professional-smiling-middle-aged-carpenter-holding-wood-plank-woodworking-workshop_342744-811.jpg",          alt: "Kunde 3"},
        {
          src: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530709.jpg",          alt: "Kunde 4"},
        {
          src: "http://img.b2bpic.net/free-photo/manual-tool-set-set-wooden-floor_1150-15364.jpg",          alt: "Kunde 5"},
      ]}
      avatarText="Over 100+ tilfredse kunder"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Med over 20 års erfaring i Nordsjælland, når dit hjem fortjener det bedste"
      buttons={[
        {
          text: "Kontakt os i dag",          href: "#contact"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "tag",          label: "Tag",          title: "Tagarbejde",          items: [
            "Nyt tag",            "Renovering",            "Tagvinduer"],
        },
        {
          id: "tilbyg",          label: "Udvid",          title: "Tilbygninger",          items: [
            "Boligudvidelse",            "Omtanke for arkitektur",            "Kvalitetsmaterialer"],
        },
        {
          id: "kokken",          label: "Køkken",          title: "Køkken & Bad",          items: [
            "Totalløsninger",            "Snedkerfinish",            "Design"],
        },
        {
          id: "udhus",          label: "Udhus",          title: "Carporte & Udhuse",          items: [
            "Funktionelt",            "Flot finish",            "Holdbart design"],
        },
        {
          id: "rep",          label: "Rep",          title: "Reparationer",          items: [
            "Små opgaver",            "Store projekter",            "Hurtig service"],
        },
        {
          id: "energi",          label: "Energi",          title: "Energioptimering",          items: [
            "Isolering",            "Nye vinduer",            "Bæredygtighed"],
        },
      ]}
      title="Hvad kan vi hjælpe dig med?"
      description="Vi tilbyder totalløsninger til alle boligens tømreropgaver."
    />
  </div>

  <div id="why" data-section="why">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Hvorfor vælge os?"
      tag="Personlig service"
      metrics={[
        {
          id: "m1",          value: "100%",          description: "Personlig dialog"},
        {
          id: "m2",          value: "5*",          description: "Kvalitetsbedømmelse"},
        {
          id: "m3",          value: "Fast",          description: "Prisgaranti"},
        {
          id: "m4",          value: "Altid",          description: "Tidsoverholdelse"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Lone Birgit",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hand-holding-crayon_23-2149394464.jpg"},
        {
          id: "t2",          name: "Audrone C.",          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263513.jpg"},
        {
          id: "t3",          name: "Jens Jensen",          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-taking-measurements-plank-he-is-about-cut-woodworking-workshop_342744-833.jpg"},
        {
          id: "t4",          name: "Mette M.",          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451107.jpg"},
        {
          id: "t5",          name: "Peter H.",          imageSrc: "http://img.b2bpic.net/free-photo/engraving-instrument-arrangement-table_23-2149061689.jpg"},
      ]}
      cardTitle="Det siger vores kunder"
      cardAnimation="slide-up"
      cardTag="Anmeldelser"
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          label: "01",          title: "Gratis vurdering",          items: [
            "Du ringer",            "Vi lytter",            "Første møde"],
        },
        {
          id: "2",          label: "02",          title: "Detaljeret tilbud",          items: [
            "Fast pris",            "Ingen skjulte gebyrer",            "Gennemsigtighed"],
        },
        {
          id: "3",          label: "03",          title: "Udførelse",          items: [
            "Rent arbejde",            "Minimal gene",            "Faglært finish"],
        },
        {
          id: "4",          label: "04",          title: "Aflevering",          items: [
            "Kvalitetskontrol",            "Garanti",            "100% tilfredshed"],
        },
      ]}
      title="Sådan arbejder vi"
      description="Vi gør din byggeproces enkel og tryg fra start til slut."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "g1",          brand: "Tag",          name: "Nyt tagprojekt",          price: "Kvalitetsarbejde",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/panorama-chisinau-arena-filmed-drone-sunset-moldova_1268-16014.jpg"},
        {
          id: "g2",          brand: "Køkken",          name: "Snedkerløsning",          price: "Moderne stil",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-carpenter-measuring-wooden-planks_329181-3745.jpg"},
        {
          id: "g3",          brand: "Udendørs",          name: "Carport i træ",          price: "Solidt design",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451051.jpg"},
        {
          id: "g4",          brand: "Renovering",          name: "Vinduesudskiftning",          price: "Energioptimeret",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451114.jpg"},
        {
          id: "g5",          brand: "Indendørs",          name: "Kvalitets finish",          price: "Snedkerfinish",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/man-making-surfboard_107420-94947.jpg"},
        {
          id: "g6",          brand: "Tilbygning",          name: "Boligudvidelse",          price: "Arkitektonisk",          rating: 5,
          reviewCount: "1",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-construction-engineer-equipment-with-copyspace_23-2148233698.jpg"},
      ]}
      title="Se vores seneste arbejde"
      description="Vi har hjulpet mange familier med at realisere boligdrømme."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Kontakt os"
      title="Klar til at starte dit projekt?"
      description="Kontakt Martin i dag for et uforpligtende tilbud på din opgave."
      buttons={[
        {
          text: "Send forespørgsel",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Martin Henrik Hansen"
      columns={[
        {
          title: "Info",          items: [
            {
              label: "Om os",              href: "#about"},
            {
              label: "Kontakt",              href: "#contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Tagarbejde",              href: "#services"},
            {
              label: "Tilbygninger",              href: "#services"},
          ],
        },
      ]}
      copyrightText="© 2025 – Alle rettigheder forbeholdes"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
