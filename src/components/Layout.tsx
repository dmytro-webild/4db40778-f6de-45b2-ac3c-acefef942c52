import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "about"
  },
  {
    "name": "Features",
    "href": "features"
  },
  {
    "name": "Pricing",
    "href": "pricing"
  },
  {
    "name": "Contact",
    "href": "contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="oyerweb"
      ctaButton={{
        text: "Call Now",
        href: "tel:727-221-2651",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Oyerweb"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/oyerweb",
            },
            {
              label: "Email",
              href: "mailto:stevenoyer6@gmail.com",
            },
          ],
        },
      ]}
      copyright="© 2024 Oyerweb. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mockup-copy-space-blank-screen-concept_53876-124218.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
