export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <h2 className="text-3xl font-bold mb-4">
            ShopEase
          </h2>

          <p className="text-gray-400 leading-7">
         shopping experience with
            best quality products and fast
            delivery service.
          </p>
        </div>

       
        <div>
         

          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="/"
                className="hover:text-white"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="hover:text-white"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="hover:text-white"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>


        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email: support@shopease.com</li>
            <li>Phone: +91 8794560147</li>
            <li>Delhi, India</li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
        © 2026 ShopEase. All rights reserved.
      </div>
    </footer>
  );
}