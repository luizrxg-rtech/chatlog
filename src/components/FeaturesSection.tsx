import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MessageCircle, 
  Brain, 
  Clock, 
  Users, 
  BarChart3, 
  Smartphone,
  Globe,
  Shield
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: MessageCircle,
      title: t("atendimento_natural"),
      description: t("atendimento_natural_desc")
    },
    {
      icon: Brain,
      title: t("automacao_tarefas"),
      description: t("automacao_tarefas_desc")
    },
    {
      icon: Smartphone,
      title: t("integracao_multicanal"),
      description: t("integracao_multicanal_desc")
    },
    {
      icon: Clock,
      title: t("disponibilidade_24_7"),
      description: t("disponibilidade_24_7_desc")
    }
  ];

  const stats = [
    { number: "70%", label: t("reducao_tempo") },
    { number: "50%", label: t("aumento_satisfacao") },
    { number: "60%", label: t("economia_custos") },
    { number: "24/7", label: t("suporte_disponivel") }
  ]

  return (
    <section id="recursos" ref={ref} className="py-20 pt-32 bg-gradient-to-b from-background to-primary-950/10">
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
            className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6"
          >
            <Brain className="w-4 h-4 mr-2" />
            {t("recursos_poderosos")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("tecnologia_de_ponta")}
            </span>
            <br />
            <span className="text-foreground">{t("para_seu_negocio")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("descubra_como")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + (index * 0.1), duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
