import React, { useRef, useEffect } from "react";
import { GRAPHGS } from "../../data";
import { Edge, Node } from "./class";
import { GraphCanvasProps } from "./canvas.models";
import { generateGraph } from "./utils";


const GraphCanvas = ({
  neighborgs,
  onClickNode,
  actualNode,
} : GraphCanvasProps) => {
  const width = 500,
    height = 600;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const canvasSize = useRef<{ width: number; height: number }>({
    width,
    height,
  });

  const resizeCanvas = (canvas: HTMLCanvasElement): void => {
    canvas.width = width;
    canvas.height = height;
    canvasSize.current = { width, height };

    // Re-generar el grafo con las nuevas dimensiones
    const { nodes, edges } = generateGraph(
      canvas.width,
      canvas.height,
      neighborgs
    );
    nodesRef.current = nodes;
    edgesRef.current = edges;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    resizeCanvas(canvas);

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      edgesRef.current.forEach((edge) => edge.draw(ctx));

      nodesRef.current.forEach((node) => {
        const isSelected = node.label === actualNode;
        node.update(canvas.width, canvas.height, isSelected);
        node.draw(ctx, isSelected);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = (): void => {
      resizeCanvas(canvas);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [GRAPHGS, neighborgs]);

  const handleClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    for (let node of nodesRef.current) {
      if (node.isPointInside(clickX, clickY)) {
        if (node.enabled) {
          node.animateClick();
          if (node.label !== actualNode) {
            onClickNode(node.label);
          }
        } else {
          alert(`Nodo ${node.label} está deshabilitado.`);
        }
        break;
      }
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    nodesRef.current.forEach((node) => {
      node.isHovered = node.isPointInside(mouseX, mouseY);
    });
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", backgroundColor: "#f0f0f0" }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    />
  );
};

export default GraphCanvas;
