import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarCentered from '@/components/ui/NavbarCentered';
import Button from '@/components/ui/Button';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems: { name: string; href: string }[] = [];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <div className="w-full flex justify-center items-center gap-6 py-6">
          <a href="/" className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            oyerweb
          </a>
          
        </div>
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
      imageSrc="https://storage.googleapis.com/webild/users/user_3FJRV03nE3LwAAG5jRBAh31loHt/uploaded-1782580116038-r2w88s3d.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
