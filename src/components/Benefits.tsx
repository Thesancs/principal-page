
import React from 'react'
import {
  Instagram,
  MessageCircle,
  MapPin,
  DollarSign,
  ListChecks,
  ShieldCheck,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'

// Ajuste o tipo para ReactElement, assim você pode clonar o ícone e controlar o tamanho via className
interface BenefitCardProps {
  icon: React.ReactElement
  title: string
  description: string
  delay: number
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`
        bg-black               /* fundo preto */
        border-2 border-primary /* borda neon-red */
        rounded-xl p-6
        min-w-[16rem]           /* largura mínima para o carrossel */
        flex-shrink-0           /* não encolhe */
        snap-start              /* scroll-snap */
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {/* Ícone neon-red */}
      <div className="rounded-full p-3 mb-4 text-primary">
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">
        {title}
      </h3>
      <p className="text-sm text-white">
        {description}
      </p>
    </div>
  )
}

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const benefits = [
    {
      id: 'b1',
      icon: <Instagram />,
      title: 'Instagram Verificado',
      description:
        'Instagram de fornecedores para você verificar produtos atualizados.',
    },
    {
      id: 'b2',
      icon: <MessageCircle />,
      title: 'WhatsApp Direto',
      description:
        'Contato direto via WhatsApp para negociações rápidas e envio de catálogos.',
    },
    {
      id: 'b3',
      icon: <MapPin />,
      title: 'Endereço Completo',
      description:
        'Endereço físico completo para visitas presenciais e compras no local.',
    },
    {
      id: 'b4',
      icon: <DollarSign />,
      title: 'Preços Acessíveis',
      description:
        'Acesso a produtos de qualidade com preços de atacado que garantem sua margem de mais de 5×.',
    },
    {
      id: 'b5',
      icon: <ListChecks />,
      title: '100+ Fornecedores',
      description: 'Mais de 100 dos melhores fornecedores do mercado.',
    },
    {
      id: 'b6',
      icon: <ShieldCheck />,
      title: 'Fornecedores Confiáveis',
      description:
        '100% verificados e confiáveis, reduzindo riscos na sua operação.',
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-black">
      {/* Título e subtítulo */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">
          BENEFÍCIOS DO GUIA
        </h2>
        <p className="text-sm text-gray-300">
          Economize tempo, dinheiro e estresse com nosso guia completo de
          fornecedores confiáveis que já foram testados e aprovados.
        </p>
      </div>

      {/* Container do carrossel */}
      <div
        ref={ref}
        className={`
          flex space-x-4 overflow-x-auto px-4 snap-x snap-mandatory
          transition-opacity duration-700
          ${inView ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {benefits.map((b, idx) => (
          <BenefitCard
            key={b.id}
            icon={b.icon}
            title={b.title}
            description={b.description}
            delay={idx + 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Benefits