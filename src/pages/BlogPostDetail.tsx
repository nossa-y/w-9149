
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
      
      <article className="w-full pt-16 pb-16">
        {/* Hero Section with Background Image - Increased mobile height */}
        <div className="banner-container h-80 sm:h-96 md:h-[500px] lg:h-[600px] relative">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          
          <div className="banner-overlay">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 w-full">
              <div className="max-w-6xl mx-auto w-full flex flex-col justify-center h-full">
                <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                
                {/* Improved mobile title typography */}
                <h1 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight tracking-tight break-words hyphens-auto max-w-5xl">
                  {post.title}
                </h1>
                
                {/* Improved metadata layout with better mobile spacing */}
                <div className="flex flex-col gap-6 sm:gap-4 text-gray-300 mb-8 sm:mb-10">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8">
                    <div className="flex items-center text-base sm:text-lg min-h-[48px] sm:min-h-0">
                      <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center text-base sm:text-lg min-h-[48px] sm:min-h-0">
                      <User className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                  </div>
                  
                  {/* Better category tag positioning */}
                  <div className="flex">
                    <div className="px-5 py-3 bg-white/15 backdrop-blur-sm rounded-full text-base font-semibold min-h-[48px] sm:min-h-0 flex items-center border border-white/20">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                {/* Improved excerpt typography */}
                <p className="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-4xl font-light">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <EnhancedBlogContent content={post.content} />
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostDetail;
