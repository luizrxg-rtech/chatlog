import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { useToast } from "@/hooks/use-toast.ts";
import { Button } from "@/components/ui/button";
import { Whatsapp } from "@/components/ui/custom-icons.tsx";

const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try {
      emailjs.init(__EMAIL_API_KEY__);

      await emailjs.send(
        __EMAIL_SERVICE_KEY__,
        __EMAIL_TEMPLATE_KEY__,
        { email: email }
      );

      setLoading(false)
      toast({ title: t('inscricao_sucesso'), duration: 3000})
      setEmail('');

    } catch (error) {
      setLoading(false)
      toast({ title: t('inscricao_erro'), duration: 3000})
      console.error('Failed to send email:', error);
    }
  };

  const footerLinks = {
    [t("produto")]: [
      { label: t("recursos_footer"), href: "#recursos" },
      { label: t("precos"), href: "#precos" },
      { label: t("integracoes"), href: "#integracoes" },
      { label: "API", href: "#api" },
    ],
    [t("empresa")]: [
      { label: t("sobre"), href: "#sobre" },
      { label: t("blog"), href: "#blog" },
      { label: t("carreiras"), href: "#carreiras" },
      { label: t("imprensa"), href: "#imprensa" },
    ],
    [t("suporte")]: [
      { label: t("central_ajuda"), href: "#ajuda" },
      { label: t("documentacao"), href: "#docs" },
      { label: t("status"), href: "#status" },
      { label: t("contato"), href: "#contato" },
    ],
    [t("legal")]: [
      { label: t("privacidade"), href: "#privacidade" },
      { label: t("termos"), href: "#termos" },
      { label: t("lgpd"), href: "#lgpd" },
      { label: t("cookies"), href: "#cookies" },
    ],
  };

  const socialLinks = [
    {
      icon: () => <Whatsapp className="w-5 h-5 fill-primary-400"/>,
      href: 'https://wa.me/' + t('phone_plain'),
      label: "Whatsapp"
    },
    {
      icon: Instagram,
      href: t("instagram_url"),
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: t("linkedin_url"),
      label: "LinkedIn"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-gray-950 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 relative">
                <div className="min-w-10 min-h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center hover:animate-spin">
                </div>
                <img
                    alt="Logo"
                    src="logo-icon.svg"
                    className="size-6 min-w-6 min-h-6 absolute pointer-events-none left-2"
                />
                <img
                    alt="Logo"
                    src="logo-text.svg"
                    className="min-h-6 h-6 mt-2"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t('revolucione_atendimento_footer')}
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{t('email')}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{t('phone')}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{t('location')}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-400/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-foreground font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-xl p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('fique_novidades')}
              </h3>
              <p className="text-muted-foreground">
                {t('receba_dicas')}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-row space-x-3">
              <input
                type="email"
                placeholder={t('seu_email')}
                className="w-full bg-background rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                disabled={loading}
                className="text-md bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-400/80 hover:to-primary-600/80 px-8 py-6"
              >
                {loading && <div className="absolute border-4 border-foreground/50 border-b-foreground animate-spin rounded-full w-5 h-5 mx-auto" />}
                <span className={loading && "text-transparent"}>{t('inscrever')}</span>
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 {t('rtech')}. {t('todos_direitos')}
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t('privacidade')}
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t('termos')}
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t('lgpd')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
