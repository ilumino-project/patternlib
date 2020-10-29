import * as React from "react";
import { ThemeProvider } from "styled-components";
import Helmet from "react-helmet"
import * as Favicon from "./cover.favicon";
import * as Components from "@patternplate/components";
import { Logo } from "./cover.logo";
import * as Stage from "./cover.stage";
import * as Connection from "./cover.connection";
import * as Principles from "./cover.principles";
import * as Principle from "./cover.principle";
import * as Styles from "./cover.styles";
import { NoBr } from "./cover.util";
import { GlobalStyle } from "./cover.global-style";

export const Cover: React.SFC = function Covder() {
  const themes = Components.themes.getThemes();

  return (
    <ThemeProvider theme={themes.dark}>
      <React.Fragment>
        <Helmet
          title="patternplate"
          link={[
            {
              rel: "icon",
              type: "text/svg",
              href: Favicon.svg
            },
            {
              rel: "icon",
              type: "image/png",
              href: Favicon.png
            }
          ]}
          meta={[
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes"
            }
          ]}
        />
        <GlobalStyle/>
        <Stage.StageContainer>
          <Styles.Frame>
            <div style={{ minHeight: "100vh" }}>
              <Logo />
              <Stage.Stage>
                <Stage.StageSlot>
                  <Stage.StageHeadline order={0}>
                    ilumino <NoBr>Pattern Library</NoBr>
                  </Stage.StageHeadline>
                  <Stage.StageText>
                    Providing accessible code patterns for your projects.
                  </Stage.StageText>
                  <ThemeProvider theme={themes.light}>
                    <Stage.StageButton variant="big" href="./doc/docs/guides/cover.html?guides-enabled=true">
                      <Stage.StageButtonText>
                        Get Started
                      </Stage.StageButtonText>
                    </Stage.StageButton>
                  </ThemeProvider>
                </Stage.StageSlot>
                <Stage.StageSlot>
                  <Stage.StageImage src="https://patternplate.github.io/media/images/screenshot-site.svg" />
                </Stage.StageSlot>
              </Stage.Stage>
            </div>
          </Styles.Frame>
        </Stage.StageContainer>

        <ThemeProvider theme={themes.light}>
          <Styles.ButtonRow>
            <Styles.Frame>
              <Styles.ButtonRowContent>
                <Styles.ButtonRowRight>
                  <Components.Text>
                    Maintained by <Styles.InlineLink href="https://ilumino.co" target="_blank">ilumino, LLC 2020</Styles.InlineLink>
                  </Components.Text>
                </Styles.ButtonRowRight>
              </Styles.ButtonRowContent>
            </Styles.Frame>
          </Styles.ButtonRow>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
