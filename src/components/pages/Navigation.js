/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React from "react";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	"main-navigation": {
		float: "left",
  	width: "20%",
		
		"& > div": {
			width: "50%",
			marginLeft: "20%",
			marginTop: "10px",

			fontSize: "18px",
		},
		"& a": {
			textDecoration: "none",
			color: "black",

			"&:hover": {
				color: "gray",
			},
		},
		"& span": {
			color: "gray",
		},
	},
})

function Navigation() {
	const classes = useStyles();

	return (
		<div className={classes["main-navigation"]}>
				<div>
					<a href="#">Спортивный стиль<span> (228)</span></a>
				</div>
				<div>
					<a href="#">Jordan<span> (28)</span></a>
				</div>
				<div>
					<a href="#">Бег<span> (56)</span></a>
				</div>
				<div>
					<a href="#">Баскетбол<span> (34)</span></a>
				</div>
				<div>
					<a href="#">Фитнес<span> (16)</span></a>
				</div>
				<div>
					<a href="#">Футбол<span> (88)</span></a>
				</div>
				<div>
					<a href="#">Скейтбординг<span> (35)</span></a>
				</div>
				<div>
					<a href="#">Американский футбол<span> (2)</span></a>
				</div>
				<div>
					<a href="#">Бейсбол<span> (8)</span></a>
				</div>
				<div>
					<a href="#">Гольф<span> (16)</span></a>
				</div>
				<div>
					<a href="#">Теннис<span> (22)</span></a>
				</div>
				<div>
					<a href="#">Легкая атлетика<span> (14)</span></a>
				</div>
				<div>
					<a href="#">Ходьба<span> (30)</span></a>
				</div>
				<div>
					<a href="#">Йога<span> (0)</span></a>
				</div>
				<div>
					<a href="#">Плавание<span> (0)</span></a>
				</div>
				<div>
					<a href="#">Волейбол<span> (0)</span></a>
				</div>
			</div>
	)
}

export default Navigation;