import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {ArrowRight, MessageCircle, Zap, Shield, Brain} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true, 
  });

  const stats = [
    { number: "70%", label: t("reducao_tempo") },
    { number: "50%", label: t("aumento_satisfacao") },
    { number: "60%", label: t("economia_custos") },
    { number: "24/7", label: t("suporte_disponivel") }
  ]

  const messages =[
    {
      sender: "bot",
      message: t("chat_ola"),
    },
    {
      sender: "user",
      message: t("chat_preciso"),
    },
    {
      sender: "bot",
      message: t("chat_claro"),
    }
  ]

  return (
    <section
      id="inicio"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary-950/20 pt-20"
    >
      <div className="container mx-auto px-4 pb-20 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium"
            >
              <Zap className="w-4 h-4 mr-2" />
              {t("revolucione_atendimento")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">
                {t("automatize_conversas")}
              </span>
              {" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                {t("chatbot_inteligente")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed w-full"
            >
              {t("otimize_comunicacao")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#precos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:bg-white text-white px-8 py-4 text-lg group"
                >
                  {t("teste_gratis")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#precos">
                <Button
                  size="lg"
                  variant="ghost"
                  className="border-primary-500 text-primary-400 hover:bg-primary-500/10 px-8 py-4 text-lg"
                >
                    {t("saiba_mais")}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - ChatBot Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-background rounded-2xl p-6 h-96 overflow-hidden space-y-6">
                  <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chatlog</h3>
                      <p className="text-xs text-green-500">• Online</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-4">
                    {messages.map((msg, index) =>
                      msg.sender === "bot" ?
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 max-w-sm"
                        >
                          <p className="text-sm">{msg.message}</p>
                        </motion.div> :
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className="bg-muted rounded-lg p-3 max-w-xs ml-auto"
                        >
                          <p className="text-sm">{msg.message}</p>
                        </motion.div>
                    )}
                  </div>
                  <div className="flex items-center justify-between space-x-3">
                    <input
                        placeholder={t("")}
                        className="flex-1 bg-background rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
                
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
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

export default HeroSection;
