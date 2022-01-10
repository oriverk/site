import { h, FunctionalComponent } from "preact";
import { styled } from "goober";

import { Seo } from "../components/seo";
import markdown from "../../resume.md?raw";
import { parseMarkdwon } from "../utils/markdown";
import { DangerouslySetInnerHTML } from "../components/markdown";

interface Props {
  className?: string;
}

const Component: FunctionalComponent<Props> = (props) => {
  const { html } = parseMarkdwon(markdown.replace(/\n#/g, "\n"));

  return (
    <div {...props}>
      <Seo path="/about/" title="About" description="About Kawano Yudai" noindex />
      <DangerouslySetInnerHTML html={html} />
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: var(--max-width);
  padding: 1rem;
`;

const ContainerComponent: FunctionalComponent = () => <StyledComponent />;

export const About = ContainerComponent;
