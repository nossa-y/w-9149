
import PageLayout from '@/components/PageLayout';
import HotProspectHero from '@/components/HotProspectHero';
import HotProspectFeatures from '@/components/HotProspectFeatures';
import HotProspectChatInterface from '@/components/HotProspectChatInterface';
import HotProspectSocialProof from '@/components/HotProspectSocialProof';
import HotProspectCTA from '@/components/HotProspectCTA';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="HotProspect - AI-Powered SDR Platform" 
        description="Stop wasting time on repetitive sales tasks. One simple AI chatbot handles prospecting, cold emails, and calls - no dashboards, no complexity."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['AI SDR', 'sales automation', 'cold email', 'lead generation', 'sales development', 'prospecting', 'AI chatbot']}
      />
      <HotProspectHero />
      <HotProspectChatInterface />
      <HotProspectFeatures />
      <HotProspectSocialProof />
      <HotProspectCTA />
    </PageLayout>
  );
};

export default Index;
