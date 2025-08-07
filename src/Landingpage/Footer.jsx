// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-20 lg:pt-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        {/* Company */}
        <div>
          <h3 className="text-[#010101] font-medium text-xl mb-4">Company</h3>
          <ul className="space-y-3">
            {['Careers', 'About Us', 'Blog', 'Press Info', 'Features', 'Successes'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#010101] hover:text-[#ff632c] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Travellers */}
        <div>
          <h3 className="text-[#010101] font-medium text-xl mb-4">Travellers</h3>
          <ul className="space-y-3">
            {['Why Travellers', 'Enterprise', 'Customer Stories', 'Pricing', 'Security'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#010101] hover:text-[#ff632c] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#010101] font-medium text-xl mb-4">Resources</h3>
          <ul className="space-y-3">
            {['Download', 'Help center', 'Guides', 'Events', 'Developers', 'App Directory', 'Partners'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#010101] hover:text-[#ff632c] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-[#010101] font-medium text-xl mb-4">Extras</h3>
          <ul className="space-y-3">
            {['Podcast', 'Travellers shop', 'Travellers at Work', 'Travellers Fund', 'Integration'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#010101] hover:text-[#ff632c] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-[#010101] font-medium text-xl mb-4">Subscribe</h3>
          <div className="border border-[#8a8a8a] rounded-md flex overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 p-4 text-[#7b7b7b] outline-none"
            />
            <button className="bg-[#ff632c] text-white p-4 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#f0f0f0] py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="font-semibold text-2xl tracking-widest mb-4 md:mb-0">Travel Diary</div>
        <div className="flex items-center gap-10">
          {['Home', 'Destination', 'Maps', 'Review'].map((item) => (
            <a key={item} href="#" className="hover:text-[#ff632c] transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          {['facebook', 'twitter', 'instagram'].map((social) => (
            <a key={social} href="#" className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <i className={`fa-brands fa-${social} text-black`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}