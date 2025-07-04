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

const Features = () => {
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
            className="inline-flex items-center px-4 py-2 bg-primary-400/10 rounded-full text-primary-400 text-sm font-medium mb-6"
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
              <div className="bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-xl p-6 h-full hover:border-primary-600/50 hover:shadow-primary-600/10 hover:shadow-lg transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary-600/25 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-foreground" />
                </motion.div>

                <h3 className={`w-fit text-lg font-semibold text-foreground mb-3 ${index % 2 ? "bg-gradient-to-tl" : "bg-gradient-to-br"} from-primary-400 to-primary-600 bg-clip-text group-hover:text-transparent transition-colors`}>
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
