/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-colors-base-white": "#fff",
        "d-colors-semantic-primary": "#4338ca",
        "d-colors-base-neutral": "#374151",
        "d-colors-semantic-primary-content": "#c7d2fe",
        "d-colors-base-base-300": "#d1d5db",
        lightslategray: "#72829b",
      },
      spacing: {
        "t-spacing-2": "8px",
        "t-spacing-3": "12px",
        "t-spacing-05": "2px",
        "t-spacing-1": "4px",
        "t-spacing-21": "8px",
      },
      fontFamily: {
        "daisyui-text-xs": "Roboto",
        "ibm-plex-mono": "'IBM Plex Mono'",
      },
      borderRadius: {
        "9980xl": "9999px",
        "t-borders-radius-rounded-lg": "8px",
        "t-borders-radius-rounded-full": "9999px",
        "t-spacing-21": "8px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
