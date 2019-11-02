/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React, {useEffect} from "react";
import {connect} from "react-redux";

import { fetchCategories } from "../../Redux/actions/actions";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	"main-navigation": {
		float: "left",
		width: "20%",
		marginTop: "10px",
		marginBottom: "20px",		
		
		"& > div": {
			width: "50%",
			marginLeft: "20%",
			marginTop: "10px",

			fontSize: "18px",

			cursor: "pointer",
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

const CATEGORIES_URL = "categories";

const Navigation = (props) => {
	const classes = useStyles();

	useEffect( () => {
		props.fetchCategoriesFrom(CATEGORIES_URL)
		// useEffect должна вызываться 1 раз
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return (
		<div className={classes["main-navigation"]}>
			{
				props.categories.map( (category) => {
					return (
						<div>
							<a href={category.href}>
								{category.name}
								<span> ({category.number}) </span>
							</a>
						</div>
					)
					}
				)
			}
		</div>
	)
}

const mapStateToProps = state => {
	if (state.categoriesReducer) {
		return {
			categories: state.categoriesReducer.categories,
		}
	} else {
		return {
			categories: [],
		}
	}
	
};

const mapDispatchToProps = dispatch => ({
  fetchCategoriesFrom: (url) => { 
    dispatch(fetchCategories(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);