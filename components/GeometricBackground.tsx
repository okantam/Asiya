interface Shape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'semicircle';
  size: number;
  left: number;
  top: number;
  color: string;
  rotation: number;
  animation: string;
  delay: number;
}

const GeometricBackground = () => {
  // Generate random shapes based on the mockup pattern
  const shapes: Shape[] = [
    // Top row shapes
    { id: 1, type: 'circle', size: 60, left: 8, top: 5, color: 'shapes-yellow', rotation: 0, animation: 'animate-float', delay: 0 },
    { id: 2, type: 'triangle', size: 80, left: 18, top: 8, color: 'shapes-yellow', rotation: 0, animation: 'animate-bounce', delay: 1 },
    { id: 3, type: 'square', size: 50, left: 35, top: 3, color: 'shapes-lavender', rotation: 15, animation: 'animate-float', delay: 2 },
    { id: 4, type: 'circle', size: 90, left: 50, top: 6, color: 'shapes-peach', rotation: 0, animation: 'animate-bounce', delay: 0.5 },
    { id: 5, type: 'square', size: 45, left: 70, top: 4, color: 'shapes-mint', rotation: 45, animation: 'animate-float', delay: 3 },
    { id: 6, type: 'triangle', size: 70, left: 85, top: 7, color: 'shapes-lavender', rotation: 180, animation: 'animate-bounce', delay: 1.5 },

    // Second row
    { id: 7, type: 'square', size: 55, left: 12, top: 18, color: 'shapes-mint', rotation: 0, animation: 'animate-float', delay: 2.5 },
    { id: 8, type: 'triangle', size: 65, left: 25, top: 22, color: 'shapes-orange', rotation: 45, animation: 'animate-bounce', delay: 0.8 },
    { id: 9, type: 'semicircle', size: 75, left: 40, top: 19, color: 'shapes-sky', rotation: 0, animation: 'animate-float', delay: 1.2 },
    { id: 10, type: 'triangle', size: 85, left: 75, top: 21, color: 'shapes-lavender', rotation: 0, animation: 'animate-bounce', delay: 2.8 },
    { id: 11, type: 'circle', size: 70, left: 88, top: 25, color: 'shapes-yellow', rotation: 0, animation: 'animate-float', delay: 0.3 },
    { id: 12, type: 'circle', size: 55, left: 95, top: 30, color: 'shapes-peach', rotation: 0, animation: 'animate-bounce', delay: 3.2 },

    // Third row (around hero)
    { id: 13, type: 'circle', size: 45, left: 5, top: 35, color: 'shapes-lavender', rotation: 0, animation: 'animate-float', delay: 1.8 },
    { id: 14, type: 'square', size: 40, left: 22, top: 38, color: 'shapes-yellow', rotation: 45, animation: 'animate-bounce', delay: 0.6 },
    { id: 15, type: 'triangle', size: 60, left: 28, top: 42, color: 'shapes-lavender', rotation: 0, animation: 'animate-float', delay: 2.2 },
    { id: 16, type: 'circle', size: 50, left: 45, top: 44, color: 'shapes-yellow', rotation: 0, animation: 'animate-bounce', delay: 1.6 },
    { id: 17, type: 'semicircle', size: 65, left: 78, top: 40, color: 'shapes-lavender', rotation: 90, animation: 'animate-float', delay: 2.6 },
    { id: 18, type: 'square', size: 48, left: 85, top: 45, color: 'shapes-peach', rotation: 15, animation: 'animate-bounce', delay: 0.9 },

    // Fourth row
    { id: 19, type: 'triangle', size: 55, left: 32, top: 55, color: 'shapes-sky', rotation: 90, animation: 'animate-float', delay: 1.4 },
    { id: 20, type: 'circle', size: 35, left: 65, top: 58, color: 'shapes-mint', rotation: 0, animation: 'animate-bounce', delay: 2.4 },
    { id: 21, type: 'triangle', size: 70, left: 75, top: 52, color: 'shapes-orange', rotation: 45, animation: 'animate-float', delay: 0.7 },

    // Bottom scattered shapes
    { id: 22, type: 'circle', size: 80, left: 6, top: 75, color: 'shapes-yellow', rotation: 0, animation: 'animate-bounce', delay: 1.1 },
    { id: 23, type: 'circle', size: 65, left: 18, top: 78, color: 'shapes-lavender', rotation: 0, animation: 'animate-float', delay: 2.9 },
    { id: 24, type: 'triangle', size: 60, left: 32, top: 82, color: 'shapes-mint', rotation: 180, animation: 'animate-bounce', delay: 0.4 },
    { id: 25, type: 'circle', size: 90, left: 45, top: 77, color: 'shapes-yellow', rotation: 0, animation: 'animate-float', delay: 3.1 },
    { id: 26, type: 'semicircle', size: 55, left: 62, top: 83, color: 'shapes-lavender', rotation: 180, animation: 'animate-bounce', delay: 1.7 },
    { id: 27, type: 'square', size: 70, left: 78, top: 79, color: 'shapes-yellow', rotation: 45, animation: 'animate-float', delay: 0.2 },
    { id: 28, type: 'circle', size: 60, left: 90, top: 85, color: 'shapes-peach', rotation: 0, animation: 'animate-bounce', delay: 2.7 },

    // Additional scattered shapes
    { id: 29, type: 'square', size: 40, left: 15, top: 95, color: 'shapes-mint', rotation: 0, animation: 'animate-float', delay: 1.9 },
    { id: 30, type: 'circle', size: 55, left: 28, top: 92, color: 'shapes-orange', rotation: 0, animation: 'animate-bounce', delay: 0.1 },
    { id: 31, type: 'triangle', size: 65, left: 42, top: 95, color: 'shapes-mint', rotation: 45, animation: 'animate-float', delay: 2.3 },
    { id: 32, type: 'square', size: 50, left: 58, top: 93, color: 'shapes-lavender', rotation: 30, animation: 'animate-bounce', delay: 1.3 },
    { id: 33, type: 'triangle', size: 75, left: 72, top: 96, color: 'shapes-orange', rotation: 0, animation: 'animate-float', delay: 2.1 },
    { id: 34, type: 'circle', size: 70, left: 85, top: 92, color: 'shapes-mint', rotation: 0, animation: 'animate-bounce', delay: 0.5 }
  ];

  const renderShape = (shape: Shape) => {
    const baseClasses = `absolute ${shape.animation} opacity-80`;
    const style = {
      left: `${shape.left}%`,
      top: `${shape.top}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      transform: `rotate(${shape.rotation}deg)`,
      animationDelay: `${shape.delay}s`,
    };

    // Color mapping for shapes
    const colorMap: Record<string, string> = {
      'shapes-yellow': 'hsl(50 100% 70%)',
      'shapes-orange': 'hsl(25 100% 70%)', 
      'shapes-mint': 'hsl(160 50% 70%)',
      'shapes-lavender': 'hsl(260 60% 75%)',
      'shapes-sky': 'hsl(200 70% 70%)',
      'shapes-peach': 'hsl(15 80% 75%)',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-full`}
            style={{ ...style, backgroundColor: colorMap[shape.color] }}
          />
        );
      
      case 'square':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-lg`}
            style={{ ...style, backgroundColor: colorMap[shape.color] }}
          />
        );
      
      case 'triangle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses}`}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${colorMap[shape.color]}`,
            }}
          />
        );
      
      case 'semicircle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses}`}
            style={{
              ...style,
              backgroundColor: colorMap[shape.color],
              borderRadius: `${shape.size}px ${shape.size}px 0 0`,
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map(renderShape)}
    </div>
  );
};

export default GeometricBackground;