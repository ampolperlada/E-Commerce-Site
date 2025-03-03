import { useState, useEffect } from "react";
import { Fetcher } from "react-router-dom";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

const Sidebar = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "sword",
        "armor",
        "boots",
        "shield",
        "helmet",
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://pixeljson.com/products');
                const data: FetchResponse = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            {/* Render categories and keywords */}
        </div>
    );
};

export default Sidebar;