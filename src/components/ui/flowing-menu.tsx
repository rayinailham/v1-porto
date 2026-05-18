'use client';

import React from 'react';
import Image from "next/image";
import { gsap } from 'gsap';

interface TechStack {
  name: string;
  icon: string;
}

interface MenuItemProps {
  id: string;
  name: string;
  techStack: TechStack[];
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
  onProjectSelect?: (projectId: string) => void;
  onProjectHover?: (projectId: string) => void;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [], onProjectSelect, onProjectHover }) => {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            onClick={() => onProjectSelect?.(item.id)}
            onHover={() => onProjectHover?.(item.id)}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ name, techStack, link, onClick, onHover }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
    
    // Trigger hover callback
    onHover?.();
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults }) as gsap.core.Timeline;
    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
  };

  // Function to generate varied icon sizes
  const getIconSize = (index: number) => {
    const sizes = [
      { width: 16, height: 16, className: 'w-4 h-4' },
      { width: 20, height: 20, className: 'w-5 h-5' },
      { width: 24, height: 24, className: 'w-6 h-6' },
      { width: 28, height: 28, className: 'w-7 h-7' },
      { width: 32, height: 32, className: 'w-8 h-8' }
    ];
    
    // Use index to create a varied pattern
    const sizeIndex = (index * 3) % sizes.length;
    return sizes[sizeIndex];
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <div className="flex items-center gap-4 min-w-fit px-4">
          {/* Left Tech Stack */}
          <div className="flex items-center gap-2">
            {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, techIdx) => {
              const iconSize = getIconSize(techIdx);
              return (
                <div key={techIdx} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0 min-w-fit">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className={iconSize.className}
                    width={iconSize.width}
                    height={iconSize.height}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textSpan = document.createElement('span');
                        textSpan.textContent = tech.name;
                        textSpan.className = 'text-xs text-gray-700';
                        parent.appendChild(textSpan);
                      }
                    }}
                  />
                  <span className="tech-label text-gray-700 whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
          
          {/* Project Name */}
          <span className="font-space-grotesk text-gray-900 uppercase font-weight-heading text-[3vh] leading-[1.2] mx-6">{name}</span>
          
          {/* Right Tech Stack */}
          <div className="flex items-center gap-2">
            {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, techIdx) => {
              const iconSize = getIconSize(techIdx + Math.ceil(techStack.length / 2));
              return (
                <div key={techIdx} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0 min-w-fit">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className={iconSize.className}
                    width={iconSize.width}
                    height={iconSize.height}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textSpan = document.createElement('span');
                        textSpan.textContent = tech.name;
                        textSpan.className = 'text-xs text-gray-700';
                        parent.appendChild(textSpan);
                      }
                    }}
                  />
                  <span className="tech-label text-gray-700 whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    ));
  }, [name, techStack]);

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#e5e7eb]" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-space-grotesk font-weight-heading text-gray-900 text-[3.5vh] hover:text-blue-600 focus:text-blue-600 focus-visible:text-blue-600 transition-colors"
        href={link || '#'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {name}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-gray-50 translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[1000%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;