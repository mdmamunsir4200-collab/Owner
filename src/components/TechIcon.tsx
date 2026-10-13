import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const norm = name.toLowerCase().trim();

  // 1. HTML5
  if (norm.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.1 2L5.8 20.3L12 22L18.2 20.3L19.9 2H4.1Z" fill="#E34F26" />
        <path d="M12 3.6V20.4L16.8 19L18.2 3.6H12Z" fill="#EF652A" />
        <path d="M7.8 6.7H16.2L15.9 9.8H12V11.2H15.8L15.3 16.3L12 17.2V15.6L13.8 15.1L14 12.8H8.4L7.8 6.7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. CSS3
  if (norm === 'css3' || (norm.includes('css') && !norm.includes('tailwind'))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.1 2L5.8 20.3L12 22L18.2 20.3L19.9 2H4.1Z" fill="#1572B6" />
        <path d="M12 3.6V20.4L16.8 19L18.2 3.6H12Z" fill="#33A9DC" />
        <path d="M16.2 6.7H7.8L8.1 9.8H14.6L14.3 12.7H8.4L8.7 15.8L12 16.7L15.3 15.8L15.7 11.2H12V9.8H15.9L16.2 6.7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 3. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 18C8.5 18 9.2 17.5 9.4 16.4L7.8 15.8C7.7 16.3 7.4 16.6 7 16.6C6.5 16.6 6.2 16.3 6.2 15.7V11H4.5V15.7C4.5 17.2 5.6 18 7.5 18ZM13.8 18C15.8 18 17 17 17 15.3C17 13.8 16 13.1 14.7 12.6L14.2 12.4C13.5 12.1 13 11.8 13 11.3C13 10.8 13.4 10.5 14.1 10.5C14.7 10.5 15.1 10.8 15.3 11.4L16.8 10.8C16.4 9.7 15.4 9.1 14.1 9.1C12.3 9.1 11.2 10.1 11.2 11.5C11.2 12.9 12.1 13.6 13.4 14.1L13.9 14.3C14.8 14.7 15.2 15 15.2 15.6C15.2 16.2 14.6 16.6 13.8 16.6C12.9 16.6 12.3 16.1 12 15.3L10.5 16C11 17.3 12.2 18 13.8 18Z" fill="#000000" />
      </svg>
    );
  }

  // 4. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5.5 10H10.5V11.5H8.7V18H7.3V11.5H5.5V10ZM12.2 17.3L13.4 16.5C14 17.1 14.6 17.3 15.3 17.3C16.1 17.3 16.6 16.9 16.6 16.3C16.6 15.7 16.1 15.4 15 14.9C13.4 14.2 12.5 13.6 12.5 12.2C12.5 10.8 13.7 9.8 15.3 9.8C16.4 9.8 17.3 10.2 18 10.9L17 11.8C16.5 11.3 15.9 11 15.3 11C14.6 11 14.1 11.4 14.1 11.9C14.1 12.4 14.5 12.7 15.5 13.1C17.2 13.8 18.2 14.5 18.2 16C18.2 17.5 17 18.5 15.2 18.5C13.9 18.5 12.9 18.1 12.2 17.3Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 5.5C8.001 5.5 5.501 7.5 4.501 11.5C6.001 9.5 8.001 8.75 10.501 9.25C11.928 9.535 12.948 10.572 14.076 11.719C15.914 13.587 18.067 15.772 22.501 15.772C26.501 15.772 29.001 13.772 30.001 9.772C28.501 11.772 26.501 12.522 24.001 12.022C22.574 11.737 21.554 10.7 20.426 9.553C18.588 7.685 16.435 5.5 12.001 5.5ZM4.501 13.772C0.501 13.772 -1.999 15.772 -2.999 19.772C-1.499 17.772 0.501 17.022 3.001 17.522C4.428 17.807 5.448 18.844 6.576 19.991C8.414 21.859 10.567 24.044 15.001 24.044C19.001 24.044 21.501 22.044 22.501 18.044C21.001 20.044 19.001 20.794 16.501 20.294C15.074 20.009 14.054 18.972 12.926 17.825C11.088 15.957 8.935 13.772 4.501 13.772Z" fill="#38BDF8" transform="scale(0.7) translate(2, 2)" />
      </svg>
    );
  }

  // 6. SCSS / Sass
  if (norm.includes('scss') || norm.includes('sass')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#CF649A" />
        <path d="M12.4 14.8C11.2 14.8 10.6 14.1 10.6 13.3C10.6 11.9 12.3 11.4 13.7 11.1C13.7 10.3 13.2 9.7 12.2 9.7C11.3 9.7 10.7 10.1 10.5 10.8L9 10.2C9.4 8.8 10.6 8 12.3 8C14.3 8 15.4 9.1 15.4 10.8V15.7H13.7V14.7C13.2 15.4 12.4 15.8 11.5 15.8C10.1 15.8 9 14.8 9 13.2C9 11.3 10.7 10.4 12.5 10.4C13.1 10.4 13.6 10.5 13.7 10.6V10.8C13.7 11.4 12.7 11.9 11.7 12.2C11 12.4 10.6 12.8 10.6 13.4C10.6 14 11.1 14.4 11.8 14.4C12.7 14.4 13.4 13.8 13.7 13.1L15 13.8C14.5 15 13.5 15.8 12.4 14.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 7. React.js
  if (norm.includes('react') && !norm.includes('rx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // 8. Next.js
  if (norm.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#334155" strokeWidth="1" />
        <path d="M7.8 7.5H9.5V16.5H7.8V7.5Z" fill="#FFFFFF" />
        <path d="M9.2 7.5L16.2 16.5H14.5L7.8 8V7.5H9.2Z" fill="url(#nextGradient)" />
        <path d="M14.5 7.5H16.2V13.5H14.5V7.5Z" fill="#FFFFFF" />
        <defs>
          <linearGradient id="nextGradient" x1="8" y1="8" x2="16" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 9. Angular
  if (norm.includes('angular')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L3.5 5.5L4.8 16.8L12 21.5L19.2 16.8L20.5 5.5L12 2.5Z" fill="#E23237" />
        <path d="M12 2.5V21.5L19.2 16.8L20.5 5.5L12 2.5Z" fill="#B52E31" />
        <path d="M12 5.8L7.5 16.2H9.5L10.4 13.9H13.6L14.5 16.2H16.5L12 5.8ZM12.8 12.2H11.2L12 10.2L12.8 12.2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 10. Redux
  if (norm.includes('redux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M15.5 8C14.7 6.6 13.1 5.7 11.4 5.7C8.6 5.7 6.4 7.9 6.4 10.7C6.4 12 6.9 13.1 7.7 14L8.9 12.8C8.4 12.2 8.1 11.5 8.1 10.7C8.1 8.9 9.6 7.4 11.4 7.4C12.5 7.4 13.5 8 14.1 8.9L15.5 8Z" fill="#764ABC" />
        <path d="M8.5 16C9.3 17.4 10.9 18.3 12.6 18.3C15.4 18.3 17.6 16.1 17.6 13.3C17.6 12 17.1 10.9 16.3 10L15.1 11.2C15.6 11.8 15.9 12.5 15.9 13.3C15.9 15.1 14.4 16.6 12.6 16.6C11.5 16.6 10.5 16 9.9 15.1L8.5 16Z" fill="#764ABC" />
        <circle cx="16.5" cy="8.5" r="2.2" fill="#764ABC" />
        <circle cx="7.5" cy="15.5" r="2.2" fill="#764ABC" />
        <circle cx="12" cy="12" r="1.5" fill="#764ABC" />
      </svg>
    );
  }

  // 11. Nest.js
  if (norm.includes('nest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.4 2.2C12.1 2 11.7 2 11.4 2.2L3.5 7.1C3.2 7.3 3 7.7 3 8.1V16.3C3 16.7 3.2 17.1 3.5 17.3L11.4 22.2C11.7 22.4 12.1 22.4 12.4 22.2L20.3 17.3C20.6 17.1 20.8 16.7 20.8 16.3V8.1C20.8 7.7 20.6 7.3 20.3 7.1L12.4 2.2Z" fill="#18181B" stroke="#E0234E" strokeWidth="1.2" />
        <path d="M16.5 8C15.5 6.5 13.5 6.2 12.2 7.2L8.2 10.5C7.2 11.3 6.8 12.6 7.2 13.8C7.6 15 8.7 15.8 10 15.8H15V13.8H10.5C10 13.8 9.5 13.4 9.4 12.9C9.3 12.4 9.6 11.9 10 11.6L14 8.5C14.7 7.9 15.8 8.1 16.4 8.8L16.5 8Z" fill="#E0234E" />
      </svg>
    );
  }

  // 12. Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3.5 6.9V16.7L12 21.6L20.5 16.7V6.9L12 2Z" fill="#339933" />
        <path d="M12 4.2L5.4 8V15.6L12 19.4L18.6 15.6V8L12 4.2Z" fill="#215732" />
        <path d="M12 7.5L8.2 9.7V14.1L12 16.3L15.8 14.1V9.7L12 7.5ZM14.3 13.2L12 14.5L9.7 13.2V10.6L12 9.3L14.3 10.6V13.2Z" fill="#6CC24A" />
      </svg>
    );
  }

  // 13. Express.js
  if (norm.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
        <text x="12" y="16" fill="#F8FAFC" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          ex
        </text>
      </svg>
    );
  }

  // 14. GraphQL
  if (norm.includes('graphql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L20.2 7.2V16.8L12 21.5L3.8 16.8V7.2L12 2.5Z" stroke="#E10098" strokeWidth="1.4" />
        <path d="M12 5.5L17.6 15.2H6.4L12 5.5Z" stroke="#E10098" strokeWidth="1.4" />
        <circle cx="12" cy="2.5" r="1.8" fill="#E10098" />
        <circle cx="20.2" cy="7.2" r="1.8" fill="#E10098" />
        <circle cx="20.2" cy="16.8" r="1.8" fill="#E10098" />
        <circle cx="12" cy="21.5" r="1.8" fill="#E10098" />
        <circle cx="3.8" cy="16.8" r="1.8" fill="#E10098" />
        <circle cx="3.8" cy="7.2" r="1.8" fill="#E10098" />
      </svg>
    );
  }

  // 15. Django
  if (norm.includes('django')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0C4B33" />
        <path d="M11 6.5H13.2V14.2C13.2 15.8 12.3 16.7 10.7 16.7C9.8 16.7 9 16.4 8.5 15.8L9.4 14.5C9.8 14.9 10.2 15.1 10.7 15.1C11.5 15.1 11.9 14.7 11.9 13.8V6.5H11ZM14.3 9.8H16.5V16.5H14.3V9.8ZM14.3 6.5H16.5V8.5H14.3V6.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 16. FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#009688" />
        <path d="M12.8 4.5L6.8 13.5H12L11.2 19.5L17.2 10.5H12L12.8 4.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 17. Laravel
  if (norm.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.8 6.5L12 2L4.2 6.5V17.5L12 22L19.8 17.5V6.5Z" fill="#18181B" stroke="#FF2D20" strokeWidth="1" />
        <path d="M8.5 7.5L12 9.5V13.5L8.5 11.5V7.5Z" fill="#FF2D20" />
        <path d="M12 9.5L15.5 7.5V11.5L12 13.5V9.5Z" fill="#E02418" />
        <path d="M12 13.5L15.5 11.5L19 13.5L15.5 15.5L12 13.5Z" fill="#FF4438" />
        <path d="M12 13.5L8.5 15.5L12 17.5L15.5 15.5L12 13.5Z" fill="#FF2D20" />
      </svg>
    );
  }

  // 18. .NET
  if (norm === '.net' || norm.includes('dotnet')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#512BD4" />
        <circle cx="7" cy="15" r="1.2" fill="#FFFFFF" />
        <path d="M9 16V8.5H10.5L13.2 13.2V8.5H14.5V16H13L10.3 11.2V16H9Z" fill="#FFFFFF" />
        <path d="M16 16V8.5H20V9.8H17.4V11.6H19.5V12.8H17.4V14.7H20V16H16Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 19. LangChain
  if (norm.includes('langchain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0E2822" stroke="#22C55E" strokeWidth="1" />
        <path d="M15.5 7.5C14.7 6.6 13.4 6 12 6C9.2 6 7 8.2 7 11C7 12.3 7.5 13.5 8.3 14.4L10 13C9.5 12.5 9.2 11.8 9.2 11C9.2 9.5 10.5 8.2 12 8.2C12.8 8.2 13.5 8.5 14 9.1L15.5 7.5Z" fill="#22C55E" />
        <path d="M8.5 16.5C9.3 17.4 10.6 18 12 18C14.8 18 17 15.8 17 13C17 11.7 16.5 10.5 15.7 9.6L14 11C14.5 11.5 14.8 12.2 14.8 13C14.8 14.5 13.5 15.8 12 15.8C11.2 15.8 10.5 15.5 10 14.9L8.5 16.5Z" fill="#4ADE80" />
        <circle cx="12" cy="12" r="1.8" fill="#FACC15" />
      </svg>
    );
  }

  // 20. LangGraph
  if (norm.includes('langgraph')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18181B" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="7" cy="8" r="2.5" fill="#3B82F6" />
        <circle cx="17" cy="8" r="2.5" fill="#F59E0B" />
        <circle cx="12" cy="17" r="2.5" fill="#10B981" />
        <path d="M9.2 8H14.8M8.5 10L10.8 15M15.5 10L13.2 15" stroke="#94A3B8" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
    );
  }

  // 21. LangSmith
  if (norm.includes('langsmith')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0C1B2E" stroke="#0EA5E9" strokeWidth="1" />
        <path d="M12 4L13.8 9.5H19.5L14.9 12.9L16.6 18.5L12 15.1L7.4 18.5L9.1 12.9L4.5 9.5H10.2L12 4Z" fill="#38BDF8" />
        <circle cx="12" cy="12" r="1.8" fill="#F97316" />
      </svg>
    );
  }

  // 22. Scikit-learn
  if (norm.includes('scikit') || norm.includes('sklearn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="12" r="6" fill="#F7931E" fillOpacity="0.85" />
        <circle cx="15" cy="12" r="6" fill="#3499CD" fillOpacity="0.85" />
        <text x="12" y="14" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle">
          sk
        </text>
      </svg>
    );
  }

  // 23. TensorFlow
  if (norm.includes('tensorflow')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4.5 7.3V16.7L8.5 14.4V11.2L12 13.2L15.5 11.2V14.4L19.5 16.7V7.3L12 3Z" fill="#FF6F00" />
        <path d="M12 7.2L8.5 9.2V13L12 15L15.5 13V9.2L12 7.2Z" fill="#FFA000" />
      </svg>
    );
  }

  // 24. Pandas
  if (norm.includes('pandas')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#130754" />
        <rect x="5" y="7" width="2.8" height="10" rx="1" fill="#FF433D" />
        <rect x="9.5" y="5" width="2.8" height="14" rx="1" fill="#E70488" />
        <rect x="14" y="9" width="2.8" height="8" rx="1" fill="#00D4AA" />
        <rect x="18.5" y="11" width="2.8" height="6" rx="1" fill="#FFD23F" />
      </svg>
    );
  }

  // 25. NumPy
  if (norm.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#013243" />
        <path d="M6 7H8.5L15.5 17H18V7H15.5V12L9.5 7H6V17H8.5V7Z" fill="#4DABCF" />
      </svg>
    );
  }

  // 26. OpenRouter
  if (norm.includes('openrouter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#18181B" stroke="#6366F1" strokeWidth="1" />
        <circle cx="12" cy="12" r="7" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="12" cy="12" r="3.5" fill="#A855F7" />
        <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 27. Groq
  if (norm.includes('groq')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1E0E0E" stroke="#F55036" strokeWidth="1" />
        <path d="M6 14C6 9.6 9.6 6 14 6H18V10C18 14.4 14.4 18 10 18H6V14Z" fill="#F55036" />
        <circle cx="13" cy="11" r="2.2" fill="#FFFFFF" />
      </svg>
    );
  }

  // 28. Hugging Face
  if (norm.includes('hugging')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="8.5" cy="10" r="1.3" fill="#1F2937" />
        <circle cx="15.5" cy="10" r="1.3" fill="#1F2937" />
        <path d="M9 14.5C10 16 14 16 15 14.5" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 14C5 12 7 13 6 15M20 14C19 12 17 13 18 15" stroke="#EAB308" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 29. Antigravity
  if (norm.includes('antigravity')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#0D1117" stroke="#35D6E8" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#35D6E8" strokeWidth="1.4" transform="rotate(-30 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#8B5CF6" strokeWidth="1.4" transform="rotate(30 12 12)" />
        <circle cx="12" cy="12" r="2.4" fill="#35D6E8" />
      </svg>
    );
  }

  // 30. Google AI Studio
  if (norm.includes('google ai') || norm.includes('ai studio')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" />
        <path d="M12 3L14.2 9.8L21 12L14.2 14.2L12 21L9.8 14.2L3 12L9.8 9.8L12 3Z" fill="url(#googleAiGrad)" />
        <defs>
          <linearGradient id="googleAiGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4" />
            <stop offset="0.5" stopColor="#9B72CF" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 31. Gemini API
  if (norm.includes('gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0E1626" stroke="#4F8CFF" strokeWidth="0.8" />
        <path d="M12 2.5C12 7.7 7.7 12 2.5 12C7.7 12 12 16.3 12 21.5C12 16.3 16.3 12 21.5 12C16.3 12 12 7.7 12 2.5Z" fill="url(#geminiGrad)" />
        <defs>
          <linearGradient id="geminiGrad" x1="2.5" y1="2.5" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E2" />
            <stop offset="0.6" stopColor="#9B72CF" />
            <stop offset="1" stopColor="#FF7769" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 32. ChatGPT / OpenAI
  if (norm.includes('chatgpt') || norm.includes('openai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#10A37F" />
        <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.8" />
        <path d="M12 6V18M6 12H18M7.8 7.8L16.2 16.2M7.8 16.2L16.2 7.8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 33. Claude
  if (norm.includes('claude') || norm.includes('anthropic')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#D97706" />
        <path d="M12 4V20M4 12H20M6.3 6.3L17.7 17.7M6.3 17.7L17.7 6.3" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 34. DeepSeek
  if (norm.includes('deepseek')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0B2046" stroke="#1E88E5" strokeWidth="1" />
        <path d="M5 14C6.5 10 11 8 16 10C18.5 11 20 13.5 19 16C18 18.5 15.5 19 13 18C9.5 16.6 7 17 5 14Z" fill="#1E88E5" />
        <circle cx="16" cy="12" r="1.3" fill="#FFFFFF" />
      </svg>
    );
  }

  // 35. Ollama
  if (norm.includes('ollama')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18181B" stroke="#52525B" strokeWidth="1" />
        <path d="M10 6C9.5 5 8.5 5 8 6V12H9L10 17H12L13 12H14V9C14 7.5 12.5 6 11 6H10Z" fill="#FFFFFF" />
        <circle cx="10" cy="8.5" r="0.8" fill="#18181B" />
      </svg>
    );
  }

  // 36. Linux
  if (norm.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18181B" />
        {/* Tux Penguin */}
        <ellipse cx="12" cy="14" rx="5" ry="6.5" fill="#FFFFFF" />
        <path d="M7 14C7 9 9 5 12 5C15 5 17 9 17 14C17 19 15 21 12 21C9 21 7 19 7 14Z" stroke="#000000" strokeWidth="1.2" />
        <ellipse cx="12" cy="15" rx="3.5" ry="4.5" fill="#FFFFFF" />
        <circle cx="10.5" cy="9.5" r="1" fill="#000000" />
        <circle cx="13.5" cy="9.5" r="1" fill="#000000" />
        <polygon points="10.5,11.5 13.5,11.5 12,13" fill="#F59E0B" />
        <ellipse cx="9" cy="20.5" rx="2.5" ry="1.2" fill="#F59E0B" />
        <ellipse cx="15" cy="20.5" rx="2.5" ry="1.2" fill="#F59E0B" />
      </svg>
    );
  }

  // 37. Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0B2341" stroke="#2496ED" strokeWidth="1" />
        {/* Containers */}
        <rect x="7" y="10" width="2" height="1.8" fill="#2496ED" />
        <rect x="9.5" y="10" width="2" height="1.8" fill="#2496ED" />
        <rect x="12" y="10" width="2" height="1.8" fill="#2496ED" />
        <rect x="9.5" y="7.8" width="2" height="1.8" fill="#2496ED" />
        <rect x="12" y="7.8" width="2" height="1.8" fill="#2496ED" />
        {/* Whale */}
        <path d="M4 13.5C5 13.5 6 12.8 7 13.5C8 14 15 14 17 12C18.5 10.5 19 12 20 12.5C21 13 21.5 14 20 15.5C18 17.5 14 18 10 18C6.5 18 4 16 4 13.5Z" fill="#2496ED" />
        <circle cx="7" cy="15" r="0.8" fill="#0B2341" />
      </svg>
    );
  }

  // 38. Kubernetes
  if (norm.includes('kubernetes') || norm === 'k8s') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F2454" stroke="#326CE5" strokeWidth="1" />
        {/* 7-spoked wheel */}
        <circle cx="12" cy="12" r="3" fill="#326CE5" />
        <circle cx="12" cy="12" r="7" stroke="#326CE5" strokeWidth="1.5" />
        <path d="M12 5V9M12 15V19M6 8.5L9.5 10.5M14.5 13.5L18 15.5M6 15.5L9.5 13.5M14.5 10.5L18 8.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 39. Nginx
  if (norm.includes('nginx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L20.2 7.2V16.8L12 21.5L3.8 16.8V7.2L12 2.5Z" fill="#009639" />
        <path d="M8 8V16L16 8V16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 40. PM2
  if (norm.includes('pm2')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#2B037A" stroke="#818CF8" strokeWidth="1" />
        <path d="M7 16V8H11C12.5 8 13.5 9 13.5 10.5C13.5 12 12.5 13 11 13H8.8V16H7ZM8.8 11.5H11C11.6 11.5 12 11.1 12 10.5C12 9.9 11.6 9.5 11 9.5H8.8V11.5ZM14.5 16V8H16.2L18.5 13.5L20.8 8H22.5V16H21V10.5L19 15H18L16 10.5V16H14.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 41. Nmap
  if (norm.includes('nmap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0A1E36" stroke="#00B4D8" strokeWidth="1" />
        <circle cx="12" cy="12" r="7.5" stroke="#00B4D8" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="4.5" stroke="#00B4D8" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="1.8" fill="#38BDF8" />
        <path d="M12 4.5V19.5M4.5 12H19.5" stroke="#00B4D8" strokeWidth="0.8" />
        <path d="M12 12L17.5 6.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 42. Nikto
  if (norm.includes('nikto')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#2D0B0B" stroke="#EF4444" strokeWidth="1" />
        <path d="M12 3.5L19 7.5V13C19 17.5 16 20.5 12 21.5C8 20.5 5 17.5 5 13V7.5L12 3.5Z" fill="#991B1B" stroke="#EF4444" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="3" stroke="#FEE2E2" strokeWidth="1.4" />
        <path d="M12 9V15M9 12H15" stroke="#FEE2E2" strokeWidth="1.4" />
      </svg>
    );
  }

  // 43. PostgreSQL
  if (norm.includes('postgres') || norm.includes('psql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1C2E4A" stroke="#336791" strokeWidth="1" />
        {/* Elephant outline */}
        <path d="M7 16C7 11 9 7 13 7C17 7 18 10 18 14C18 18 15.5 19 13.5 19C12 19 11.5 18 11.5 16.5C11.5 15 10.5 14 9.5 14C8.5 14 7 15 7 16Z" fill="#336791" stroke="#68A0CF" strokeWidth="1" />
        <circle cx="15" cy="11" r="1" fill="#FFFFFF" />
      </svg>
    );
  }

  // 44. MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.5 3.5 7 9.5 7 14C7 17.5 9.2 20.5 12 22C14.8 20.5 17 17.5 17 14C17 9.5 12.5 3.5 12 2Z" fill="#47A248" />
        <path d="M12 3V21C11.8 21 11.5 20.5 11 19.5V4C11.5 3.5 11.8 3.2 12 3Z" fill="#13AA52" />
        <path d="M12 21V3C12.2 3.2 12.5 3.5 13 4V19.5C12.5 20.5 12.2 21 12 21Z" fill="#3FA037" />
      </svg>
    );
  }

  // 45. Redis
  if (norm.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7.5L12 12L20 7.5L12 3Z" fill="#DC382D" />
        <path d="M4 11.5L12 16L20 11.5" stroke="#A71D14" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 15.5L12 20L20 15.5" stroke="#7A120B" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  // 46. Firebase
  if (norm.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M5.5 17.5L7.8 3.5L10.8 9.5L5.5 17.5Z" fill="#FFA000" />
        <path d="M18.5 17.5L14.2 6.5L10.8 9.5L18.5 17.5Z" fill="#F57C00" />
        <path d="M3.5 17.5L12 22L18.5 17.5L12 11.5L3.5 17.5Z" fill="#FFCA28" />
      </svg>
    );
  }

  // 47. Elasticsearch
  if (norm.includes('elasticsearch') || norm.includes('elastic')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#005571" />
        <circle cx="12" cy="12" r="7" stroke="#FED136" strokeWidth="1.8" />
        <path d="M6 12H18" stroke="#00BFB3" strokeWidth="2.5" />
      </svg>
    );
  }

  // 48. VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5L7 11L3 8L1.5 9L4 12L1.5 15L3 16L7 13L17.5 21.5L22.5 19V5L17.5 2.5Z" fill="#007ACC" />
        <path d="M17.5 6.5L9.5 12L17.5 17.5V6.5Z" fill="#1F9CF0" />
      </svg>
    );
  }

  // 49. Git & GitHub
  if (norm.includes('git') || norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18181B" stroke="#374151" strokeWidth="1" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.29 18.53 9.47 19.59C9.87 19.66 10.02 19.42 10.02 19.21C10.02 19.02 10.01 18.39 10.01 17.72C7.78 18.2 7.31 16.76 7.31 16.76C6.95 15.84 6.43 15.6 6.43 15.6C5.7 15.11 6.48 15.12 6.48 15.12C7.29 15.18 7.71 15.95 7.71 15.95C8.43 17.18 9.6 16.83 10.06 16.62C10.13 16.1 10.34 15.74 10.57 15.54C8.79 15.34 6.92 14.65 6.92 11.58C6.92 10.71 7.23 10 7.74 9.45C7.66 9.25 7.38 8.44 7.82 7.34C7.82 7.34 8.49 7.13 10.01 8.16C10.65 7.98 11.33 7.89 12 7.89C12.67 7.89 13.35 7.98 13.99 8.16C15.51 7.13 16.18 7.34 16.18 7.34C16.62 8.44 16.34 9.25 16.26 9.45C16.77 10 17.08 10.71 17.08 11.58C17.08 14.66 15.2 15.34 13.41 15.54C13.7 15.79 13.96 16.28 13.96 17.03C13.96 18.11 13.95 18.98 13.95 19.21C13.95 19.42 14.1 19.67 14.5 19.59C17.71 18.52 20 15.54 20 12C20 7.58 16.42 4 12 4Z" fill="#F05032" />
      </svg>
    );
  }

  // 50. Jupyter
  if (norm.includes('jupyter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#18181B" />
        <path d="M12 4.5C8 4.5 4.5 6 4.5 7.8C4.5 9.6 8 11.1 12 11.1C16 11.1 19.5 9.6 19.5 7.8C19.5 6 16 4.5 12 4.5Z" fill="#F37626" />
        <path d="M12 12.9C8 12.9 4.5 14.4 4.5 16.2C4.5 18 8 19.5 12 19.5C16 19.5 19.5 18 19.5 16.2C19.5 14.4 16 12.9 12 12.9Z" fill="#9E9E9E" />
        <circle cx="18" cy="12" r="1.5" fill="#6E6E6E" />
      </svg>
    );
  }

  // 51. Flutter
  if (norm.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.5 2.5L4.5 11.5L7.5 14.5L19.5 2.5H13.5Z" fill="#42A5F5" />
        <path d="M13.5 12.5L9.5 16.5L12.5 19.5L16.5 15.5L19.5 12.5H13.5Z" fill="#0D47A1" />
        <path d="M9.5 16.5L12.5 19.5L7.5 21.5L5.5 19.5L9.5 16.5Z" fill="#29B6F6" />
      </svg>
    );
  }

  // 52. Rx-Dart
  if (norm.includes('rx-dart') || norm.includes('rxdart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2B0A3D" stroke="#B7178C" strokeWidth="1" />
        <path d="M7 8H11C12.5 8 13.5 9 13.5 10.5C13.5 11.8 12.6 12.8 11.2 13L14 17H11.8L9.5 13.5H8.8V17H7V8ZM8.8 12H11C11.6 12 12 11.5 12 10.5C12 9.5 11.6 9.2 11 9.2H8.8V12Z" fill="#F43F5E" />
        <path d="M14 9L18 16M18 9L14 16" stroke="#B7178C" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 53. Provider
  if (norm.includes('provider')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#02569B" />
        <path d="M6 7H13C15 7 16.5 8.5 16.5 10.5C16.5 12.5 15 14 13 14H9V18H6V7ZM9 11.5H13C13.6 11.5 14 11 14 10.5C14 10 13.6 9.5 13 9.5H9V11.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 54. BLoC
  if (norm.includes('bloc')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0175C2" />
        <rect x="5" y="6" width="6" height="5" rx="1" fill="#FFFFFF" />
        <rect x="13" y="6" width="6" height="5" rx="1" fill="#90CAF9" />
        <rect x="5" y="13" width="6" height="5" rx="1" fill="#90CAF9" />
        <rect x="13" y="13" width="6" height="5" rx="1" fill="#FFFFFF" />
      </svg>
    );
  }

  // 55. Android (Java)
  if (norm.includes('android') || norm.includes('java')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" />
        {/* Android bugdroid */}
        <path d="M7 11C7 8.2 9.2 6 12 6C14.8 6 17 8.2 17 11H7Z" fill="#3DDC84" />
        <circle cx="9.5" cy="8.5" r="0.9" fill="#1E293B" />
        <circle cx="14.5" cy="8.5" r="0.9" fill="#1E293B" />
        <line x1="8.5" y1="6" x2="6.8" y2="3.8" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="15.5" y1="6" x2="17.2" y2="3.8" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="7" y="12.5" width="10" height="6.5" rx="1.5" fill="#3DDC84" />
      </svg>
    );
  }

  // 56. Socket.IO
  if (norm.includes('socket')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#010101" stroke="#38BDF8" strokeWidth="1" />
        <path d="M12 4.5L6.5 14H12L11 19.5L17.5 10H12L12 4.5Z" fill="#38BDF8" />
      </svg>
    );
  }

  // 57. WebRTC
  if (norm.includes('webrtc')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" />
        <circle cx="9" cy="9" r="4.5" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
        <circle cx="15" cy="9" r="4.5" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="15" r="4.5" stroke="#10B981" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  // 58. Puppeteer
  if (norm.includes('puppeteer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0B2321" stroke="#00D8A2" strokeWidth="1" />
        {/* Puppet strings & control */}
        <line x1="5" y1="5" x2="19" y2="19" stroke="#00D8A2" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="5" x2="5" y2="19" stroke="#00D8A2" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#40B5A6" />
      </svg>
    );
  }

  // 59. MobX
  if (norm.includes('mobx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#FF9955" />
        <circle cx="12" cy="12" r="4.5" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2" fill="#E05500" />
      </svg>
    );
  }

  // 60. NgRx
  if (norm.includes('ngrx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L3.5 5.5L4.8 16.8L12 21.5L19.2 16.8L20.5 5.5L12 2.5Z" fill="#BA68C8" />
        <path d="M12 2.5V21.5L19.2 16.8L20.5 5.5L12 2.5Z" fill="#9C27B0" />
        <circle cx="12" cy="12" r="3.2" fill="#FFFFFF" />
      </svg>
    );
  }

  // 61. Nuxt.js
  if (norm.includes('nuxt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#002E3B" />
        <path d="M3.5 18L10.5 6L17.5 18H3.5Z" fill="#00DC82" />
        <path d="M11.5 18L16 10L20.5 18H11.5Z" fill="#00C58E" fillOpacity="0.8" />
      </svg>
    );
  }

  // 62. Vuex
  if (norm.includes('vuex')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1C382B" stroke="#42B883" strokeWidth="1" />
        <path d="M12 4L4 9V15L12 20L20 15V9L12 4Z" stroke="#42B883" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" fill="#42B883" />
      </svg>
    );
  }

  // 63. Vue.js
  if (norm.includes('vue')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M2 3H6.5L12 12.5L17.5 3H22L12 20.5L2 3Z" fill="#42B883" />
        <path d="M6.5 3H10L12 6.5L14 3H17.5L12 12.5L6.5 3Z" fill="#35495E" />
      </svg>
    );
  }

  // 64. MongoDB Compass
  if (norm.includes('compass')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#0C2518" stroke="#13AA52" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="3" stroke="#47A248" strokeWidth="1" />
        <polygon points="12,5 14,12 12,19 10,12" fill="#13AA52" />
        <polygon points="12,5 14,12 12,12" fill="#3FA037" />
      </svg>
    );
  }

  // 63. jQuery
  if (norm.includes('jquery')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0769AD" />
        <text x="12" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          jQ
        </text>
      </svg>
    );
  }

  // 64. Bootstrap
  if (norm.includes('bootstrap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <text x="12" y="16.5" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          B
        </text>
      </svg>
    );
  }

  // 65. MySQL
  if (norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00618A" />
        <path d="M6 16C7 13 10 10 14 10C16 10 18 11 19 13C17 12 15 12 13 13C10.5 14 8 16 6 16Z" fill="#E48E00" />
        <path d="M14 8C14.8 8 15.5 8.7 15.5 9.5C15.5 10.3 14.8 11 14 11C13.2 11 12.5 10.3 12.5 9.5C12.5 8.7 13.2 8 14 8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 66. Adobe XD
  if (norm.includes('adobe xd') || norm === 'xd') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#470137" stroke="#FF61F6" strokeWidth="1" />
        <text x="12" y="15.5" fill="#FF61F6" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          Xd
        </text>
      </svg>
    );
  }

  // 67. Illustrator
  if (norm.includes('illustrator')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#330000" stroke="#FF9A00" strokeWidth="1" />
        <text x="12" y="15.5" fill="#FF9A00" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          Ai
        </text>
      </svg>
    );
  }

  // 68. XAMPP
  if (norm.includes('xampp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FB7A24" />
        <path d="M7 7L17 17M17 7L7 17" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 69. C++ / C#
  if (norm.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <text x="12" y="15.5" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          C++
        </text>
      </svg>
    );
  }

  if (norm.includes('c#')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#9B4993" />
        <text x="12" y="15.5" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          C#
        </text>
      </svg>
    );
  }

  // 70. Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.8 2C9.5 2 7.7 2.3 7.7 3.8V5.3H12V6.1H4.9C3.4 6.1 2 7.5 2 9.8C2 12.1 3.2 12.8 4.7 12.8H6.2V11.3C6.2 9.5 7.7 8 9.5 8H13.8C15.1 8 16.1 7 16.1 5.7V3.8C16.1 2.3 14.1 2 11.8 2ZM9.5 3.5C10 3.5 10.4 3.9 10.4 4.4C10.4 4.9 10 5.3 9.5 5.3C9 5.3 8.6 4.9 8.6 4.4C8.6 3.9 9 3.5 9.5 3.5Z" fill="#387EB8" />
        <path d="M12.2 22C14.5 22 16.3 21.7 16.3 20.2V18.7H12V17.9H19.1C20.6 17.9 22 16.5 22 14.2C22 11.9 20.8 11.2 19.3 11.2H17.8V12.7C17.8 14.5 16.3 16 14.5 16H10.2C8.9 16 7.9 17 7.9 18.3V20.2C7.9 21.7 9.9 22 12.2 22ZM14.5 20.5C14 20.5 13.6 20.1 13.6 19.6C13.6 19.1 14 18.7 14.5 18.7C15 18.7 15.4 19.1 15.4 19.6C15.4 20.1 15 20.5 14.5 20.5Z" fill="#FFE052" />
      </svg>
    );
  }

  // 71. Go
  if (norm.includes('go') || norm.includes('golang') || norm.includes('gin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00ADD8" />
        <text x="12" y="16" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          GO
        </text>
      </svg>
    );
  }

  // 72. Neon (PostgreSQL)
  if (norm.includes('neon')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0A1813" stroke="#00E599" strokeWidth="1" />
        <path d="M7 17V7L17 17V7" stroke="#00E599" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 73. Upstash (Redis)
  if (norm.includes('upstash')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#031F1C" stroke="#00E9A3" strokeWidth="1" />
        <path d="M12 4L6 14H12L10 20L18 10H12L12 4Z" fill="#00E9A3" />
      </svg>
    );
  }

  // 74. Cloudinary
  if (norm.includes('cloudinary')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1B264F" />
        <path d="M7.5 15C6.1 15 5 13.9 5 12.5C5 11.2 6 10.1 7.2 10C7.6 8.3 9.1 7 11 7C12.9 7 14.5 8.3 14.9 10C15.1 10 15.3 10 15.5 10C17.4 10 19 11.6 19 13.5C19 15.4 17.4 17 15.5 17H7.5" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // 75. Render
  if (norm.includes('render')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#141414" stroke="#46E3B7" strokeWidth="1" />
        <path d="M7 7H13C15.2 7 17 8.8 17 11C17 13.2 15.2 15 13 15H10V17H7V7ZM10 10V12H13C13.6 12 14 11.6 14 11C14 10.4 13.6 10 13 10H10Z" fill="#46E3B7" />
      </svg>
    );
  }

  // 76. Vercel
  if (norm.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#000000" stroke="#334155" strokeWidth="1" />
        <polygon points="12,5 19,17 5,17" fill="#FFFFFF" />
      </svg>
    );
  }

  // 77. Figma
  if (norm.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E1E1E" />
        <circle cx="15.5" cy="8.5" r="2.5" fill="#FF7262" />
        <circle cx="8.5" cy="8.5" r="2.5" fill="#F24E1E" />
        <circle cx="8.5" cy="12.5" r="2.5" fill="#A259FF" />
        <circle cx="15.5" cy="12.5" r="2.5" fill="#1ABCFE" />
        <circle cx="8.5" cy="16.5" r="2.5" fill="#0ACF83" />
      </svg>
    );
  }

  // 78. Postman
  if (norm.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M6 13L18 8L13 18L11 14L6 13Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Sleek Default Chip Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#111827" stroke="#35D6E8" strokeWidth="1" />
      <circle cx="12" cy="12" r="3.5" fill="#35D6E8" fillOpacity="0.3" stroke="#35D6E8" strokeWidth="1.2" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="#35D6E8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};
