import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/types.ts";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, languages, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t("inicio"), href: "#inicio" },
    { label: t("recursos"), href: "#recursos" },
    { label: t("beneficios"), href: "#beneficios" },
    { label: t("precos"), href: "#precos" },
    { label: t("faq"), href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto lg:max-w-[1390px] lg:fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'lg:bg-background/10 lg:backdrop-blur-xl lg:rounded-2xl lg:shadow-lg lg:shadow-black/20' 
          : ''
      }`}
    >
      <div className="w-full mx-auto p-7 lg:p-3 ">
        <div className="flex items-center justify-between space-x-8">
          {/* Logo */}
          <div className="flex items-center gap-3 relative">
            <div className="min-w-12 min-h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center hover:animate-spin">
            </div>
            <img
              alt="Logo"
              src="logo-icon.svg"
              className="size-8 min-w-8 min-h-8 absolute pointer-events-none left-2"
            />
            <img
              alt="Logo"
              src="logo-text.svg"
              className="min-h-8 h-8 mt-2"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Language Selector */}
            <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
              <SelectTrigger className="w-[120px] bg-transparent border-border/50">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lng) => {
                  return <SelectItem value={lng}>{lng.toUpperCase()}</SelectItem>
                })}
              </SelectContent>
            </Select>

            <a href="#precos">
              <Button className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-400/80 hover:to-primary-600/80">
                {t("comecar_agora")}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="mt-4">
              <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                <SelectTrigger className="w-full bg-transparent border-border/50">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lng) => {
                    return <SelectItem value={lng}>{lng.toUpperCase()}</SelectItem>
                  })}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full mt-4 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-400/80 hover:to-primary-600/80">
              {t("comecar_agora")}
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;