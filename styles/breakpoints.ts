const size = {
  // mobile: "428px",
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
};

export default device;
