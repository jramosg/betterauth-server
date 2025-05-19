import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";
import { render, pretty } from "@react-email/render";
import EmailFooter from "./EmailFooter";
import { EmailLogo } from "./EmailLogo";

interface VerifyEmailProps {
  url: string;
  userName?: string;
}

export const VerifyEmail = ({ url, userName }: VerifyEmailProps) => {
  const brandColor = "#8348B6";

  return (
    <Html lang="eu">
      <Head />
      <Preview>
        {`${userName}: Egiaztatu zure emaila / Verifica tu correo`}
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

          {/* Basque section */}
          <Section>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
              Egiaztatu zure helbide elektronikoa
            </Text>
            <Text style={{ fontSize: 14, color: "#555" }}>
              Kaixo{userName ? ` ${userName}` : ""}:<br />
              Mesedez, egin klik botoian zure emaila egiaztatzeko:
            </Text>
            <Button
              href={url}
              style={{
                backgroundColor: brandColor,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                marginTop: 12,
              }}
            >
              Egiaztatu Emaila
            </Button>
          </Section>

          <hr
            style={{
              margin: "30px 0",
              border: "none",
              borderTop: "1px solid #eee",
            }}
          />

          {/* Spanish section */}
          <Section>
            <Text style={{ fontSize: 14, color: "#555" }}>
              Hola{userName ? ` ${userName}` : ""}:<br />
              Haz clic en el siguiente botón para verificar tu correo:
            </Text>
            <Button
              href={url}
              style={{
                backgroundColor: brandColor,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                marginTop: 12,
              }}
            >
              Verificar Email
            </Button>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
};

export async function getVerifyEmailText(props: VerifyEmailProps) {
  return await pretty(await render(<VerifyEmail {...props} />));
}
