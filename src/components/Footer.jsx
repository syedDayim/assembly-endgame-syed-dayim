import { useState } from "react";

export const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-30">
      <div className="relative">
        {/* Main copyright badge */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => setShowDetails(!showDetails)}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm font-medium">© {currentYear}</span>
            <span className="text-xs opacity-80 hidden sm:inline">Syed Dayim</span>
            <span className="text-xs opacity-80 sm:hidden">Dayim</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

         {/* Expandable details */}
         {showDetails && (
           <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 min-w-[250px] sm:min-w-[280px] max-w-[90vw] animate-in slide-in-from-bottom-2 duration-200">
             <div className="text-sm text-gray-700 dark:text-gray-300">
               <div className="font-semibold text-gray-900 dark:text-white mb-3">
                 🎮 Assembly Endgame
               </div>
               
               {/* Project Info */}
               <div className="space-y-2 mb-4">
                 <div className="flex items-center gap-2">
                   <span className="text-blue-600">👨‍💻</span>
                   <span>Created by Syed Dayim</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-green-600">⚡</span>
                   <span>Built with React + Vite</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-purple-600">🎯</span>
                   <span>Word Guessing Game</span>
                 </div>
               </div>

               {/* Contact Section */}
               <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                 <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                   Contact for Projects
                 </div>
                 <div className="space-y-2">
                   <a 
                     href="https://github.com/syedDayim" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                   >
                     <span className="text-gray-800 dark:text-gray-200">🐙</span>
                     <span className="text-xs">github.com/syedDayim</span>
                   </a>
                   
                   <a 
                     href="https://linkedin.com/in/syeddayimshah" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                   >
                     <span className="text-blue-600">💼</span>
                     <span className="text-xs">linkedin.com/in/syeddayimshah</span>
                   </a>
                   
                   <a 
                     href="mailto:dayim1277@gmail.com"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                   >
                     <span className="text-red-500">📧</span>
                     <span className="text-xs">dayim1277@gmail.com</span>
                   </a>
                   
                   <a 
                     href="https://wa.me/+919541558025" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                   >
                     <span className="text-green-600">📱</span>
                     <span className="text-xs">+91 95415 558025</span>
                   </a>
                 </div>
               </div>
               
               <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                 All rights reserved
               </div>
             </div>
             
             {/* Close button */}
             <button
               onClick={() => setShowDetails(false)}
               className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
             >
               ✕
             </button>
           </div>
         )}
      </div>
    </div>
  );
};
