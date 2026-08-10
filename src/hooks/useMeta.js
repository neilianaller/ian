// src/hooks/useMeta.js
import { useEffect } from 'react';

export function useMeta(meta = {}) {
  useEffect(() => {
    const {
      title,
      description,
      image,
      url,
      type = 'website',
    } = meta;

    if (title) {
      document.title = title;
      updateMetaTag('name', 'title', title);
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('property', 'twitter:title', title);
    }

    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'twitter:description', description);
    }

    if (image) {
      updateMetaTag('property', 'og:image', image);
      updateMetaTag('property', 'twitter:image', image);
    }

    if (url) {
      updateMetaTag('property', 'og:url', url);
      updateMetaTag('property', 'twitter:url', url);
    }

    if (type) {
      updateMetaTag('property', 'og:type', type);
    }

    return () => {
      // Optionally restore default meta tags on unmount
      // This is optional and depends on your needs
    };
  }, [meta]);
}

function updateMetaTag(attrName, attrValue, content) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}
