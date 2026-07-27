import { useState } from "react";

const slides = [
	{
		title: "introduction to Vercel",
		subtitle: "A Beginner's Guide to Website Deployment",
		points: [
			"What is Vercel?",
			"Cloud hosting platform",
			"Deploy websites and web apps",
			"Fast, secure and easy to use"
		]
	},
    
	{
		title: "Why Use Vercel?",
		points: [
			"Free Plan",
			"Fast Deployment",
			"Automatic HTTPS",
			"Custom Domains",
			"Global CDN",
			"GitHub Integration"
		]
	},
	{
		title: "How Vercel Works",
		points: [
			"Create project",
			"Push code to GitHub",
			"Import into Vercel",
			"Click Deploy",
			"Build project",
			"Website goes live"
		]
	},
	{
		title: "Main Features",
		points: [
			"Automatic Deployment",
			"Preview Deployments",
			"Custom Domains",
			"Free SSL",
			"Environment Variables",
			"Serverless Functions",
			"Analytics"
		]
	},
	{
		title: "Supported Technologies",
		points: [
			"React",
			"Next.js",
			"Vite",
			"Vue",
			"Angular",
			"HTML",
			"CSS",
			"JavaScript",
			"Express.js"
		]
	},
	{
		title: "Deploying with Vercel",
		points: [
			"Create account",
			"Connect GitHub",
			"Import repository",
			"Click Deploy",
			"Wait for build",
			"Website is live"
		]
	},
	{
		title: "Advantages & Limitations",
		points: [
			"Easy to use",
			"Fast hosting",
			"Free plan",
			"Free SSL",
			"Automatic deployment",
			"Usage limits on free plan"
		]
	},
	{
		title: "Summary",
		points: [
			"Cloud hosting platform",
			"Fast deployment",
			"GitHub integration",
			"Supports modern frameworks",
			"Automatic updates",
			"Thank You!"
		]
	},
{
		title: "End",
		points: [
			"Thank You!"
		]
	}

];

export default function App() {
	const [index, setIndex] = useState(0);

	return (
		<div className="container">
			<div className="card">
				<div className="header">
					<h1 className="title">{slides[index].title}</h1>
					{slides[index].subtitle && (
						<h3 className="subtitle">{slides[index].subtitle}</h3>
					)}
				</div>

				<ul className="points">
					{slides[index].points.map((point, i) => (
						<li key={i} className="point">
							{point}
						</li>
					))}
				</ul>

				<div className="controls">
					<button
						className="btn"
						onClick={() => setIndex((s) => Math.max(0, s - 1))}
						disabled={index === 0}
					>
						Previous
					</button>

					<span className="counter">
						{index + 1} / {slides.length}
					</span>

					<button
						className="btn primary"
						onClick={() => setIndex((s) => Math.min(slides.length - 1, s + 1))}
						disabled={index === slides.length - 1}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
