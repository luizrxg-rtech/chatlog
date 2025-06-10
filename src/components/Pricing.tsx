import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Pricing = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const plans = [
    {
      name: t("starter"),
      price: "897",
      implementation: '1.000',
      icon: Rocket,
      popular: false,
      features: [
        '5 ' + t('atendentes'),
        t('chatbot_ilimitado'),
        t('atendimento_setor'),
        t('atendentes_simultaneos'),
        t('robo_24'),
        t('visualizacao_tempo_real'),
      ]
    },
    {
      name: t("business"),
      price: "1.697",
      implementation: '1.000',
      icon: Star,
      popular: false,
      features: [
        '10 ' + t('atendentes'),
        t('chatbot_ilimitado'),
        t('atendimento_setor'),
        t('atendentes_simultaneos'),
        t('robo_24'),
        t('visualizacao_tempo_real'),
      ]
    },
    {
      name: t("empresarial"),
      price: "2.397",
      implementation: '1.000',
      icon: Crown,
      popular: true,
      features: [
        '15 ' + t('atendentes'),
        'Tudo do plano ' + t('business'),
        t('atendimento_humanizado'),
        t('suporte_prioritario'),
        t('gestor_conta'),
        t('integracao_crm'),
        t('treinamento_apoio'),
      ]
    },
    {
      name: t("enterprise"),
      price: "2.397",
      implementation: '1.000',
      icon: Crown,
      popular: false,
      features: [
        '100 ' + t('atendentes'),
        'Tudo do plano ' + t('empresarial'),
        t('suporte_prioritario_24'),
        t('consultoria_estrategica'),
      ]
    }
  ];

  return (
    <section id="precos" ref={ref} className="py-20 pt-32 bg-gradient-to-b from-background to-primary-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary-400/10 rounded-full text-primary-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            {t("planos_flexiveis")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">{t("escolha_plano")}</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("ideal_para_negocio")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("sem_contratos")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`relative group ${plan.popular ? 'md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-400 to-primary-600 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {t("mais_popular")}
                </div>
              )}

              <div className={`bg-card border ${plan.popular ? 'border-primary-400 shadow-lg shadow-primary-400/20' : 'border-border'} rounded-2xl p-8 h-full hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  >
                    <plan.icon className="w-8 h-8 text-primary-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                  <div className="mb-4 flex flex-col items-center gap-2">
                    <div>
                      <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                      <span className="text-muted-foreground">{t("por_mes")}</span>
                    </div>
                    <span className="text-muted-foreground">+ R$ {plan.implementation} {t("implementacao")} </span>
                  </div>


                  <Button 
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-400/80 hover:to-primary-600/80 text-foreground'
                        : 'bg-gray-800 hover:bg-gray-700 text-foreground border border-gray-600'
                    }`}
                  >
                    {plan.popular ? t("comecar_agora") : t("escolher_plano")}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + (featureIndex * 0.1), duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
