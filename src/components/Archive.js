import React from "react";

import "../styles/Archive.css";
import { ProjectsProducts } from "./Archive/ProjectsProducts";
import cover_archive from "../materials/img/cover-archive.jpg";

function Archive() {
	return (
		<div className="archive">
			{/* cover image for archive */}
			<div className="cover-archive">
				<img
					className="img-cover-archive"
					src={cover_archive}
					alt="Cover Archive"
				/>
				<div className="title-cover-archive">
					<h1>Study Projects</h1>
					<h2>and</h2>
					<h1>Art Products</h1>
				</div>
			</div>
			<ProjectsProducts />
		</div>
	);
}

export default Archive;
