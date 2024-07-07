import React from "react";
function Button({name}){
    return(
        <div>
            <button className="p-4 w-60 border border-red-400 rounded-md hover:bg-green-600 hover:text-gray-700 hover:font-bold transition-0.4s hover:border-none">{name}</button>
        </div>
    )
}
export default Button