import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Features = () => {
  return (
    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Features</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Kavastra connects retailers with manufacturers and wholesalers,
            ensuring top quality and competitive pricing. Enjoy secure payments,
            transparent transactions, and efficient logistics—all through our
            user-friendly platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" // Updated to 4 columns on large screens
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }} // Stagger animations for children
        >
          {/* Feature 1: Connections */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Connections</h2>
            <p className="text-muted-foreground">
              Retailers can connect with manufacturers and wholesalers, cutting
              out the middlemen and ensuring better pricing and quality control.
            </p>
          </motion.div>

          {/* Feature 2: Secure Payments */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Secure Payments</h2>
            <p className="text-muted-foreground">
              Our platform offers secure payment gateways, ensuring that all
              transactions are safe and transparent.
            </p>
          </motion.div>

          {/* Feature 3: Efficient Logistics */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Efficient Logistics</h2>
            <p className="text-muted-foreground">
              We partner with reliable logistics providers to ensure that your
              products are delivered on time, every time.
            </p>
          </motion.div>

          {/* Feature 4: Transparency */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Transparent Transactions
            </h2>
            <p className="text-muted-foreground">
              Every transaction on our platform is clear, with full transparency
              between buyers and sellers to build trust and reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
