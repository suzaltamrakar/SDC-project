// src/components/CommunitySection.jsx
export default function CommunitySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[#888888] text-lg md:text-xl lg:text-2xl uppercase font-semibold tracking-wider mb-2">
          BUILD UP A COMMUNITY
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
          Join the biggest community of Travelers
        </h3>
      </div>

      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mt-8 mb-16">
        <div className="absolute inset-0 bg-[#dcdcdc] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            alt="World map with travel destinations"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0">
            <div className="absolute" style={{ top: '10%', left: '15%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '20%', left: '70%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '35%', left: '30%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '40%', left: '55%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '65%', left: '20%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '60%', left: '75%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
            <div className="absolute" style={{ top: '80%', left: '60%' }}>
              <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function CommunitySection() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto">
//       <div className="text-center mb-10">
//         <h2 className="text-[#888888] text-lg md:text-xl lg:text-2xl uppercase font-semibold tracking-wider mb-2">
//           BUILD UP A COMMUNITY
//         </h2>
//         <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
//           Join the biggest community of Travelers
//         </h3>
//       </div>
//       <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mt-8 mb-16">
//         <div className="absolute inset-0 bg-[#dcdcdc] overflow-hidden rounded-lg">
//           <img
//             src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
//             alt="World map with travel destinations"
//             className="w-full h-full object-cover opacity-30"
//           />
//           {/* Location Pins */}
//           {[
//             { top: '10%', left: '15%' },
//             { top: '20%', left: '70%' },
//             { top: '35%', left: '30%' },
//             { top: '40%', left: '55%' },
//             { top: '65%', left: '20%' },
//             { top: '60%', left: '75%' },
//             { top: '80%', left: '60%' },
//           ].map((pos, i) => (
//             <div key={i} className="absolute" style={pos}>
//               <div className="bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform">
//                 <span className="material-symbols-outlined text-[#ff632c]">location_on</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }