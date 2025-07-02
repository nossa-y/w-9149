
import HotProspectHeader from '@/components/HotProspectHeader';
import HotProspectHero from '@/components/HotProspectHero';
import HotProspectFeatures from '@/components/HotProspectFeatures';
import HotProspectChatInterface from '@/components/HotProspectChatInterface';
import HotProspectCalendar from '@/components/HotProspectCalendar';
import HotProspectSocialProof from '@/components/HotProspectSocialProof';
import HotProspectCTA from '@/components/HotProspectCTA';
import HotProspectFooter from '@/components/HotProspectFooter';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="HotProspect - AI-Powered SDR Platform" 
        description="Stop wasting time on repetitive sales tasks. One simple AI chatbot handles prospecting, cold emails, and calls - no dashboards, no complexity."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['AI SDR', 'sales automation', 'cold email', 'lead generation', 'sales development', 'prospecting', 'AI chatbot']}
      />
      <HotProspectHeader />
      <div className="pt-16">
        <HotProspectHero />
        <HotProspectChatInterface />
        <HotProspectCalendar />
        <HotProspectFeatures />
        <HotProspectSocialProof />
        <HotProspectCTA />
        <HotProspectFooter />
      </div>
    </div>
  );
};

export default Index;
