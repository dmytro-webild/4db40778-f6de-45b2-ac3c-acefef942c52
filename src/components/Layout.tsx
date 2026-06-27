import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "about",
    "href": "about"
  },
  {
    "name": "features",
    "href": "features"
  },
  {
    "name": "pricing",
    "href": "pricing"
  },
  {
    "name": "contact",
    "href": "contact"
  },
  {
    "name": "hero",
    "href": "#hero"
  },
  {
    "name": "metrics",
    "href": "#metrics"
  },
  {
    "name": "testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="oyerweb"
      ctaButton={{
        text: "call now",
        href: "tel:727-221-2651",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="oyerweb"
      columns={[
        {
          title: "company",
          items: [
            {
              label: "about",
              href: "#about",
            },
            {
              label: "contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "connect",
          items: [
            {
              label: "instagram",
              href: "https://instagram.com/oyerweb",
            },
            {
              label: "email",
              href: "mailto:stevenoyer6@gmail.com",
            },
          ],
        },
      ]}
      copyright="© 2024 oyerweb. all rights reserved."
      links={[
        {
          label: "privacy policy",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mockup-copy-space-blank-screen-concept_53876-124218.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
