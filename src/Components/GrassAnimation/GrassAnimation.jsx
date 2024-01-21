import React from "react";
import "./GrassAnimation.css";

function GrassAnimation() {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stack = [];

    canvas.style.width ='100%';
    const w = canvas.offsetWidth;
    const h = '80';

    const drawer = function () {
      ctx.fillStyle = "#ACEAFF";
      ctx.fillRect(0, 0, w, h);
      stack.forEach(function (el) {
        el();
      });
      requestAnimationFrame(drawer);
    };

    const anim = function () {
      let x = 0;
      const speed = Math.random() * 3;
      const position = Math.random() * w - w / 2;
      const maxTall = Math.random() * 50 + 2;
      const maxSize = 5//Math.random() * 10 + 5;

      const c = function (l, u) {
        return Math.round(Math.random() * (u || 255) + l || 0);
      };
      const color =
        "rgb(" + c(60, 10) + "," + c(201, 50) + "," + c(120, 50) + ")";

      return function () {
        const deviation = Math.cos(x / 30) * Math.min(x / 40, 50),
          tall = Math.min(x / 5, maxTall),
          size = Math.min(x / 50, maxSize);

        x += speed;
        ctx.save();

        ctx.strokeWidth = 10;
        ctx.translate(w / 2 + position, h);
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.lineTo(-size, 0);
        ctx.quadraticCurveTo(-size, -tall / 2, deviation, -tall);
        ctx.quadraticCurveTo(size, -tall / 2, size, 0);
        //ctx.closePath();
        ctx.fill();

        ctx.restore();
      };
    };

    for (var x = 0; x < 300; x++) {
      stack.push(anim());
    }

    canvas.width = w;
    canvas.height = h;

    drawer();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default GrassAnimation;
