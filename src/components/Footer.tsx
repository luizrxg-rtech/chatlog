import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
    { icon: Instagram, href: t("instagram_url"), label: "Instagram" },
    { icon: Linkedin, href: t("linkedin_url"), label: "LinkedIn" },
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
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">{t("app_name")}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t("revolucione_atendimento_footer")}
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">contato@rtechsolution.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">+55 (34) 99681-7814</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">Uberlândia, MG - Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    target="_blank"
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
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
          className="bg-gradient-to-r from-primary-600/10 to-primary-500/10 border border-primary-500/20 rounded-xl p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("fique_novidades")}
              </h3>
              <p className="text-muted-foreground">
                {t("receba_dicas")}
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder={t("seu_email")}
                className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-500/60 hover:to-primary-600/60 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                {t("inscrever")}
              </motion.button>
            </div>
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
              © {currentYear} {t("rtech")}. {t("todos_direitos")}
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t("privacidade")}
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t("termos")}
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {t("lgpd")}
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
