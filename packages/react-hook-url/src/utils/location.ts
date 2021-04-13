let origin = window.location.origin;

const init = (path?: string) => {
  if (path) {
    origin = path;
  }
};

export const location = { origin, init };
