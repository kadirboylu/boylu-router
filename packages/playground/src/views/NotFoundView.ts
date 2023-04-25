export const NotFoundView = () => {
  const path = window.location.pathname;

  return `<h1>404 - ${path} not found</h1>`;
};
