export default function Arma() {
  return (
    <div
      className="w-full h-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(/Dexter_pixel.png)`,
        backgroundPosition: "30% 40%",
        filter: "brightness(0.4) contrast(1.1) hue-rotate(10deg)",
        transform: "scale(0.85)",
      }}
    />
  );
}