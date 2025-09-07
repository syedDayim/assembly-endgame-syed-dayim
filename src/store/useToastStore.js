import { create } from "zustand";

export const useToastStore = create((set) => ({
  toast: null,
  
  showToast: (message, type = "info", duration = 3000) => {
    set({
      toast: {
        message,
        type,
        duration,
        id: Date.now(), // Unique ID to force re-render
      },
    });
  },
  
  hideToast: () => {
    set({ toast: null });
  },
  
  showWordToast: (word) => {
    set({
      toast: {
        message: `The word was: "${word.toUpperCase()}"`,
        type: "error",
        duration: 5000, // Show longer for word reveal
        id: Date.now(),
      },
    });
  },
}));
