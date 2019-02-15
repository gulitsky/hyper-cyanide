"use strict";

const BLACK = "#444";
const WHITE = "#EFEFEF";
const CYANIDE_BLUE = "#64B2DB";

const cursorColor = "rgba(204, 204, 204, 0.8)";
const cursorAccentColor = BLACK;
const foregroundColor = "#CCC";
const backgroundColor = "#0A0A0A";
const selectionColor = "rgba(37, 37, 37, 0.5)";

const colors = {
  black: BLACK,
  red: CYANIDE_BLUE,
  green: CYANIDE_BLUE,
  yellow: CYANIDE_BLUE,
  blue: CYANIDE_BLUE,
  magenta: CYANIDE_BLUE,
  cyan: CYANIDE_BLUE,
  white: WHITE,
  lightBlack: CYANIDE_BLUE,
  lightRed: CYANIDE_BLUE,
  lightGreen: CYANIDE_BLUE,
  lightYellow: CYANIDE_BLUE,
  lightBlue: CYANIDE_BLUE,
  lightMagenta: CYANIDE_BLUE,
  lightCyan: CYANIDE_BLUE,
  lightWhite: WHITE
};

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor,
    cursorAccentColor,
    foregroundColor,
    backgroundColor,
    selectionColor,
    colors
  });
