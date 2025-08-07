export default function HeroSection() {
  return (
    <section className="relative bg-[#fff3e9] border border-[#e4dfd3] rounded-[90px] px-6 py-16 md:p-20 lg:p-24 mb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-[90px] font-bold leading-tight tracking-tight">
            Let your eyes<br/> be the judge,<br/> not their words.
          </h1>
          <div className="w-[50px] h-[6px] rounded bg-[#ffbe4b]"></div>
          <p className="text-lg md:text-xl max-w-lg tracking-wider">
            Your ultimate travel companion. Carries all the information you need while travelling
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="relative">
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af"
              alt="Travel app mockup"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                alt="Phone mockup"
                className="w-3/4 h-auto shadow-2xl rounded-3xl transform translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}