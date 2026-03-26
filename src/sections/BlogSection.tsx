import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featured: boolean;
}

// Blog postovi - u produkciji bi se učitali iz API-ja ili fajlova
const blogPosts: BlogPost[] = [
  {
    slug: 'primena-dronova-u-poljoprivredi',
    title: 'Primena dronova u modernoj poljoprivredi',
    excerpt: 'Dronovi postaju nezaobilazan alat u modernoj poljoprivredi. Od snimanja parcela do preciznog prskanja, saznajte sve prednosti koje donosi ova tehnologija.',
    date: '2024-03-19',
    author: 'Dron Centar',
    category: 'Precizna poljoprivreda',
    tags: ['dronovi', 'poljoprivreda', 'tehnologija'],
    featuredImage: '/images/blog/poljoprivreda-dron.jpg',
    featured: true
  },
  {
    slug: 'ndvi-analiza-zdravlja-useva',
    title: 'NDVI analiza: Kako čitati zdravlje vašeg useva',
    excerpt: 'NDVI (Normalized Difference Vegetation Index) je najpopularniji indeks za procenu zdravlja biljaka. Naučite kako ga čitati i primenjivati na vašem gazdinstvu.',
    date: '2024-03-15',
    author: 'Dron Centar',
    category: 'Multispectralna analiza',
    tags: ['NDVI', 'analiza', 'monitoring'],
    featuredImage: '/images/blog/ndvi-analiza.jpg',
    featured: true
  }
];

// Generisanje fallback slike ako ne postoji
const getFallbackImage = () => {
  return `/hero-agriculture.jpg`;
};

export function BlogSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 font-medium mb-4">
            <Clock className="w-5 h-5" />
            <span>BLOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Novosti i <span className="text-gradient">saveti</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Pratite najnovije informacije iz sveta dron tehnologije i precizne poljoprivrede.
            Stručni saveti i praktična znanja za vaše gazdinstvo.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Dialog key={post.slug}>
              <DialogTrigger asChild>
                <article 
                  className="group cursor-pointer bg-dark-50 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={imageErrors[post.slug] ? getFallbackImage() : post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(post.slug)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-black text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/70 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 text-white/60 text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-orange-500 text-sm font-medium">
                      <span>Pročitaj više</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </DialogTrigger>

              <DialogContent className="max-w-3xl bg-dark-100 border-white/10 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white text-left">
                    {post.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Featured Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={imageErrors[post.slug] ? getFallbackImage() : post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(post.slug)}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-white/80 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Full Content Placeholder */}
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/70">
                      Kompletan sadržaj članka je dostupan u admin panelu. 
                      Ovaj prikaz predstavlja preview verziju blog posta.
                    </p>
                    <p className="text-white/70">
                      Za pregled celog sadržaja i uređivanje blog postova, 
                      posetite <a href="/admin/" className="text-orange-500 hover:underline">admin panel</a>.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                      onClick={() => window.open('/admin/', '_blank')}
                    >
                      Uredi u Admin Panelu
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Admin Panel CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-dark-50 rounded-2xl border border-white/10">
            <div className="text-left">
              <h4 className="text-white font-semibold mb-1">Admin Panel</h4>
              <p className="text-white/60 text-sm">Kreirajte nove blog postove sa SEO optimizacijom</p>
            </div>
            <Button 
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black whitespace-nowrap"
              onClick={() => window.open('/admin/', '_blank')}
            >
              Otvori Admin Panel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
