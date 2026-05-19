import { useHudStore } from '../store/hudStore';
import StatusBars from './StatusBars';
import WeaponDisplay from './WeaponDisplay';
import MoneyXpDisplay from './MoneyXpDisplay';
import NotificationCenter from './NotificationCenter';
import './HudContainer.css';

const HudContainer = () => {
  const visible = useHudStore((state) => state.visible);

  if (!visible) return null;

  return (
    <div className="hud-container">
      <div className="hud-bottom-left">
        <StatusBars />
        <WeaponDisplay />
      </div>

      <div className="hud-bottom-right">
        <MoneyXpDisplay />
      </div>

      <div className="hud-notifications">
        <NotificationCenter />
      </div>
    </div>
  );
};

export default HudContainer;