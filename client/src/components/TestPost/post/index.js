import API from "../../../API";
import React, { useRef, useState } from "react";

const Post = () => {
	const noteInput = useRef();
	const [alert, setAlert] = useState();

	const clearAlert = () => {
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};

	const postNew = () => {
		const input = noteInput.current.value;

		if (!input) {
			setAlert(<div className="error">Please Enter A Note</div>);
			clearAlert();
			return;
		} else {
			setAlert(<div className="success">New Note Note Added</div>);
		}

		API.postTest({ message: input })
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<input ref={noteInput} placeholder="Note"></input>
			<div>{alert}</div>
			<button className="btn" onClick={postNew}>
				Click To Post
			</button>
		</div>
	);
};

export default Post;
