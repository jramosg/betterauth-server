// components/email/EmailLogo.tsx
import { Section, Img } from "@react-email/components";
import * as React from "react";

export const EmailLogo = () => (
  <Section style={{ textAlign: "center", marginBottom: 20 }}>
    <Img
      src="https://www.trukun.com/images/UdalaCompleteColorPrimary.png"
      alt="Trukun logo"
      width={343.12}
      height={100}
      style={{ margin: "0 auto" }}
    />
  </Section>
);
