"use client";
import { SignOutButton } from "@clerk/nextjs";

export default function HomePage() {
	return (
		<div>
			<h1>HomePage</h1>
			<SignOutButton />
		</div>
	);
}
