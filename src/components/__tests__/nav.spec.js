import React from "react";
import { render } from "@testing-library/react";
import * as _ from "lodash";

import Nav from "../nav";
import { Menus } from "../../utils/constants";

describe("Nav Component", () => {
  it("has correct links", () => {
    const { getAllByRole } = render(<Nav />);
    const links = getAllByRole("link");

    expect(links.length).toEqual(Menus.length);
    _.zip(Menus, links).forEach((pair) => {
      expect(pair[0].value).toEqual(pair[1].textContent);
      expect(pair[0].link).toEqual(pair[1].getAttribute(`href`));
    });
  });
});
