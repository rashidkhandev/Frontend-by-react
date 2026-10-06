function Navbar() {
  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="#">Products</a>
        <a href="#">Customize Order</a>

      </div>

      {/* Center Logo */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="Al-Ghiza Logo" />
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <a href="#">Community</a>
        <a href="#">Current Customer?</a>
        <a href="#">Order Now</a>

      </div>

    </nav>
  );
}

export default Navbar;