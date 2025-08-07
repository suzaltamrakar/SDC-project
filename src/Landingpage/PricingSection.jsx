// src/components/PricingSection.jsx
export default function PricingSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-[#5b5b5b] font-bold text-xl tracking-widest uppercase">PRICING TABLE</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mt-4 mb-6">
          Choose the plan that's right for you
        </h2>
        <div className="w-[46px] h-[7px] bg-[#f8bf53] rounded mx-auto"></div>
        <p className="text-2xl font-normal mt-6 max-w-2xl mx-auto">
          Empower Writers and Explore Every Blog <br /> Without Limits
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="inline-flex items-center border border-[#ff632c] rounded-md overflow-hidden">
          <div className="px-6 py-4 bg-[#ff632c4d] border-r-2 border-[#ff632c] text-center">
            <p className="text-[#585050] font-medium">Pay monthly</p>
            <p className="text-[#5e5757] text-[8px]">Save up to Rs:999</p>
          </div>
          <div className="px-6 py-4 bg-[#fffaf6] text-center">
            <p className="text-[#585050] font-medium">Pay annually</p>
            <p className="text-[#5e5757] text-[8px]">Save up to Rs:1999</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Member Plan */}
        <div className="border border-[#dcdcdc] rounded-lg p-8 space-y-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center">
            <div className="w-[90px] h-[90px] rounded-full bg-[#d9d9d9] mb-4"></div>
            <h3 className="text-2xl font-semibold">Member</h3>
            <p className="text-[#212121] text-lg font-medium mt-1">$5 USD /month</p>
          </div>
          <p className="text-[#a49696] text-center text-lg">
            Access exclusive content and <br /> support your favorite writers.
          </p>
          <button className="w-full bg-[#ff632c] text-white py-3 rounded-[23px] hover:bg-opacity-90 transition-colors">
            Select
          </button>
          <div className="space-y-2">
            {[
              'Unlock members-only blog posts',
              'Support your most-read bloggers',
              'Monetize your writing',
              'Audio versions of blog posts',
              'Offline reading in the mobile app',
              'Connect a custom blog domain',
              'Create and manage your own blog collections',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 8.75L6.25 11.25L12.25 5.25" stroke="#14ae5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#434343]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Friend Plan (x2) */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="border border-[#dcdcdc] rounded-lg p-8 space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="w-[90px] h-[90px] rounded-full bg-[#d9d9d9] mb-4"></div>
              <h3 className="text-2xl font-semibold">Friend</h3>
              <p className="text-[#212121] text-lg font-medium mt-1">$5 USD /month</p>
            </div>
            <p className="text-[#a49696] text-center text-lg">
              Access exclusive content and <br /> support your favorite writers.
            </p>
            <button className="w-full bg-[#ff632c] text-white py-3 rounded-[23px] hover:bg-opacity-90 transition-colors">
              Select
            </button>
            <p className="text-[#434343] text-center">All Medium member benefit</p>
            <p className="text-[#434343] text-center font-bold">PLUS</p>
            <div className="space-y-8">
              {[
                'Give 4x more to the writers you read',
                'Early access to new features',
                'Custom profile badge',
              ].map((item, j) => (
                <div key={j} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1.5">
                    <path d="M3.75 8.75L6.25 11.25L12.25 5.25" stroke="#14ae5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#434343] font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


