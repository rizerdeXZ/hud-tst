export interface NuiMessage {
  action: string;
  data: any;
}

type NuiCallback = (data: any) => void;

const callbacks: Map<string, NuiCallback[]> = new Map();

/**
 * Observa mensagens do backend (Lua)
 */
export const observe = <T = any>(action: string, handler: (data: T) => void) => {
  if (!callbacks.has(action)) {
    callbacks.set(action, []);
  }
  callbacks.get(action)!.push(handler);
};

/**
 * Envia mensagens para o backend (Lua)
 */
export const Post = {
  async create<T = any>(eventName: string, data: any = {}, callback?: (response: T) => void) {
    return new Promise((resolve) => {
      fetch(`https://${GetParentResourceName()}/` + eventName, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (callback) callback(data);
          resolve(data);
        })
        .catch((error) => {
          console.error(`Erro ao enviar para ${eventName}:`, error);
          resolve(null);
        });
    });
  },
};

/**
 * Registra callback do NUI
 */
if ((window as any).RegisterNuiCallbackType) {
  (window as any).RegisterNuiCallbackType('nui-ready');
  (window as any).on('message', (message: NuiMessage) => {
    const handlers = callbacks.get(message.action);
    if (handlers) {
      handlers.forEach((handler) => {
        try {
          handler(message.data);
        } catch (error) {
          console.error(`Erro ao executar handler para ${message.action}:`, error);
        }
      });
    }
  });
}

/**
 * Pega nome do resource
 */
function GetParentResourceName(): string {
  return 'hud-tst';
}