import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

const FAQSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const faqs = [
    {
      question: t("faq_implementacao_q"),
      answer: t("faq_implementacao_a")
    },
    {
      question: t("faq_integracao_q"),
      answer: t("faq_integracao_a")
    },
    {
      question: t("faq_perguntas_complexas_q"),
      answer: t("faq_perguntas_complexas_a")
    },
    {
      question: t("faq_nao_sabe_responder_q"),
      answer: t("faq_nao_sabe_responder_a")
    },
    {
      question: t("faq_personalizar_q"),
      answer: t("faq_personalizar_a")
    },
    {
      question: t("faq_cobranca_q"),
      answer: t("faq_cobranca_a")
    },
    {
      question: t("faq_seguranca_q"),
      answer: t("faq_seguranca_a")
    },
    {
      question: t("faq_conhecimento_tecnico_q"),
      answer: t("faq_conhecimento_tecnico_a")
    },
    {
      question: t("faq_aumentar_vendas_q"),
      answer: t("faq_aumentar_vendas_a")
    }
  ];

  return (
    <section id="faq" ref={ref} className="py-20 pt-32 bg-gradient-to-b from-primary-950/10 to-background">
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
            <HelpCircle className="w-4 h-4 mr-2" />
            {t("perguntas_frequentes")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-foreground">{t("tire_suas")}</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {t("duvidas")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("encontre_respostas")}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-card border border-border rounded-xl px-6 hover:border-primary-500/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary-400 transition-colors [&[data-state=open]]:text-primary-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <HelpCircle className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("ainda_duvidas")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("equipe_especialistas")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-700 hover:to-primary-800 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                {t("falar_especialista")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-500 text-primary-400 hover:bg-primary-500/10 px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                {t("agendar_demonstracao")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
