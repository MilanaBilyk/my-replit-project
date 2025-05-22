import { useState, useCallback, useEffect } from 'react';

type SpeechOptions = {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: string;
};

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  // Загрузка доступных голосов
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      }
    };
    
    // Загружаем голоса при инициализации
    loadVoices();
    
    // Обработчик события для загрузки голосов (необходим для некоторых браузеров)
    if ('onvoiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if ('onvoiceschanged' in window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);
  
  // Получение женского голоса для русского языка
  const getFemaleRussianVoice = useCallback(() => {
    // Приоритетные голоса (женские русские голоса)
    const preferredVoices = voices.filter(voice => 
      voice.lang.includes('ru') && voice.name.includes('Female')
    );
    
    // Если нет конкретно женских, берем любой русский
    if (preferredVoices.length === 0) {
      const russianVoices = voices.filter(voice => voice.lang.includes('ru'));
      return russianVoices.length > 0 ? russianVoices[0] : null;
    }
    
    return preferredVoices[0];
  }, [voices]);
  
  const speak = useCallback((text: string, options: SpeechOptions = {}) => {
    if (!('speechSynthesis' in window)) {
      console.error('Text-to-speech not supported in this browser');
      return false;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get preferred female Russian voice
    const femaleRussianVoice = getFemaleRussianVoice();
    
    // Set default options for Russian language
    utterance.lang = options.lang || 'ru-RU';
    utterance.rate = options.rate || 0.85; // Немного медленнее, чтобы было более естественно
    utterance.pitch = options.pitch || 1.1; // Немного выше тон для более женского голоса
    utterance.volume = options.volume || 1;
    
    // Если есть доступный женский голос, используем его
    if (femaleRussianVoice) {
      utterance.voice = femaleRussianVoice;
    }
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    return true;
  }, [getFemaleRussianVoice]);
  
  const cancel = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);
  
  return { speak, cancel, isSpeaking, voices };
};
