import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // ⬆️ Scrolls to top every time the path changes
  }, [pathname]);

  return null; // Component doesn’t render anything
}