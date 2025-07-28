function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center max-w-[1408px] min-h-px min-w-px px-4 py-0 relative shrink-0 w-[1408px]"
      data-name="Container"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[1091.5px] shrink-0 w-[1082px]"
        data-name="image 7"
        style={{ 
          backgroundImage: `url(/dexter_graphic.png)`,
          filter: "brightness(0.4) contrast(1.1) hue-rotate(60deg)",
        }}
      />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col inset-0 items-center justify-center p-0"
      data-name="Container"
    >
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="h-[1080px] max-w-[1408px] min-h-[1080px] shrink-0 w-[1248px]"
      data-name="Container"
    />
  );
}

function Main() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Main"
    >
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-h-[1200px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Main />
    </div>
  );
}

export default function Arma() {
  return (
    <div
      className="bg-[#121113] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="arma"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1920 1200\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(135.76 0 0 84.853 960 600)\\\'><stop stop-color=\\\'rgba(255,255,255,0.04)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(18, 17, 19) 0%, rgb(18, 17, 19) 100%), linear-gradient(90deg, rgb(18, 17, 19) 0%, rgb(18, 17, 19) 100%)",
      }}
    >
      <Container3 />
    </div>
  );
}