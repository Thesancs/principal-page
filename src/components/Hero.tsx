import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import Timer from './Timer';

const Hero: React.FC = () => {
  const scrollToPrice = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('comprar');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full pt-8 md:pt-24 pb-16 md:pt-32 md:pb-24 bg-dark-bg dark:bg-black overflow-hidden">
      {/* Faixa de urgência */}
      <div className="absolute top-0 left-0 w-full bg-primary flex justify-center py-1">
        <Timer initialSeconds={600} />
      </div>

      
      {/* Substituímos a bolha azul por vermelha e posicionamos atrás do vídeo */}

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto mt-6">

          {/* Vídeo com borda neon-red e blob vermelho atrás */}
          <div className="md:w-2/2 flex flex-col items-center md:items-end mb-6 md:mb-0 relative">
            {/* Blob vermelho atrás do vídeo */}
            <div className="absolute -inset-4 w-[450px] h-[400px] rounded-full bg-primary/20 blur-3xl"></div>

            <div className="relative w-[270px] aspect-[9/16] rounded-xl border-4 border-primary overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qk5w-nLDaUs?rel=0&controls=1&modestbranding=1"
                title="Guia Ouro do Brás"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Botão abaixo do vídeo */}
            <div className="mt-6 flex justify-center md:justify-end">
              <Button
                href="#comprar"
                size="lg"
                onClick={scrollToPrice}
                className="bg-primary hover:bg-primary-dark text-white font-extrabold uppercase tracking-widest rounded-md px-8 py-3 shadow-lg shadow-primary/50"
              >
                GARANTIR MINHA VAGA
              </Button>
            </div>
          </div>

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              GUIA: <span className="text-primary">OURO DO BRÁS</span>
            </h1>
            <p className="font-roboto text-lg md:text-xl text-gray-200 mb-6 max-w-md leading-relaxed">
              Pare de comprar caro e cair em golpes. <br />
              Comece a revenda direto dos melhores fornecedores do Brasil, pagando preço de lojista! <br />
              +100 contatos verificados pra você montar seu negócio de revenda e fazer mais de 10 mil de lucro.
            </p>
          </div>
        </div>
      </div>

      {/* Seta de rolagem */}
      <a
        href="#beneficios"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary flex flex-col items-center mt-12 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
