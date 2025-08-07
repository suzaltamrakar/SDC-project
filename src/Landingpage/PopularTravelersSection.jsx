// src/components/PopularTravelersSection.jsx
export default function PopularTravelersSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Subtle background text */}
      <div className="absolute opacity-10 text-[185px] font-bold text-[#7e7676] tracking-widest top-0 left-0 right-0 text-center pointer-events-none">
        Travel Diary
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6">
            <div className="w-[48px] h-[6px] bg-[#ff632c] rounded"></div>
            <p className="text-[#909090] uppercase tracking-wider text-lg">Popular Travellers</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3a3a3a] leading-tight">
              Know the people you're going to meet
            </h2>
            <p className="text-[#595858] leading-relaxed">
              Have a quick conversation anytime you need with your fellow travellers you're going to travel with.
            </p>

            {/* Traveler Avatars */}
            <div className="flex items-center space-x-3 mt-4">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/21.jpg"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/23.jpg"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center border-2 border-white">
                <span className="material-symbols-outlined text-[#ff632c]">add</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed mt-4">
              With one simple click you can know who can be your travel buddy.
            </p>
          </div>

          {/* Right Side: Now empty but keeps layout balanced */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}


// export default function FeaturesSection() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
//           <img
//             src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
//             alt="Traveler with backpack"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
//             <p className="text-sm text-[#767676]">
//               "I love how this app keeps all my travel memories in one place from photos to journal entries, it's like reliving every adventure!"
//             </p>
//             <p className="text-[#575757] text-right mt-2">- Smith James</p>
//           </div>
//         </div>
//         <div className="space-y-6">
//           <p className="text-[#9e9e9e] text-xl md:text-2xl tracking-wider">GET CONNECTED</p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
//             Share Your memories with your travel buddies
//           </h2>
//           <div className="space-y-8 mt-10">
//             {[
//               { icon: 'person_add', title: 'Signup', desc: 'Make an account and login to keep yourself updated into travellers platform' },
//               { icon: 'event', title: 'Create Events', desc: 'Create an event to gather your fellow travellers and get to know them.' },
//               { icon: 'photo_library', title: 'Share Memories', desc: 'Upload and share stories with your fellow travellers anytime' },
//             ].map((item, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <div className="bg-white rounded-full w-[54px] h-[52px] flex items-center justify-center shadow-md">
//                   <span className="material-symbols-outlined text-2xl">{item.icon}</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl md:text-2xl mb-2 tracking-wider">{item.title}</h3>
//                   <p className="text-[#767676] leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }