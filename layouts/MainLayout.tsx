import { H } from "highlight.run";
import Head from "next/head";
import { NavBar } from "../components/NavBar";

H.init("<< HIGHLIGHT ID >>", {
  tracingOrigins: true,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
    urlBlocklist: [
      // insert urls you don't want to record here
    ],
  },
});

export const MainLayout: React.FC = () => (
  <>
    <Head>
      <title>Demo</title>
    </Head>
    <div className="flex flex-col">
      <NavBar />
    </div>
  </>
);
