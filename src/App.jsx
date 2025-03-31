import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-950 to-blue-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 pt-2">
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-blue-500">AI</span> Image Enhancer
          </h1>
          <p className="mt-2 opacity-80 text-sm md:text-base">
            Upload your image and let AI enhance it in seconds!
          </p>
        </div>

        {/* Main Functionality */}
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
