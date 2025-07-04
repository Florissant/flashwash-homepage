import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FlashWash – Your Car. Always Clean.</title>
        <meta name="description" content="The #1 car wash subscription platform in South Africa" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Car. Always Clean.</h1>
        <p className="text-xl mb-6">Join South Africa’s #1 car wash subscription network</p>
        <a href="#pricing" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Subscribe Now</a>
      </section>

      {/* How It Works */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div><h3 className="font-bold">1. Subscribe</h3><p>Pick your plan</p></div>
          <div><h3 className="font-bold">2. Find Partner</h3><p>Use our app to find nearby car washes</p></div>
          <div><h3 className="font-bold">3. Get Washed</h3><p>Scan & wash – that easy!</p></div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="shadow-lg p-6 rounded-lg border">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="text-gray-600 mb-2">R99/month</p>
            <p>2 washes/month</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg border">
            <h3 className="text-xl font-bold">Premium</h3>
            <p className="text-gray-600 mb-2">R199/month</p>
            <p>4 washes/month + priority access</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg border">
            <h3 className="text-xl font-bold">Family</h3>
            <p className="text-gray-600 mb-2">R299/month</p>
            <p>Up to 3 vehicles</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p>&copy; 2025 FlashWash. All rights reserved.</p>
        <p>Email: info@flashwash.co.za</p>
      </footer>
    </div>
  );
}