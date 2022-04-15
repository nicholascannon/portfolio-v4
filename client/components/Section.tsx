import React, { useRef, useState } from "react";
import Head from "next/head";
import useIsVisible from "../hooks/useIsVisible";

const VISIBILITY_OFFSET = "-45%";
const SITE_TITLE = "niccannon.com";

interface PropTypes {
  children: React.ReactNode;
  title?: string;
}

const Section: React.FC<PropTypes> = ({ title = "", children }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const visible = useIsVisible(ref, VISIBILITY_OFFSET);

  if (visible && !hasBeenVisible) setHasBeenVisible(true);
  const websiteTitle = title ? `${SITE_TITLE} | ${title.toLowerCase()}` : SITE_TITLE;

  return (
    <>
      <Head>{visible && <title>{websiteTitle}</title>}</Head>

      <section ref={ref}>
        {children}
      </section>
    </>
  );
};

export default Section;
