import React from 'react';
import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "Rio de Janeiro, RJ",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      text: "Comecei meu negócio de revenda com apenas R$2.000 e o Guia Ouro do Brás foi essencial. Em 3 meses, já estava faturando R$5.000 por mês com as lojas que encontrei graças ao guia.",
      stars: 5
    },
    // ... demais depoimentos
  ];

  return (
    <section
      id="depoimentos"
      className="relative bg-dark-bg dark:bg-black px-4 py-12 overflow-hidden"
    >
      {/* Gradiente superior mais leve */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-900 to-transparent" />
      {/* Imagem de fundo com opacidade menor */}
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg')] bg-cover bg-center opacity-3"
      />

      <div
        ref={ref}
        className={`
          mx-auto max-w-lg
          relative transition-all duration-700
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        {/* Cabeçalho */}
        <div className="text-center mx-auto mb-8">
          <div className="inline-block p-2 rounded-full bg-indigo-500/10 text-indigo-400 mb-3">
            <Quote size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            DEPOIMENTOS REAIS
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Veja como o Guia Ouro do Brás ajudou empreendedores a iniciarem seus negócios de roupas e alcançarem resultados surpreendentes.
          </p>
        </div>

        {/* Cards em uma coluna no mobile, duas colunas no md+ */}
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
