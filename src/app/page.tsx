import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li><Link href="/about" target="_blank">About</Link></li>
          <li><Link href="/contact" target="_blank">Contact</Link></li>
          <li><Link href="/service" target="_blank">Service</Link></li>
        </ul>
      </nav>
      <h1>Home Page</h1>
    </div>
  )
}

export default Homepage;