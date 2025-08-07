// src/components/FeaturesSection.jsx
export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
            alt="Traveler with backpack"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-sm text-[#767676]">
              "I love how this app keeps all my travel memories in one place from photos to journal entries, it's like reliving every adventure!"
            </p>
            <p className="text-[#575757] text-right mt-2">- Smith James</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[#9e9e9e] text-xl md:text-2xl tracking-wider">GET CONNECTED</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Share Your memories with your travel buddies
          </h2>

          <div className="space-y-8 mt-10">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full w-[54px] h-[52px] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-2xl">person_add</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 tracking-wider">Signup</h3>
                <p className="text-[#767676] leading-relaxed">
                  Make an account and login to keep yourself updated into travellers platform
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full w-[54px] h-[52px] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-2xl">event</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 tracking-wider">Create Events</h3>
                <p className="text-[#767676] leading-relaxed">
                  Create an event to gather your fellow travellers and get to know them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full w-[54px] h-[52px] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-2xl">photo_library</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 tracking-wider">Share Memories</h3>
                <p className="text-[#767676] leading-relaxed">
                  Upload and share stories with your fellow travellers anytime
                </p>
              </div>
            </div>
          </div>
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