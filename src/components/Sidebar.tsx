import { useState } from "react";

const Sidebar = () => {

const [categories, setCategories] = useState<string[]>([]);
const [keywords] = useState<string[] ({
    "sword",
    "armor",
    "boots",
    "shield",
    "helmet",
})

useEffect(() =>{
    const fetchCategories = async () => {
        try {

        }
        catch (error)
    }
}

return <div>Sidebar</div>
}

export default Sidebar;