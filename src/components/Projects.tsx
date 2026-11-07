import { motion } from "framer-motion";
import { CheckCircle2, FolderGit2 } from "lucide-react";

export default function Projects() {
	const projects = [
		{
			title: "Airbnb Clone",
			description:
				"A full-stack Airbnb clone built with the MERN stack, featuring secure authentication and role-based access control.",
			highlights: [
				"Created an Airbnb clone using the MERN stack (MongoDB, Express.js, React, Node.js)",
				"Implemented role-based access control (RBAC) to separate user and host permissions",
				"Implemented JWT authentication for secure, stateless user sessions",
			],
			skills: [
				"MongoDB",
				"Express.js",
				"React",
				"Node.js",
				"JWT",
				"RBAC",
			],
		},
	];

	return (
		<section id="projects" className="w-full px-6 py-24 lg:px-12 xl:px-20">
			<div className="mx-auto max-w-[1600px]">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mb-12"
				>
					<p className="mb-3 text-sm text-center font-semibold uppercase tracking-[0.3em] text-cyan-400">
						Projects
					</p>

					<h2 className="text-4xl font-bold text-center text-white lg:text-5xl">
						What I've Built
					</h2>
				</motion.div>

				{/* Project List */}
				<div className="mx-auto max-w-7xl space-y-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.04]"
						>
							<h3 className="flex items-center gap-2.5 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
								<FolderGit2 className="h-5 w-5 shrink-0 text-cyan-400" />
								{project.title}
							</h3>

							<p className="mt-4 text-sm leading-relaxed text-gray-300">
								{project.description}
							</p>

							<div className="mt-6">
								<ul className="space-y-2.5">
									{project.highlights.map((item, idx) => (
										<li
											key={idx}
											className="flex items-start gap-3 text-sm text-gray-300"
										>
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
								{project.skills.map((skill, idx) => (
									<span
										key={idx}
										className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
