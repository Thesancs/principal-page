import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToPrice = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('comprar');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
     <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative bg-dark-bg dark:bg-black">
      <div className="absolute inset-0 bg-[url('https://imgur.com/a/4be2QHc')] bg-cover bg-center opacity-5"></div>
       <div className="absolute top-20 right-[20%] w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
         <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          {/* VÍDEO NO TOPO - estilo Reels */}
         <div className="flex justify-center mb-6">
  <div className="w-[270px] aspect-[9/16] relative p-1 rounded-xl bg-gradient-to-r from-amber-400 to-indigo-500">
    <div className="bg-slate-900 rounded-lg p-2 h-full relative">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/qk5w-nLDaUs?rel=0&controls=1&modestbranding=1"
        title="Guia Ouro do Brás"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>



          {/* TÍTULO E TEXTO */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              GUIA: <span className="text-primary">Ouro do Brás</span>
            </span>
          </h1>

         <p className="font-roboto text-lg md:text-xl text-gray-200 mb-6 max-w-md leading-relaxed">
              Pare de comprar caro e cair em golpes. <br />
              Comece a revenda direto dos melhores fornecedores do Brasil, pagando preço de lojista! <br />
              +100 contatos verificados pra você montar seu negócio de revenda e fazer mais de 10 mil de lucro.
            </p>
          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 -mt-2">
              <Button href="#comprar" size="lg" onClick={scrollToPrice}>
                GARANTIR MINHA VAGA
              </Button>
              <Button href="#beneficios" variant="outlined" size="lg">
                Saiba Mais
              </Button>
            </div>
          </div>

         <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className="w-[270px] aspect-[9/16] relative p-1 rounded-xl bg-gradient-to-r from-amber-400 to-indigo-500">
              <div className="bg-slate-900 rounded-lg p-2 h-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/qk5w-nLDaUs?rel=0&controls=1&modestbranding=1"
                  title="Guia Ouro do Brás"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* SETA DE ROLAGEM */}
          <a
            href="#beneficios"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] flex flex-col items-center mt-12 animate-bounce"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;        
