const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">EduGive CIC</h3>
            <p className="text-sm">Greencoat House, 259 Stratford Rd, Sparkbrook, Birmingham B11 1QS</p>
            <p className="text-sm">info@edugive.org | 0121 468 4440</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="https://www.facebook.com/edugiveuk/" target="_blank" rel="noreferrer" className="hover:text-green-400">Facebook</a></li>
              <li><a href="https://x.com/EduGiveCharity" target="_blank" rel="noreferrer" className="hover:text-green-400">X (Twitter)</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm mt-6">© {new Date().getFullYear()} EduGive CIC. All rights reserved.</p>
      </div>
    );
  };
  
  export default Footer;