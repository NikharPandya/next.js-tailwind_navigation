export default function HeroBackground({ children }) {
  return (
    <div className="h-screen bg-gradient-to-r from-stone-100 via-green-100 to-green-200 mt-5">
      {children}
    </div>
  );
}
