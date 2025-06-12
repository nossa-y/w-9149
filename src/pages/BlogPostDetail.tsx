
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import EnhancedBlogContent from '@/components/EnhancedBlogContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - WRLDS`}
        description={post.metaDescription || post.excerpt}
        imageUrl={post.imageUrl}
        keywords={post.keywords}
        isBlogPost={true}
        publishDate={new Date(post.date).toISOString()}
        author={post.author}
        category={post.category}
        type="article"
      />
      
      <article className="w-full pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <div className="banner-container h-96 md:h-[500px] relative">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          
          <div className="banner-overlay">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                
                <h1 className="banner-title text-white">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <p className="banner-subtitle text-gray-300">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <EnhancedBlogContent content={post.content} />
            
            {/* Call to Action */}
            <div className="mt-16 p-8 bg-black text-white rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Safety Strategy?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how WRLDS can help you implement wearable safety technology that delivers real ROI.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostDetail;
