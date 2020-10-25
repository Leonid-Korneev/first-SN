
import React from "react";
import profileReducer, {addPost} from "./profile-reducer";




test('new post should be added', () => {
    // arrange
    let initialState = {
        postsData: [
            {id: 1, text: "hi, how are you?", likes: 30},
            {id: 2, text: "This is my first post", likes: 43}
        ]}
    let actionCreator =   addPost ("test")

   // act
   let newState = profileReducer(initialState,actionCreator)
    //assert
    expect(newState.postsData.length).toBe(3)

});
