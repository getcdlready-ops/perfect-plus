import { useRef, useEffect, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";
import { Button } from "../src/components/ui/button";
import { Card } from "../src/components/ui/card";

export const SignatureCanvas = ({ onSignatureChange }) => {
  const canvasRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 200,
      backgroundColor: "#ffffff",
      isDrawingMode: true,
    });

    canvas.freeDrawingBrush.color = "#000000";
    canvas.freeDrawingBrush.width = 2;

    setFabricCanvas(canvas);

    canvas.on("path:created", () => {
      const dataURL = canvas.toDataURL({
        multiplier: 1,
        format: "png",
        quality: 1,
      });
      onSignatureChange(dataURL);
    });

    return () => {
      canvas.dispose();
    };
  }, [onSignatureChange]);

  const clearSignature = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";
    fabricCanvas.renderAll();
    onSignatureChange("");
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Digital Signature</h3>
          <Button type="button" variant="outline" onClick={clearSignature}>
            Clear Signature
          </Button>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 bg-gray-50">
          <canvas
            ref={canvasRef}
            className="border border-gray-200 rounded bg-white"
          />
        </div>
        <p className="text-sm text-gray-600">
          Please sign above using your mouse or touch device
        </p>
      </div>
    </Card>
  );
};
