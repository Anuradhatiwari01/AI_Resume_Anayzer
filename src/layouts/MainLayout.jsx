import Navbar from "../components/common/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {children}
    </div>
  );
}