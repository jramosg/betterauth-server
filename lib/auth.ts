import { betterAuth } from "better-auth";
import { bearer, jwt, openAPI } from "better-auth/plugins";
import { Pool } from "pg";
import { expo } from "@better-auth/expo";
import { sendEmail } from "@/lib/email";
import { getVerifyEmailText } from "@/components/VerifyEmail";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL as string,
  }),
  user: {
    additionalFields: {
      lang: {
        type: "string",
        required: false,
      },
      dni: {
        type: "string",
        required: false,
      },
      firstName: {
        type: "string",
        required: false,
      },
      lastName: {
        type: "string",
        required: false,
      },
      lastName2: {
        type: "string",
        required: false,
      },
      onboardingDone: {
        type: "boolean",
        required: false,
        defaultValue: false,
      },
    },
  },
  plugins: [
    expo(),
    jwt({
      jwks: {
        keyPairConfig: {
          alg: "EdDSA",
          crv: "Ed25519",
        },
      },
      jwt: {
        expirationTime: "1h",
      },
    }),
    bearer(),
    openAPI(),
  ],

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  trustedOrigins: [
    "trukun://",
    "http://localhost:8081",
    "http://localhost:3000",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => {
        return {
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
        };
      },
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Egiaztatu zure emaila | Verifica tu email",
        html: await getVerifyEmailText({ url, userName: user.name }),
      });
    },
  },
  advanced: {
    cookiePrefix: "trukun",
  },
});
