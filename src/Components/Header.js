import React from 'react'
import AmazonLogo from "../Assets/Amazon-logo.png";


function Header() {
  return (
    <header>
      <main className='bg-black'>
        <div>
          <img className=" w-40" src={AmazonLogo} alt="Amazon-logo" />
        </div>
        <div className="flex">
          <div>
            <select>
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
              <option value="Sport">Sport</option>
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          <div>
            <input type="text" name="search" placeholder="Search Amazon" />
          </div>
        </div>
      </main>
    </header>
  )
}

export default Header