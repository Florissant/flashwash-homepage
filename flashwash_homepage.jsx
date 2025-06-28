export default function FlashWashHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to FlashWash</h1>
        <p className="text-center text-lg">
          The Uber of Car Washing in South Africa. One subscription. Multiple car washes. Unlimited convenience.
        </p>
        <div className="flex justify-center mt-6 gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow">Join Now</button>
          <button className="bg-gray-200 px-6 py-3 rounded-2xl">Partner With Us</button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li className="p-4 border rounded-xl shadow">
            <h3 className="font-semibold mb-2">Choose a Plan</h3>
            <p>Select a subscription package that suits your needs.</p>
          </li>
          <li className="p-4 border rounded-xl shadow">
            <h3 className="font-semibold mb-2">Find a Wash</h3>
            <p>Use our map or list to locate a nearby partner car wash.</p>
          </li>
          <li className="p-4 border rounded-xl shadow">
            <h3 className="font-semibold mb-2">Check In & Clean</h3>
            <p>Show your QR code, redeem your wash, and enjoy!</p>
          </li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why FlashWash?</h2>
        <p className="mb-6">We’re building a nationwide network of independent car washes to give you the flexibility you need, with local businesses you trust.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl">
            <h4 className="font-semibold mb-2">Affordable Plans</h4>
            <p>Starting from just R99/month.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h4 className="font-semibold mb-2">Nationwide Partners</h4>
            <p>We’re expanding across major cities in South Africa.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h4 className="font-semibold mb-2">Support Local</h4>
            <p>Your wash helps grow small businesses in your area.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FlashWash. All rights reserved.
      </footer>
    </div>
  );
}
