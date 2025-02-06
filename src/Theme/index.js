export function getCustomTheme(mode) {
  return {
    palette: {
      mode,
      ...(mode === 'light' ? {} : {}),
    },
  };
}
