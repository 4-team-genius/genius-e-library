import React from 'react'

function Header() {
  return (
    <header>
    <a href="#" class="header-brand">Genius e-Library</a>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="categories.html">Book Categories</a></li>
        <li><a href="lists.html">Book Lists</a></li>
        <li><a href="account.html">My Account</a></li>
      </ul>
      <a href="cases.html" class="header-cases">Cases</a>
    </nav>
  </header>
  )
}

export default Header