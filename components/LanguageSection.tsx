// components/email/LanguageSection.tsx
import { Section, Text, Button } from "@react-email/components";
import * as React from "react";

interface LanguageSectionProps {
  title?: string;
  greeting: React.ReactNode;
  actionText: string;
  url: string;
  brandColor: string;
}

export const LanguageSection = ({
  title,
  greeting,
  actionText,
  url,
  brandColor,
}: LanguageSectionProps) => (
  <Section>
    {title && (
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
        {title}
      </Text>
    )}
    <Text style={{ fontSize: 14, color: "#555" }}>{greeting}</Text>
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
      {actionText}
    </Button>
  </Section>
);
