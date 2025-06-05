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
  Shield, Building, ShoppingCart, Briefcase, Hospital, TriangleIcon, TriangleRight, TriangleRightIcon
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FeaturesSection = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const targets = [
    { text: t("empresa_otimizar"), icon: Building },
    { text: t("ecommerce_automatizar"), icon: ShoppingCart },
    { text: t("startup_escalar"), icon: Users },
    { text: t("agencias_solucoes"), icon: Briefcase },
    { text:  t("clinicas_volume"), icon: Hospital }
  ]

  return (
    <section id="para-quem" ref={ref} className="py-20 pt-32 bg-gradient-to-b from-background to-primary-950/10">
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
            {t("mercado_abrangente")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">{t("para_quem_chatlog")}</span>{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("app_name")}
            </span>
            {language === "en" &&
                <span className="text-foreground">{t("for")}</span>
            }
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("solucao_completa")}
          </motion.p>
        </motion.div>

        {/* Para Quem é o ChatLog? */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20"
        >
          <div className=" rounded-2xl max-w-6xl mx-auto">
            <motion.ul
                initial={{opacity: 0}}
                animate={inView ? {opacity: 1} : {}}
                transition={{delay: 1.2, duration: 0.8}}
                className="space-y-12"
            >
              {targets.map((item, index) => index % 2 ?
                <motion.li
                  key={index}
                  initial={{opacity: 0, x: 20}}
                  animate={inView ? {opacity: 1, x: 0} : {}}
                  transition={{delay: 1.2 + (index * 0.5), duration: 0.5}}
                  className="flex items-center justify-end"
                >
                  <div className="flex flex-row-reverse">
                    <div className="min-w-12 min-h-12 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-600"/>
                    </div>
                    <TriangleRightIcon className="min-w-6 min-h-6  translate-y-[-1px] rotate-90 translate-x-[-8px] scale-x-[-1] fill-primary-600 stroke-primary-600"/>
                    <div className="transition-all rounded-b-3xl rounded-tl-3xl bg-primary-600 px-8 py-4 max-w-4xl relative">
                      <p className="font-bold text-xl md:text-2xl text-gray-300">{item.text}</p>
                    </div>
                  </div>
                </motion.li> :
                <motion.li
                    key={index}
                    initial={{opacity: 0, x: -20}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{delay: 1.2 + (index * 0.5), duration: 0.5}}
                    className="flex items-center justify-start"
                >
                  <div className="flex">
                    <div className="min-w-12 min-h-12 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-500"/>
                    </div>
                    <TriangleRightIcon className="min-w-6 min-h-6 translate-y-[-1px] rotate-90 fill-primary-500 stroke-primary-500 translate-x-2 scale-[-1]"/>
                    <div className="transition-all rounded-b-3xl rounded-tr-3xl bg-primary-500 px-8 py-4 max-w-4xl relative">
                      <p className="font-bold text-xl md:text-2xl text-gray-800">{item.text}</p>
                    </div>
                  </div>
                </motion.li>
              )}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
