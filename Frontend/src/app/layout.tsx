import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";
import { UserProvider } from "@/providers/users-providers";
import ConfigProvider from "antd/es/config-provider";
import ResilienceHeader from "@/components/header/Header";
import { SurvivorProvider } from "@/providers/survivors-provider";
import { LocationProvider } from "../providers/location-provider";
import { MedicalCentreProvider } from "@/providers/medicalCenter-provider";
import { PoliceStationProvider } from "@/providers/police-provider";
import { JournalEntryProvider } from "@/providers/journal-provider";
import { TestimonyProvider } from "@/providers/testimony-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resilience - Support When You Need It",
  description: "A supportive platform for survivors of sexual assault",
};

const ResilienceColors = {
  token: {
    // Primary color - purple from shield
    colorPrimary: "#9E9AC8",
    colorPrimaryHover: "#7B75AA",
    colorPrimaryActive: "#6A659A",

    // Secondary color - light blue from background
    colorInfo: "#A5D5E8",
    colorInfoHover: "#8EC5DE",
    colorInfoActive: "#76B5D3",

    // Success color - complementary green tone
    colorSuccess: "#7AC7A6",
    colorSuccessHover: "#5FB892",
    colorSuccessActive: "#46A77E",

    // Warning color - soft amber
    colorWarning: "#F4D06F",
    colorWarningHover: "#EABA4E",
    colorWarningActive: "#DFAA32",

    // Error color - gentle but noticeable
    colorError: "#E89B9B",
    colorErrorHover: "#DE7F7F",
    colorErrorActive: "#D46464",

    // Neutral colors
    colorText: "#333340",
    colorTextSecondary: "#666675",
    colorTextTertiary: "#9999A8",
    colorBorder: "#D9D9E6",
    colorBorderSecondary: "#E8E8F0",

    // Background colors
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FAFAFA",
    colorBgLayout: "#F0F2F5",
    colorBgSpotlight: "#F5F3FF",
    colorBgTextHover: "#9E9AC8",

    wireframe: false,
  },
  components: {
    Button: {
      borderRadius: 8,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 12,
    },
    Input: {
      borderRadius: 8,
      controlHeight: 40,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={ResilienceColors}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ResilienceHeader />
          <AuthProvider>
            <UserProvider>
              <LocationProvider>
                <MedicalCentreProvider>
                  <PoliceStationProvider>
                    <SurvivorProvider>
                      <TestimonyProvider>
                        <JournalEntryProvider>{children}</JournalEntryProvider>
                      </TestimonyProvider>
                    </SurvivorProvider>
                  </PoliceStationProvider>
                </MedicalCentreProvider>
              </LocationProvider>
            </UserProvider>
          </AuthProvider>
        </body>
      </html>
    </ConfigProvider>
  );
}
