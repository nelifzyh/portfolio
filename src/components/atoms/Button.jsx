// src/components/atoms/Button.jsx
export default function Button({ text, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 relative overflow-hidden 
                ${
                    isActive
                        ? "text-white shadow-md bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-rainbow"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
        >
            {text}
        </button>
    );
}
