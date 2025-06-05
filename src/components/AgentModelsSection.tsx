import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MessageCircle, 
  ShoppingCart, 
  Calendar, 
  Wrench
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const AgentModelsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const agentModels = [
    {
      icon: MessageCircle,
      title: t("atendimento_cliente"),
      description: t("atendimento_cliente_desc")
    },
    {
      icon: ShoppingCart,
      title: t("vendas"),
      description: t("vendas_desc")
    },
    {
      icon: Calendar,
      title: t("agendamento"),
      description: t("agendamento_desc")
    },
    {
      icon: Wrench,
      title: t("suporte_tecnico"),
      description: t("suporte_tecnico_desc")
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-primary-950/10 to-background">
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
            <MessageCircle className="w-4 h-4 mr-2" />
            {t("solucoes_prontas")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">{t("modelos_de")}</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("agentes_prontos")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("comece_rapidamente")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group"
            >
              <div className="bg-card backdrop-blur-xl bg-gradient-to-br from-primary-600/10 to-primary-500/10 rounded-xl p-6 h-full hover:border-primary-500/50 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <model.icon className="w-6 h-6 text-foreground " />
                </motion.div>

                <h3 className="w-fit text-lg font-semibold text-foreground mb-3 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text group-hover:text-transparent transition-colors">
                  {model.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentModelsSection;
