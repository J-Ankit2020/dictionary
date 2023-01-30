import React, { useState } from 'react'

const NavBar = ({darkModeHandler}) => {
   
  return (
    <nav className="h-2 py-10 px-3  flex items-center justify-center">
        <div className="logo left ">
            <img src="assets/logo.svg" alt="" className=""/>
        </div>
        <div className="right flex items-center justify-end w-4/5">
            <div className="fonts text-black mr-5 dark:text-white">
                <select id="font"
                    className="cursor-pointer outline-none checked:bg-transparent font-bold border-none bg-transparent">
                    <option value="Sans-Serif"
                        className="cursor-pointer checked:bg-transparent  checked:text-purple-700 focus:bg-transparent p-10">
                        Sans-Serif</option>
                    <option value="Monospace" className="cursor-pointer checked:text-purple-600">
                        Monospace</option>
                    <option value="Cursive" className="cursor-pointer checked:text-purple-600">Cursive
                    </option>
                </select>
            </div>

            <div className="toggle">
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onChange={() => darkModeHandler()} defaultChecked={true}/>
                    <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500  peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
                    </div>
                    <span className="ml-5 text-sm font-medium text-gray dark:text-gray-300"><img src="assets/moon.svg"
                            alt=""/></span>
                </label>
            </div>

        </div>
</nav>
  )
}
export default NavBar;