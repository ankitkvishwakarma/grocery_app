import { useState, useRef, useEffect } from "react";

const categories = [
    "All Categories", "Fruits", "Vegetables", "Beverages", "Snacks",
    "Dairy", "Bakery", "Meat & Seafood", "Household", "Personal Care",
    "Pet Care", "Frozen Foods", "Organic"
];

export default function CustomCategoryDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All Categories");
    const dropdownRef = useRef();

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            ref={dropdownRef}
            className={`relative w-40 rounded-md transition-all duration-300 ${isOpen ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            {/* Dropdown Button */}
            <div
                className="cursor-pointer px-3 py-1 text-sm text-gray-800 rounded-md flex justify-between items-center hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="truncate">{selected}</span>
                <span className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute z-20 mt-1 w-full bg-green-900 rounded-md shadow-md max-h-60 overflow-y-auto text-sm">
                    {categories.map((cat, idx) => (
                        <li
                            key={idx}
                            onClick={() => {
                                setSelected(cat);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2 hover:bg-green-500 cursor-pointer ${selected === cat ? "bg-green-900 font-medium" : ""
                                }`}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
