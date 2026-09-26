import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={dmSans.className}>
			<body>{children}</body>
		</html>
	);
}
