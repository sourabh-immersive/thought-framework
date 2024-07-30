import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
  texts: string[];
  period?: number;
  beforeText?: string;
}

const TypedSection: React.FC<TypewriterProps> = ({ texts, period = 2000, beforeText = '' }) => {
  const typewriteRef = useRef<HTMLSpanElement | null>(null);
  const txtTypeRef = useRef<any | null>(null);

  useEffect(() => {
    class TxtType {
      toRotate: string[];
      el: HTMLElement;
      loopNum: number;
      period: number;
      txt: string;
      isDeleting: boolean;
      timeout: any;

      constructor(el: HTMLElement, toRotate: string[], period: number) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = period;
        this.txt = '';
        this.isDeleting = false;
        this.tick = this.tick.bind(this);
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        this.timeout = setTimeout(this.tick, delta);
      }

      stop() {
        clearTimeout(this.timeout);
      }
    }

    if (typewriteRef.current) {
      // Cleanup any previous instance
      if (txtTypeRef.current) {
        txtTypeRef.current.stop();
      }
      txtTypeRef.current = new TxtType(typewriteRef.current, texts, period);
    }

    // Inject CSS only once
    if (!document.getElementById('typewriter-style')) {
      const css = document.createElement('style');
      css.id = 'typewriter-style';
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #8CD437}';
      document.body.appendChild(css);
    }

    // Cleanup function
    return () => {
      if (txtTypeRef.current) {
        txtTypeRef.current.stop();
      }
    };
  }, [texts, period]);

  return (
    <h2 className="typewrite">
      {beforeText}
      <span ref={typewriteRef}></span>
    </h2>
  );
};

export default TypedSection;