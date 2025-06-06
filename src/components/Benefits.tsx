import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, UserCheck, Clock, DollarSign, Target, Zap, Building, ShoppingCart, Users, Briefcase, Hospital } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Benefits = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: t("aumento_300_vendas"),
      description: t("aumento_300_vendas_desc"),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: UserCheck,
      title: t("satisfacao_cliente"),
      description: t("satisfacao_cliente_desc"),
      color: "from-blue-500 to-primary-600"
    },
    {
      icon: Clock,
      title: t("economia_tempo"),
      description: t("economia_tempo_desc"),
      color: "from-orange-500 to-red-600"
    },
    {
      icon: DollarSign,
      title: t("reducao_60_custos"),
      description: t("reducao_60_custos_desc"),
      color: "from-primary-400 to-teal-600"
    },
    {
      icon: Target,
      title: t("leads_qualificados"),
      description: t("leads_qualificados_desc"),
      color: "from-indigo-500 to-primary-600"
    },
    {
      icon: Zap,
      title: t("implementacao_24h"),
      description: t("implementacao_24h_desc"),
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="beneficios" ref={ref} className="py-20 pt-32 bg-gradient-to-b from-primary-950/10 to-background">
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
            <TrendingUp className="w-4 h-4 mr-2" />
            {t("resultados_comprovados")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">{t("transforme_negocio")}</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("resultados_mensuraveis")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("veja_como_empresas")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:shadow-lg transition-all duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {benefit.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
