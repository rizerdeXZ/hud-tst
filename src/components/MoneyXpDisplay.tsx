import { motion } from 'framer-motion';
import { useHudStore } from '../store/hudStore';
import { FiDollarSign, FiZap } from 'react-icons/fi';
import './MoneyXpDisplay.css';

const MoneyXpDisplay = () => {
  const money = useHudStore((state) => state.money);
  const xp = useHudStore((state) => state.xp);

  const formatMoney = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value}`;
  };

  const formatXp = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  return (
    <motion.div
      className="money-xp-display"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Money */}
      <motion.div
        className="stat-card money"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="stat-icon money-icon">
          <FiDollarSign />
        </div>
        <div className="stat-content">
          <span className="stat-label">DINHEIRO</span>
          <motion.span
            className="stat-value"
            key={money}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formatMoney(money)}
          </motion.span>
        </div>
      </motion.div>

      {/* XP */}
      <motion.div
        className="stat-card xp"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="stat-icon xp-icon">
          <FiZap />
        </div>
        <div className="stat-content">
          <span className="stat-label">EXPERIÊNCIA</span>
          <motion.span
            className="stat-value"
            key={xp}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formatXp(xp)} XP
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoneyXpDisplay;