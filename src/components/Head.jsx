import React from "react"
function Navbar() {
    return (
        <header className="w-screen p-2">
            <div className="w-full flex justify-between p-2">
                <div className="w-96">
                    <h1 className="font-serif text-2xl font-bold text-green-600">FAMILY HEALTH POINT</h1>
                    <p className="font-serif text-blue-600">YOUR BELIEVE OUR RESPONSIBILITY</p>
                    </div>
                    <div>
                        <img src="https://img1.wsimg.com/isteam/ip/775729d6-5b7b-4e31-a57c-e01c2c00f548/orchardhealthlogo01edit.jpg" className="h-12 w-20" alt="" />
                    </div>
            </div>
            <nav className="w-full flex bg-gray-600 justify-between">
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">HOME</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">BRANCHES</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">SERVICES</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">STAFF</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">FAQ</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">ABOUT</a></div>
                <div className="w-52 h-16 pt-5 hover:bg-red-700 text-center text-white"><a href="" className="font-serif font-bold">CONTACT</a></div>
            </nav>
        </header>
    )
}
export default Navbar