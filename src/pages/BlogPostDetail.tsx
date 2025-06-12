
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
        {/* Hero Section with Background Image */}
        <div className="banner-container h-64 sm:h-80 md:h-96 lg:h-[500px] relative">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          
          <div className="banner-overlay">
            <div className="container mx-auto px-4 w-full">
              <div className="max-w-5xl mx-auto w-full">
                <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                  <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Back to Blog
                </Link>
                
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight hyphens-auto break-words">
                  {post.title}
                </h1>
                
                <div className="flex flex-col gap-4 sm:gap-3 text-gray-300 mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center text-sm sm:text-base min-h-[44px] sm:min-h-0">
                      <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base min-h-[44px] sm:min-h-0">
                      <User className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium min-h-[44px] sm:min-h-0 flex items-center">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl">
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
