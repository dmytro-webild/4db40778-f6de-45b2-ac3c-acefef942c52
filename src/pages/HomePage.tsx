import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Guaranteed Results"
      title="Turn Your Website Into a Traffic Engine"
      description="Oyerweb builds high-conversion websites designed to get your business noticed and keep your clients coming back."
      primaryButton={{
        text: "Call 727-221-2651",
        href: "tel:727-221-2651",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:stevenoyer6@gmail.com",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-copy-space-blank-screen-concept_53876-124218.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/artificial-intelligence-startup-coworkers-doing-brainstorming-optimizing-code_482257-125922.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/software-developer-types-programming-code-cozy-home-office-setup_482257-116372.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/responsive-design-layout-internet-concept_53876-124371.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-ai-tech-agency-workspace-providing-custom-software-development-services_482257-120228.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="About Oyerweb"
      descriptions={[
        "We specialize in crafting professional websites that don't just look good but perform exceptionally. Our goal is to drive real, measurable traction to your business.",
        "With Oyerweb, you get a partner who understands the digital landscape and knows exactly what it takes to convert visitors into loyal customers.",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesDetailedCards
      tag="Our Services"
      title="What We Deliver"
      description="Powerful features to scale your digital presence."
      items={[
        {
          title: "SEO Optimization",
          description: "Higher rankings ensure your customers find you first.",
          tags: [
            "SEO",
            "Growth",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/line-graph-data-analysis-icon_53876-20802.jpg",
        },
        {
          title: "Mobile First Design",
          description: "Flawless user experience on every device.",
          tags: [
            "Responsive",
            "Mobile",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/birth-rate-fertility-concept_23-2148760992.jpg",
        },
        {
          title: "Conversion Rate Optimization",
          description: "Turn more clicks into qualified leads.",
          tags: [
            "Sales",
            "Growth",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/laptop-with-rocket-start-up_24908-80976.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Our Impact"
      title="Driving Results Daily"
      description="We don't guess, we deliver."
      metrics={[
        {
          value: "100+",
          description: "Websites Built",
        },
        {
          value: "200%",
          description: "Avg. Traffic Growth",
        },
        {
          value: "24/7",
          description: "Support Ready",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Our Plans"
      title="Straightforward Pricing"
      description="Scalable web solutions tailored to your business needs."
      plans={[
        {
          tag: "Basic",
          price: "$999",
          description: "Standard business site",
          features: [
            "Mobile Responsive",
            "SEO Optimized",
            "Fast Support",
          ],
        },
        {
          tag: "Pro",
          price: "$1,999",
          description: "Custom conversion machine",
          features: [
            "Everything in Basic",
            "Advanced Analytics",
            "Lead Gen Forms",
          ],
        },
        {
          tag: "Enterprise",
          price: "Custom",
          description: "Full growth platform",
          features: [
            "E-commerce",
            "CRM Integration",
            "Priority 24/7 Support",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Social Proof"
      title="Clients Who Grew With Us"
      testimonials={[
        {
          name: "Sarah J.",
          role: "Owner",
          company: "LocalCafe",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg",
        },
        {
          name: "Michael B.",
          role: "CEO",
          company: "TechStartup",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-smiling-posing-with-crossed-arms-office_176420-910.jpg",
        },
        {
          name: "Linda M.",
          role: "Manager",
          company: "BoutiqueShop",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-illustrator-drawing-tablet_23-2150040139.jpg",
        },
        {
          name: "David K.",
          role: "Director",
          company: "LawFirm",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3796.jpg",
        },
        {
          name: "Rachel P.",
          role: "Founder",
          company: "CreativeStudio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-working-their-strategy_23-2149241320.jpg",
        },
      ]}
      description="Trusted by businesses to deliver real results."
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="FAQs"
      title="Frequently Asked Questions"
      description="Have questions? We have answers."
      items={[
        {
          question: "How long does a site take?",
          answer: "Typical turnarounds are 2-4 weeks depending on complexity.",
        },
        {
          question: "Do you guarantee results?",
          answer: "Yes, we focus on conversion-driven design to ensure your traffic grows.",
        },
        {
          question: "Can I update content later?",
          answer: "We provide a user-friendly dashboard for easy self-updates.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Grow?"
      text="Get in touch with Oyerweb today to start your digital transformation."
      primaryButton={{
        text: "Call 727-221-2651",
        href: "tel:727-221-2651",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:stevenoyer6@gmail.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
