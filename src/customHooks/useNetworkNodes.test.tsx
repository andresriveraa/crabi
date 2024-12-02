// useNetworkNodes.test.tsx
import { renderHook, act } from '@testing-library/react';
import useNetworkNodes from './useNetworkNodes';
import { GRAPHGS } from '../data';

describe('useNetworkNodes Hook', () => {
  it('debe inicializar con valores predeterminados correctos', () => {
    const { result } = renderHook(() => useNetworkNodes());
    expect(result.current.node).toEqual(GRAPHGS.nodes);
    expect(result.current.actualNode).toBeUndefined();
    expect(result.current.route).toEqual([]);
    expect(result.current.totalCost).toBe(0);
    expect(result.current.neighborgs).toEqual([]); // Ajustado
  });

  it('debe actualizar actualNode y route al llamar a onClickNode', () => {
    const { result } = renderHook(() => useNetworkNodes());

    act(() => {
      result.current.onClickNode('A'); // Usa un nodo válido
    });

    expect(result.current.actualNode).toBe('A');
    expect(result.current.route).toEqual(['A']);
  });

  it('debe establecer nuevos vecinos al actualizar actualNode', () => {
    const { result } = renderHook(() => useNetworkNodes());

    act(() => {
      result.current.onClickNode('A'); // Usa un nodo con vecinos
    });

    expect(result.current.neighborgs).toBeDefined();
    expect(result.current.neighborgs?.length).toBeGreaterThan(0);
  });

  it('debe calcular correctamente totalCost al actualizar actualNode', () => {
    const { result } = renderHook(() => useNetworkNodes());

    act(() => {
      result.current.onClickNode('A');
    });

    const initialTotalCost = result.current.totalCost;

    act(() => {
      result.current.onClickNode('B'); // Nodo conectado a 'A' con un costo definido
    });

    expect(result.current.totalCost).toBeGreaterThan(initialTotalCost);
  });

  it('debe manejar correctamente el costo de aristas no utilizadas', () => {
    const { result } = renderHook(() => useNetworkNodes());

    act(() => {
      result.current.onClickNode('A');
    });

    act(() => {
      result.current.onClickNode('B');
    });

    // Calcula el costo esperado basado en GRAPHGS
    const expectedTotalCost = 13;
    expect(result.current.totalCost).toBe(expectedTotalCost);
  });
});