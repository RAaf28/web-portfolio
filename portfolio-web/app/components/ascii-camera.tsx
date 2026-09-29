"use client";

import { useEffect, useRef, useState } from "react";

const characters = " .:-=+*#%@";

function frameToAscii(context: CanvasRenderingContext2D, width: number, height: number) {
  const image = context.getImageData(0, 0, width, height).data;
  let output = "";

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 1) {
      const pixel = (y * width + x) * 4;
      const brightness = (image[pixel] * 0.299 + image[pixel + 1] * 0.587 + image[pixel + 2] * 0.114) / 255;
      output += characters[Math.floor(brightness * (characters.length - 1))];
    }
    output += "\n";
  }

  return output;
}

export default function AsciiCamera() {
  const cameraRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);
  const [ascii, setAscii] = useState("Camera feed offline\nPress START CAMERA to begin");
  const [status, setStatus] = useState("Ready");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === cameraRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const stopCamera = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStatus("Ready");
    setAscii("Camera feed offline\nPress START CAMERA to begin");
  };

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("Camera unavailable");
      setAscii("This browser does not expose\ncamera access");
      return;
    }

    try {
      setStatus("Requesting access...");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: "user" },
      });

      streamRef.current = stream;
      if (!videoRef.current || !canvasRef.current) {
        return;
      }

      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      setStatus("Live");

      const context = canvasRef.current.getContext("2d", { willReadFrequently: true });
      if (!context) {
        setStatus("Canvas unavailable");
        return;
      }

      const renderFrame = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas || video.readyState < 2) {
          animationRef.current = requestAnimationFrame(renderFrame);
          return;
        }

        const width = 48;
        const height = Math.max(20, Math.round((width * video.videoHeight) / video.videoWidth / 2));
        canvas.width = width;
        canvas.height = height * 2;
        context.drawImage(video, 0, 0, width, height * 2);
        setAscii(frameToAscii(context, width, height * 2));
        animationRef.current = requestAnimationFrame(renderFrame);
      };

      renderFrame();
    } catch {
      setStatus("Access denied");
      setAscii("Camera permission was not granted\nThe static terminal remains available");
    }
  };

  const toggleFullscreen = async () => {
    if (!cameraRef.current) {
      return;
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (cameraRef.current.requestFullscreen) {
        await cameraRef.current.requestFullscreen();
      } else {
        setStatus("Fullscreen unavailable");
      }
    } catch {
      setStatus("Fullscreen unavailable");
    }
  };

  return (
    <div ref={cameraRef} className="ascii-camera">
      <div className="ascii-screen" aria-live="polite">
        <pre className="ascii-output">{ascii}</pre>
      </div>
      <video ref={videoRef} className="camera-source" muted playsInline />
      <canvas ref={canvasRef} className="camera-source" />
      <div className="ascii-camera-footer">
        <span className="camera-status">STATUS: {status}</span>
        <div className="camera-actions">
          <button type="button" className="camera-button" onClick={startCamera}>
            Start Camera
          </button>
          <button type="button" className="camera-button" onClick={stopCamera}>
            Stop
          </button>
          <button type="button" className="camera-button" onClick={toggleFullscreen}>
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
    </div>
  );
}