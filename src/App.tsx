import { useEffect } from 'react';
import { useHudStore } from './store/hudStore';
import { observe } from './utils/nui';
import HudContainer from './components/HudContainer';
import './App.css';

function App() {
  const {
    setVisible,
    updateStatus,
    setWeapon,
    setMoney,
    setXp,
    addNotification,
    removeNotification,
    setHotbar,
    setScoreboard,
  } = useHudStore();

  useEffect(() => {
    // Observar mensagens do backend
    observe('hud:setVisible', (state: boolean) => {
      setVisible(state);
    });

    observe('hud:updateStatus', (data: { health: number; armor: number }) => {
      updateStatus(data.health, data.armor);
    });

    observe('hud:setWeapon', (data: any) => {
      if (data) {
        setWeapon(data.weapon, { clip: data.ammo[0], total: data.ammo[1] });
      } else {
        setWeapon(null, { clip: 0, total: 0 });
      }
    });

    observe('hud:setMoney', (money: number) => {
      setMoney(money);
    });

    observe('hud:setXp', (xp: number) => {
      setXp(xp);
    });

    observe('hud:notify', (data: { title: string; text: string; type: string }) => {
      const id = Date.now().toString();
      addNotification(data.title, data.text, data.type as any);
      setTimeout(() => removeNotification(id), 5000);
    });

    observe('hud:setHotbar', (items: any[]) => {
      setHotbar(items);
    });

    observe('hud:setScoreboard', (data: any) => {
      setScoreboard(data);
    });

    // Notificar que NUI está pronto
    if ((window as any).SetNuiFocus) {
      (window as any).SetNuiFocus(false, false);
    }
  }, [setVisible, updateStatus, setWeapon, setMoney, setXp, addNotification, removeNotification, setHotbar, setScoreboard]);

  return (
    <div className="app">
      <HudContainer />
    </div>
  );
}

export default App;