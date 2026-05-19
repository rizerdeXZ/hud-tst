import { motion } from 'framer-motion';
import { useHudStore } from '../store/hudStore';
import { FiGun } from 'react-icons/fi';
import './WeaponDisplay.css';

const weaponNames: { [key: number]: string } = {
  0x5ef193bb: 'PISTOL',
  0x84d6fafb: 'COMBAT PISTOL',
  0xaf113f99: 'AP PISTOL',
  0x746eed9e: 'SMG',
  0x94117305: 'MICROSMG',
  0x22d8fe39: 'ASSAULTRIFLE',
  0x3656c8c1: 'CARBINERIFLE',
  0x7f229f94: 'ADVANCEDRIFLE',
  0x06a81740: 'MG',
  0x0c472105: 'COMBATMG',
  0x2cc0e4f9: 'SHOTGUN',
  0x916245d8: 'SAWNOFFSHOTGUN',
  0xa284a47f: 'BULLPUPSHOTGUN',
  0x0a6db7ab: 'SNIPER',
  0xc472ae58: 'HEAVYSNIPER',
  0xc0a3098d: 'REMOTESNIPER',
  0x454ee927: 'ROCKETLAUNCHER',
  0x9d794e8f: 'GRENADELAUNCHER',
  0x0c472105: 'COMBATMG',
};

const WeaponDisplay = () => {
  const weapon = useHudStore((state) => state.weapon);
  const ammo = useHudStore((state) => state.ammo);

  if (!weapon) return null;

  const weaponName = weaponNames[weapon] || 'WEAPON';
  const totalAmmoDisplay = ammo.total > 999 ? '999+' : ammo.total;

  return (
    <motion.div
      className="weapon-display"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="weapon-header">
        <FiGun className="weapon-icon" />
        <span className="weapon-name">{weaponName}</span>
      </div>
      <div className="ammo-container">
        <div className="ammo-section clip">
          <span className="ammo-label">PENTE</span>
          <span className="ammo-value">{ammo.clip}</span>
        </div>
        <div className="ammo-divider"></div>
        <div className="ammo-section total">
          <span className="ammo-label">TOTAL</span>
          <span className="ammo-value">{totalAmmoDisplay}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WeaponDisplay;