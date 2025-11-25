const STEPS = [400, 500, 600, 700];
const COLORS = ["green", /* "emerald", "teal", "cyan", "sky", */ "blue"];

const getRandomIntegerLessThan10 = () => {
  return Math.floor(Math.random() * 10);
};

// const randomColorGenerator = () => {
//   const stepsLength = STEPS.length;
//   const colorsLength = COLORS.length;
//   return `${COLORS[getRandomIntegerLessThan10() % colorsLength]}-${
//     STEPS[getRandomIntegerLessThan10() % stepsLength]
//   }`;
// };

const COLOR_BLUE_400 = "oklch(0.707 0.165 254.624)";
const COLOR_BLUE_500 = "oklch(0.623 0.214 259.815)";
const COLOR_BLUE_600 = "oklch(0.546 0.245 262.881)";
const COLOR_BLUE_700 = "oklch(0.488 0.243 264.376)";

const COLOR_SKY_400 = "oklch(0.746 0.16 232.661)";
const COLOR_SKY_500 = "oklch(0.685 0.169 237.323)";
const COLOR_SKY_600 = "oklch(0.588 0.158 241.966)";
const COLOR_SKY_700 = "oklch(0.5 0.134 242.749)";

const COLOR_CYAN_400 = "oklch(0.789 0.154 211.53)";
const COLOR_CYAN_500 = "oklch(0.715 0.143 215.221)";
const COLOR_CYAN_600 = "oklch(0.609 0.126 221.723)";
const COLOR_CYAN_700 = "oklch(0.52 0.105 223.128)";

const COLOR_TEAL_400 = "oklch(0.777 0.152 181.912)";
const COLOR_TEAL_500 = "oklch(0.704 0.14 182.503)";
const COLOR_TEAL_600 = "oklch(0.6 0.118 184.704)";
const COLOR_TEAL_700 = "oklch(0.511 0.096 186.391)";

const palette = [
  COLOR_BLUE_400,
  COLOR_BLUE_500,
  COLOR_BLUE_600,
  COLOR_BLUE_700,
  COLOR_SKY_400,
  COLOR_SKY_500,
  COLOR_SKY_600,
  COLOR_SKY_700,
  COLOR_CYAN_400,
  COLOR_CYAN_500,
  COLOR_CYAN_600,
  COLOR_CYAN_700,
  COLOR_TEAL_400,
  COLOR_TEAL_500,
  COLOR_TEAL_600,
  COLOR_TEAL_700,
];

const randomColorGenerator = () =>
  palette[getRandomIntegerLessThan10() % palette.length];

export { randomColorGenerator };
