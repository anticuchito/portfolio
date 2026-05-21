import { describe, it, expect } from "vitest";
import { getIconData, iconToSVG } from "@iconify/utils";

import * as skillIconsPkg from "@iconify-json/skill-icons";
import * as deviconPkg from "@iconify-json/devicon";
import * as logosPkg from "@iconify-json/logos";
import * as simpleIconsPkg from "@iconify-json/simple-icons";

const collections: Record<string, any> = {
  "skill-icons": skillIconsPkg.icons,
  devicon: deviconPkg.icons,
  logos: logosPkg.icons,
  "simple-icons": simpleIconsPkg.icons,
};

const usedIcons = [
  "skill-icons:react-light",
  "skill-icons:angular-light",
  "skill-icons:vuejs-light",
  "skill-icons:typescript",
  "skill-icons:javascript",
  "skill-icons:nodejs-light",
  "skill-icons:expressjs-light",
  "skill-icons:python-light",
  "skill-icons:aws-light",
  "devicon:dynamodb",
  "skill-icons:mysql-light",
  "skill-icons:postgresql-light",
  "skill-icons:graphql-light",
  "logos:trpc",
  "skill-icons:jenkins-light",
  "skill-icons:githubactions-light",
  "skill-icons:docker",
  "skill-icons:git",
  "skill-icons:github-light",
  "simple-icons:jira",
  "skill-icons:linux-light",
  "skill-icons:gmail-light",
  "skill-icons:linkedin",
  "skill-icons:twitter",
];

describe("Icon collections availability", () => {
  it.each(Object.keys(collections))("should have collection: %s", (key) => {
    const col = collections[key];
    expect(col).toBeDefined();
    expect(col.icons).toBeDefined();
    expect(Object.keys(col.icons).length).toBeGreaterThan(0);
  });
});

describe("Used icons resolution", () => {
  it.each(usedIcons)("should resolve icon: %s", (name) => {
    const [setName, iconName] = name.split(":");
    const collection = collections[setName];
    expect(collection).toBeDefined();

    const iconData = getIconData(collection, iconName);
    expect(iconData).toBeDefined();
    expect(iconData.body).toBeDefined();
    expect(iconData.body.length).toBeGreaterThan(0);
  });
});

describe("iconToSVG output", () => {
  it("should generate valid SVG for react-light", () => {
    const iconData = getIconData(collections["skill-icons"], "react-light");
    expect(iconData).toBeDefined();

    const result = iconToSVG(iconData);
    expect(result.attributes).toBeDefined();
    expect(result.body).toBeDefined();
    expect(result.attributes.viewBox).toMatch(/\d+/);
  });
});
