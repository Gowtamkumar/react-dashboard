import { NavLink } from "react-router-dom";
import dashboardRoutes from "../../../_nav";

export default function DashBoardSidebar() {

	// let activeStyle = {
	// 	backgroundColor: '#F6F9FF'
	// };

	return (
		<div className="flex-item-left">
			<h2 className="text-center" style={{ backgroundColor: "white" }}>Logo</h2>
			{dashboardRoutes.map((sidebarItem, index) => {
				if (sidebarItem?.children) {
					return (
						<div className="accordion" id="accordionExample" key={index}>
							<div>
								<h2 className="accordion-header" id={`headingOne${sidebarItem.id}`}>
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#${sidebarItem.id}`}
										aria-expanded="true"
										aria-controls={`${sidebarItem.id}`}
									>
										{sidebarItem.title}
									</button>
								</h2>
								<div id={sidebarItem.id} className="accordion-collapse collapse" aria-labelledby={`headingOne${sidebarItem.id}`} data-bs-parent="#accordionExample">
									<div>
										{sidebarItem?.children.map((item, index) => {
											return (
												<ul key={index} className="navbar-nav sidebarChildren" >
													<li>
														<NavLink to={item.url} className="nav-link sidebaritem" >
															<span>{item.childIcon}</span>
															<span className="p-2">{item.name}</span>
														</NavLink>
													</li>
												</ul>
											)
										})
										}
									</div>
								</div>
							</div>
						</div>
					)
				} else if (sidebarItem.heading) {
					return (
						<ul className="navbar-nav">
							<li className="nav-item">
								<span className="nav-link fw-bold text-dark" style={{ marginLeft: "20px" }}>{sidebarItem.heading}</span>
							</li>
						</ul>
					)
				} else {
					return (
						<ul className="navbar-nav">
							<li>
								{/* style={{ padding: "12px", marginLeft: "10px" }} */}
								<NavLink to={`${sidebarItem.url}`} className="nav-link sidebaritem" >
									<span className="fs-5">{sidebarItem.icon}</span>
									<span className="p-2">{sidebarItem.name}</span>
								</NavLink>
							</li>
						</ul>
					)
				}
			})
			}
		</div>
	)
}