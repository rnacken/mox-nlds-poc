import React from "react";
import "./App.css";
import { MoxAtomBox, MoxBox } from "./moxReact/uiAtoms/layout/Box";

const Comp = ({ foo }: { foo: string }) => <div>{foo}</div>;

const App = () => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <>
      <MoxBox>Simple box (shorthand import for Atom-component)</MoxBox>
      <MoxAtomBox as="section" href="#">
        Section
      </MoxAtomBox>
      <MoxAtomBox as="a" href="#" foo="1" ref={linkRef}>
        Link
      </MoxAtomBox>
      <MoxAtomBox
        inlineSize={{ mobileMax: "md" }}
        blockSize="md"
        bloep="23"
        as={Comp}
        foo="foo-value"
        ref={linkRef}
      />
    </>
  );
  return <div></div>;
};

export default App;
