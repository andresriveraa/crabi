// src/types/canvas-sketch.d.ts

declare module 'canvas-sketch' {
  interface SketchOptions {
    /**
     * Dimensions of the canvas as [width, height]
     */
    dimensions?: [number, number];

    /**
     * Enable animation
     */
    animate?: boolean;

    /**
     * Frames per second
     */
    fps?: number;

    /**
     * Additional options can be added here as needed
     */
    [key: string]: any;
  }

  interface SketchContext {
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    frame: number;
    time: number;
    deltaTime: number;
    playhead: number;
    // Añade más propiedades si es necesario
  }

  type Sketch = (props: SketchContext) => (props: SketchContext) => void | Promise<void>;

  function canvasSketch(sketch: Sketch, settings?: SketchOptions): Promise<{
    unload: () => void;
  }>;

  export default canvasSketch;
}