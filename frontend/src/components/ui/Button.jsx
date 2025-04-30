// src/components/ui/Button.jsx
export function Button({ children, className = '', ...props }) {
    return (
      <button
        {...props}
        className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded shadow hover:opacity-90 transition ${className}`}
      >
        {children}
      </button>
    );
  }
  