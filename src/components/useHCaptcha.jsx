// hooks/useHCaptcha.js
import { useState, useEffect } from 'react';

export const useHCaptcha = () => {
  const [siteKey, setSiteKey] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteKey = async () => {
      try {
        const response = await fetch('/api/hcaptcha/site-key');
        const data = await response.json();
        
        if (data.success) {
          setSiteKey(data.data.siteKey);
        } else {
          setError('Failed to load hCaptcha configuration');
        }
      } catch (err) {
        setError('Error loading hCaptcha');
        console.error('hCaptcha site key fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSiteKey();
  }, []);

  const onVerify = (token) => {
    setToken(token);
    setError(null);
  };

  const onExpire = () => {
    setToken('');
  };

  const onError = (err) => {
    setToken('');
    setError('hCaptcha verification failed');
    console.error('hCaptcha error:', err);
  };

  const reset = (hcaptchaRef) => {
    setToken('');
    if (hcaptchaRef?.current) {
      hcaptchaRef.current.resetCaptcha();
    }
  };

  return {
    siteKey,
    token,
    isLoading,
    error,
    onVerify,
    onExpire,
    onError,
    reset
  };
};