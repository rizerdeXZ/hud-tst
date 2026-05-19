import { motion, AnimatePresence } from 'framer-motion';
import { useHudStore } from '../store/hudStore';
import { FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi';
import './NotificationCenter.css';

const NotificationCenter = () => {
  const notifications = useHudStore((state) => state.notifications);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="notification-icon success" />;
      case 'error':
        return <FiAlertCircle className="notification-icon error" />;
      case 'warning':
        return <FiAlertTriangle className="notification-icon warning" />;
      default:
        return <FiInfo className="notification-icon info" />;
    }
  };

  return (
    <AnimatePresence>
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          className={`notification notification-${notification.type}`}
          initial={{ opacity: 0, x: 100, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="notification-icon-wrapper">
            {getIcon(notification.type)}
          </div>
          <div className="notification-content">
            <div className="notification-title">{notification.title}</div>
            <div className="notification-text">{notification.text}</div>
          </div>
          <div className="notification-progress"></div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default NotificationCenter;