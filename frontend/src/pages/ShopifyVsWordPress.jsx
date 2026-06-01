import BlogPageTemplate from "../components/BlogPageTemplate";

const article = {
  slug: "shopify-vs-wordpress-2026",

  title:
    "Shopify vs WordPress: Which Platform Is Better for Your Business in 2026?",

  excerpt:
    "Compare Shopify vs WordPress for SEO, ecommerce, performance, security and business growth.",

  category: "Ecommerce",

  publishDate: "June 2026",

  featuredImage:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1800&q=80",

  author: {
    name: "Rajat Bharawa",
    role: "Founder · ITcrista infoX",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    bio: "Founder of ITcrista.",
    socials: {
      linkedin: "https://www.linkedin.com/company/itcrista-infox"
    }
  },

  relatedPosts: [],

  content: [
    // PASTE THE CONTENT ARRAY HERE
  ]
};

export default function ShopifyVsWordPress() {
  return (
    <BlogPageTemplate
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      author={article.author}
      publishDate={article.publishDate}
      category={article.category}
      featuredImage={article.featuredImage}
      content={article.content}
      relatedPosts={article.relatedPosts}
    />
  );
}
