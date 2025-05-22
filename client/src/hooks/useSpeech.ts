import { useState, useCallback } from 'react';

type SpeechOptions = {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
};

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const speak = useCallback((text: string, options: SpeechOptions = {}) => {
    if (!('speechSynthesis' in window)) {
      console.error('Text-to-speech not supported in this browser');
      return false;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set default options for Russian language
    utterance.lang = options.lang || 'ru-RU';
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    return true;
  }, []);
  
  const cancel = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);
  
  return { speak, cancel, isSpeaking };
};
