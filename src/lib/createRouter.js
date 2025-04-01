import { createObserver } from "./createObserver";

export const createRouter = (routes) => {
  const baseUrl = import.meta.env.VITE_BASE_URL ?? "/";

  const { subscribe, notify } = createObserver();

  const getPath = () => {
    const fullPath = window.location.pathname;

    return baseUrl === "/"
      ? fullPath
      : fullPath.replace(new RegExp(`^${baseUrl}`), "");
  };

  const getTarget = () => {
    console.log({
      baseUrl,
      path: getPath(),
      page: routes[getPath()],
    });

    return routes[getPath()];
  };

  const push = (path) => {
    const url = baseUrl === "/" ? path : `${baseUrl}${path}`;

    window.history.pushState(null, null, url);
    notify();
  };

  window.addEventListener("popstate", () => notify());

  return {
    get path() {
      return getPath();
    },
    push,
    subscribe,
    getTarget,
  };
};
