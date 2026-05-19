import { motion } from 'framer-motion';
import { useHudStore } from '../store/hudStore';
import { FiHeart, FiShield } from 'react-icons/fi';
import './StatusBars.css';

const StatusBars = () => {
  const health = useHudStore((state) => state.health);
  const armor = useHudStore((state) => state.armor);

  const healthPercent = Math.min(health, 100);
  const armorPercent = Math.min(armor, 100);

  return (
    <motion.div
      className="status-bars"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Health Bar */}
      <div className="status-item">
        <div className="status-header">
          <FiHeart className="status-icon health" />
          <span className="status-label">VIDA</span>
          <span className="status-value">{Math.round(health)}</span>
        </div>
        <div className="bar-container">
          <motion.div
            className="bar-fill health"
            initial={{ width: 0 }}
            animate={{ width: `${healthPercent}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="bar-shimmer"></div>
          </motion.div>
        </div>
      </div>

      {/* Armor Bar */}
      {armor > 0 && (
        <motion.div
          className="status-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="status-header">
            <FiShield className="status-icon armor" />
            <span className="status-label">ARMADURA</span>
            <span className="status-value">{Math.round(armor)}</span>
          </div>
          <div className="bar-container">
            <motion.div
              className="bar-fill armor"
              initial={{ width: 0 }}
              animate={{ width: `${armorPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="bar-shimmer"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatusBars;