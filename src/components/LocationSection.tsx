import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MapPin className="w-10 h-10 text-primary dark:text-primary-light mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">המיקום שלנו</h2>
          <p className="text-foreground/70 dark:text-foreground/60 text-lg">בואו לבקר אותנו</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-xl text-center"
          >
            <MapPin className="w-8 h-8 text-primary dark:text-primary-light mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">כתובת</h3>
            <p className="text-foreground/70 dark:text-foreground/60">רחוב הרצל 1, תל אביב</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-xl text-center"
          >
            <Clock className="w-8 h-8 text-primary dark:text-primary-light mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">שעות פתיחה</h3>
            <div className="space-y-2 text-foreground/70 dark:text-foreground/60">
              <p>ראשון - חמישי: 08:00 - 22:00</p>
              <p>שישי: 08:00 - 15:00</p>
              <p>שבת: סגור</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-xl text-center"
          >
            <Phone className="w-8 h-8 text-primary dark:text-primary-light mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">צור קשר</h3>
            <p className="text-foreground/70 dark:text-foreground/60">טלפון: 03-1234567</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 h-[400px] max-w-4xl mx-auto rounded-xl overflow-hidden glass-morphism"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.6897129667604!2d34.7818!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuNiJF!5e0!3m2!1sen!2sil!4v1635789245611!5m2!1sen!2sil"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;