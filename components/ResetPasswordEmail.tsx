// components/email/ResetPasswordEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
} from "@react-email/components";
import * as React from "react";
import { render, pretty } from "@react-email/render";
import { EmailLogo } from "./EmailLogo";
import { LanguageSection } from "./LanguageSection";
import EmailFooter from "./EmailFooter";

interface ResetPasswordEmailProps {
  url: string;
  userName?: string;
}

export const ResetPasswordEmail = ({
  url,
  userName,
}: ResetPasswordEmailProps) => {
  const brandColor = "#8348B6";

  return (
    <Html lang="eu">
      <Head />
      <Preview>
        {`${userName}: Eguneratu zure pasahitza / Actualiza tu contraseña`}
      </Preview>
      <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            padding: 30,
            maxWidth: 600,
            margin: "40px auto",
          }}
        >
          <EmailLogo />

          <LanguageSection
            title="Eguneratu zure pasahitza"
            greeting={[
              `Kaixo${userName ? ` ${userName}` : ""}:`,
              <br key="1" />,
              "Mesedez, egin klik beheko botoian zure pasahitza eguneratzeko:",
            ]}
            actionText="Eguneratu Pasahitza"
            url={url}
            brandColor={brandColor}
          />

          <hr
            style={{
              margin: "30px 0",
              border: "none",
              borderTop: "1px solid #eee",
            }}
          />

          <LanguageSection
            greeting={[
              `Hola${userName ? ` ${userName}` : ""}:`,
              <br key="1" />,
              "Haz clic en el siguiente botón para actualizar tu contraseña:",
            ]}
            actionText="Actualizar Contraseña"
            url={url}
            brandColor={brandColor}
          />

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
};

export async function getResetPasswordEmailText(
  props: ResetPasswordEmailProps
) {
  return await pretty(await render(<ResetPasswordEmail {...props} />));
}
