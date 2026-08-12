// src/pages/Story.jsx
import React, { useEffect, lazy, Suspense } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getStory } from '../data/stories';
import { useMeta } from '../hooks/useMeta';

const storyModules = {
  'why-i-built-dailyask': lazy(() => import('../stories/why-i-built-dailyask.mdx')),
  'why-i-built-medtrack': lazy(() => import('../stories/why-i-built-medtrack.mdx')),
  'why-i-built-smsapi': lazy(() => import('../stories/why-i-built-smsapi.mdx')),
  'why-i-built-runnerspod': lazy(() => import('../stories/why-i-built-runnerspod.mdx')),
  'why-i-built-cenacle': lazy(() => import('../stories/why-i-built-cenacle.mdx')),
  'why-i-built-gabaystrand': lazy(() => import('../stories/why-i-built-gabaystrand.mdx')),
};

export default function Story() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const story = getStory(slug);

  // Set Open Graph meta tags
  useMeta({
    title: story ? `${story.title} | IANDEV Stories` : 'Story | IANDEV',
    description: story?.hook || 'Read why I built what I built.',
    image: story?.ogImage || 'https://iandev-c5fc3.web.app/og-image.png',
    url: `https://iandev-c5fc3.web.app/stories/${slug}`,
    type: 'article',
  });

  useEffect(() => {
    // Scroll to top when story changes
    window.scrollTo(0, 0);
  }, [slug]);

  const StoryContent = storyModules[slug];

  if (!story || !StoryContent) {
    return (
      <div className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-text mb-4">Story not found</h1>
          <p className="text-text/70 mb-6">The story you're looking for doesn't exist.</p>
          <Link
            to="/stories"
            className="inline-block px-6 py-3 bg-accent text-primary font-mono font-bold uppercase tracking-wider rounded hover:bg-[#a3f03b] transition"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow">
      {/* Story Header */}
      <section className="py-12 md:py-16 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {story.icon && (
              <div className="mb-6 w-16 h-16 rounded-lg bg-accent-bg/50 p-2 flex items-center justify-center">
                <img
                  src={story.icon}
                  alt={story.app}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <div className="mb-4 text-accent font-mono text-xs tracking-widest uppercase">
              {story.app}
            </div>

            <h1 className="text-4xl md:text-5xl font-heading text-text font-bold mb-4 leading-tight">
              {story.title}
            </h1>

            <p className="text-lg md:text-xl text-text/70 font-sans font-light leading-relaxed italic mb-6">
              {story.hook}
            </p>

            <div className="text-sm text-text/60 font-mono">
              {new Date(story.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.article
            className="prose prose-invert prose-sm md:prose-base max-w-none
              [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-text [&>h2]:mt-8 [&>h2]:mb-4
              [&>p]:text-text/85 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:font-sans
              [&>ul]:text-text/85 [&>ul]:leading-relaxed [&>ul]:mb-4 [&>ul]:font-sans [&>ul]:list-disc [&>ul]:pl-6
              [&>li]:mb-2
              [&>a]:text-accent [&>a]:underline [&>a]:hover:no-underline
              [&>strong]:text-accent [&>strong]:font-bold
              [&>hr]:border-border [&>hr]:my-8
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Suspense fallback={<div className="text-center py-8">Loading story...</div>}>
              <StoryContent />
            </Suspense>
          </motion.article>
        </div>
      </section>

      {/* Story Footer CTA */}
      {story.storeUrl && (
        <section className="py-12 md:py-16 px-4 border-t border-border bg-primary/40">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-text/70 mb-6 font-sans">Ready to check it out?</p>
              <a
                href={story.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-primary font-mono font-bold uppercase tracking-wider rounded hover:bg-[#a3f03b] active:scale-95 transition-all"
              >
                Check out {story.app || story.project} →
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Stories */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-accent font-mono text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
          >
            ← Back to Stories
          </Link>
        </div>
      </section>
    </div>
  );
}
