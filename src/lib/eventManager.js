const eventHandlers = new Map();
const rootEventListeners = new WeakMap();

export function setupEventListeners(root) {
  if (!rootEventListeners.has(root)) {
    rootEventListeners.set(root, new Map());
  }
  const registeredEvents = rootEventListeners.get(root);

  eventHandlers.forEach((elementsMap, eventType) => {
    if (!registeredEvents.has(eventType)) {
      const listener = (event) => {
        if (elementsMap.has(event.target)) {
          const eventHandlerSet = elementsMap.get(event.target);
          eventHandlerSet.forEach((eventHandler) => eventHandler(event));
        }
      };
      root.addEventListener(eventType, listener);
      registeredEvents.set(eventType, listener);
    }
  });
}

export function addEvent(element, eventType, handler) {
  if (!eventHandlers.has(eventType)) {
    eventHandlers.set(eventType, new Map());
  }

  const elementsMap = eventHandlers.get(eventType);
  if (!elementsMap.has(element)) {
    elementsMap.set(element, new Set());
  }

  elementsMap.get(element).add(handler);
}

export function removeEvent(element, eventType, handler) {
  if (!eventHandlers.has(eventType)) {
    return;
  }

  const elementsMap = eventHandlers.get(eventType);
  if (!elementsMap.has(element)) {
    return;
  }

  elementsMap.get(element).delete(handler);
}
