// components/TawkChat.tsx

'use client';
import { useEffect } from 'react';

const TawkChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68134940317580190bdc51b0/1iq5lc9cl';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
export default TawkChat;