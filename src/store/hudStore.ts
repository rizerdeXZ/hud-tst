import { create } from 'zustand';

export interface HudState {
  visible: boolean;
  health: number;
  armor: number;
  weapon: number | null;
  ammo: { clip: number; total: number };
  money: number;
  xp: number;
  notifications: Array<{
    id: string;
    title: string;
    text: string;
    type: 'info' | 'success' | 'warning' | 'error';
  }>;
  hotbarItems: any[];
  scoreboardData: any;
}

export const useHudStore = create<HudState & {
  setVisible: (visible: boolean) => void;
  updateStatus: (health: number, armor: number) => void;
  setWeapon: (weapon: number | null, ammo: { clip: number; total: number }) => void;
  setMoney: (money: number) => void;
  setXp: (xp: number) => void;
  addNotification: (title: string, text: string, type: 'info' | 'success' | 'warning' | 'error') => void;
  removeNotification: (id: string) => void;
  setHotbar: (items: any[]) => void;
  setScoreboard: (data: any) => void;
}>((set) => ({
  visible: false,
  health: 100,
  armor: 0,
  weapon: null,
  ammo: { clip: 0, total: 0 },
  money: 0,
  xp: 0,
  notifications: [],
  hotbarItems: [],
  scoreboardData: {},

  setVisible: (visible) => set({ visible }),
  
  updateStatus: (health, armor) => set({ health, armor }),
  
  setWeapon: (weapon, ammo) => set({ weapon, ammo }),
  
  setMoney: (money) => set({ money }),
  
  setXp: (xp) => set({ xp }),
  
  addNotification: (title, text, type) => set((state) => ({
    notifications: [
      ...state.notifications,
      {
        id: Date.now().toString(),
        title,
        text,
        type,
      },
    ],
  })),
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
  
  setHotbar: (items) => set({ hotbarItems: items }),
  
  setScoreboard: (data) => set({ scoreboardData: data }),
}));