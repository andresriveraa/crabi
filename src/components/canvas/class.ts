import { CanvasContext } from "./canvas.models";

export class Node {
  label: string;
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  enabled: boolean;
  isHovered: boolean;
  isAnimating: boolean;
  scaleDirection: number; // 1 para escalar, -1 para volver
  animationProgress: number;
  maxScale: number;
  color: string;
  baseColor: string;

  constructor(
    label: string,
    x: number,
    y: number,
    radius: number,
    enabled: boolean
  ) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.baseRadius = radius;
    this.radius = radius;
    this.enabled = enabled;
    this.isHovered = false;
    this.isAnimating = false;
    this.scaleDirection = 1;
    this.animationProgress = 0;
    this.maxScale = 1.5;
    this.color = this.enabled ? "#2196f3" : "#9e9e9e";
    this.baseColor = this.color;
  }

  draw(ctx: CanvasContext, isSelected: boolean): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    if (isSelected) {
      ctx.lineWidth = 4;
      ctx.fillStyle = "#ff5722"; // Color dorado para resaltar
    } else {
      ctx.lineWidth = 2;
    }
    ctx.stroke();
    ctx.closePath();
    // Dibujar la etiqueta del nodo
    ctx.fillStyle = isSelected ? "#ff5722" : "#ffffff";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.label, this.x, this.y);
  }

  update(canvasWidth: number, canvasHeight: number, isSelected: boolean): void {
    // Aquí podrías añadir lógica de movimiento si lo deseas
    // Por ahora, los nodos están estáticos

    // Manejar la animación de escalado y cambio de color
    if (this.isAnimating) {
      this.animationProgress += 0.05 * this.scaleDirection;
      this.radius =
        this.baseRadius *
        (1 + 0.5 * Math.sin(this.animationProgress * Math.PI));

      // Cambiar color durante la animación
      this.color = this.enabled
        ? this.isHovered
          ? "#ff5722"
          : "#2196f3"
        : "#9e9e9e";

      if (this.animationProgress >= Math.PI) {
        this.scaleDirection = -1;
      }
      if (this.animationProgress <= 0) {
        this.isAnimating = false;
        this.radius = this.baseRadius;
        this.color = this.enabled
          ? this.isHovered
            ? "#ff5722"
            : "#2196f3"
          : "#9e9e9e";
        this.animationProgress = 0;
        this.scaleDirection = 1;
      }
    } else {
      // Actualizar el color según el hover
      this.color = this.enabled
        ? this.isHovered
          ? "#ff5722"
          : "#2196f3"
        : "#9e9e9e";
    }
  }

  isPointInside(x: number, y: number): boolean {
    const dx = this.x - x;
    const dy = this.y - y;
    return Math.sqrt(dx * dx + dy * dy) < this.radius;
  }

  animateClick(): void {
    if (this.enabled && !this.isAnimating) {
      this.isAnimating = true;
    }
  }
}

// Clase para manejar las relaciones entre nodos
export class Edge {
  from: Node;
  to: Node;
  cost: number;

  constructor(from: Node, to: Node, cost: number) {
    this.from = from;
    this.to = to;
    this.cost = cost;
  }

  draw(ctx: CanvasContext): void {
    ctx.beginPath();
    ctx.moveTo(this.from.x, this.from.y);
    ctx.lineTo(this.to.x, this.to.y);
    ctx.strokeStyle = "#b0bec5";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

    // Dibujar el costo en el centro de la arista
    const midX = (this.from.x + this.to.x) / 2;
    const midY = (this.from.y + this.to.y) / 2;
    ctx.fillStyle = "#000000";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.cost.toString(), midX, midY);
  }
}