'use client';

import { useEffect, useRef } from 'react';

import { LiveStory } from "ls-client-sdk/client";

declare global {
  var LiveStory: new (a: string, b: any) => void;
}

export default function LiveStoryWrapper({ content }: { content: any }) {
  
  /*
  * Uncomment this if you don't use ls-client-sdk package.

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
  */

  if (!content) return null;

  return (
    /* Import LiveStory component from ls-client-sdk/client package and use this way */
    <LiveStory entry={content} language='mylangcode' store='mystorecode'/>

    /* 
    * or you can create the below <div> by yourself. 
    * If you create below <div>, be sure su uncomment useEffect hook where you call new window.LiveStory(...) script
    * 
    *

    <div
      id={`ls-${content.id}`}
      data-id={content.id}
      data-lang="" // Add language if needed
      data-store="STORE_ID" // Add your data-store value if needed
      dangerouslySetInnerHTML={{ __html: content.ssr ? content.ssr : '' }}
      suppressHydrationWarning
    />

    */
  );
}
