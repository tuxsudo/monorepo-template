interface thing {
  x: number;
  y: number;
  z: number;
}

export const divide = ({ x, y, z }: thing): number => x * y * z;
