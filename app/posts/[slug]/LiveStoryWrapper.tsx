'use client';

import { useEffect, useRef } from 'react';

declare global {
  var LiveStory: new (a: string, b: any) => void;
}

export default function LiveStoryWrapper({ content }: { content: any }) {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!content || loadedRef.current) return;
    if (!window.LiveStory) {
      console.warn("LiveStory not loaded yet");
      return;
    }

    new window.LiveStory(`ls-${content.id}`, { type: content.type });
    loadedRef.current = true;
  }, [content]);

  if (!content) return null;

  return (
    <div
      id={`ls-${content.id}`}
      data-id={content.id}
      data-lang=""
      dangerouslySetInnerHTML={{ __html: content.ssr ? content.ssr : '' }}
    />
  );
}
