"use strict";

const PageLayout = require("./layouts/Page.cjs");

const TextImageBlock = require("./blocks/TextImage.cjs");
const HeroBlock = require("./blocks/Hero.cjs");

require("./styles.css");

const theme = {
  meta: {
    name: "Lumeo Base Theme",
    version: "0.1.0",
  },

  layouts: {
    Page: PageLayout,
  },

  blocks: {
    "text-image": TextImageBlock,
    hero: HeroBlock,
  },

  globals: {
    // Header,
    // Footer,
  },
};

module.exports = theme;
